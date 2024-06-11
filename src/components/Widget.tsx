import { ReactNode, FC } from "react";

type WidgetProps = {
  children: ReactNode;
};

const Widget: FC<WidgetProps> = ({ children }) => {
  return <div className="px-[24px] py-[22px] rounded-[15px]">{children}</div>;
};

export default Widget;
