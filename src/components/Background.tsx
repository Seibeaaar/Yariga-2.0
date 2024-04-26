import { FC, ReactNode } from "react";

type ScreenContainerProps = {
  children: ReactNode;
  className?: string;
};

const ScreenBackground: FC<ScreenContainerProps> = ({
  children,
  className,
}) => (
  <main
    className={`w-screen min-h-screen bg-light dark:bg-black text-primary-light dark:text-primary-dark ${className}`}
  >
    {children}
  </main>
);

export default ScreenBackground;
