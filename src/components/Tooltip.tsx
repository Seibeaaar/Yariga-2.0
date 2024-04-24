import { Snackbar, Alert, AlertTitle, AlertColor } from "@mui/material";
import { FC, useState, useEffect } from "react";

type TooltipProps = {
  title: string;
  content: string;
  showTooltip: boolean;
  vertical: "top" | "bottom";
  horizontal: "center" | "right" | "left";
  severity: AlertColor;
};

const Tooltip: FC<TooltipProps> = ({
  title,
  content,
  showTooltip,
  vertical,
  horizontal,
  severity,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (showTooltip !== open) {
      setOpen(showTooltip);
    }
  }, [showTooltip]);

  return (
    <Snackbar
      anchorOrigin={{vertical, horizontal}}
      open={open}
      autoHideDuration={5000}
      onClose={() => setOpen(false)}
    >
      <Alert variant="filled" severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {content}
      </Alert>
    </Snackbar>
  );
};

export default Tooltip;
