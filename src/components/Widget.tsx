import { ReactNode, FC } from "react";

type WidgetProps = {
  children: ReactNode;
  className?: string
};

const Widget: FC<WidgetProps> = ({ children, className }) => {
  return (
    <div className={`px-[24px] bg-white dark:bg-black py-[22px] rounded-[15px] ${className}`}>
      {children}
    </div>
  );
};

export default Widget;
