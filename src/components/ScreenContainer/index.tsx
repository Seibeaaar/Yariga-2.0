import { ReactNode, FC } from "react";
import Navbar from "./Navbar";
import Header from "./Header";

type ScreenContainerProps = {
  children: ReactNode;
  pageTitle: string;
  actionItem?: ReactNode;
};

const ScreenContainer: FC<ScreenContainerProps> = ({
  children,
  pageTitle,
  actionItem,
}) => {
  return (
    <main className="flex w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="bg-bg-light dark:bg-bg-dark w-full flex flex-col text-primary-light dark:text-primary-dark">
        <Header />
        <div className="flex px-[24px] py-[16px] items-center justify-between">
          <h1 className="font-bold text-2xl">{pageTitle}</h1>
          {actionItem}
        </div>
        <div className="px-[24px] flex flex-col flex-grow overflow-auto">
          {children}
        </div>
      </div>
    </main>
  );
};

export default ScreenContainer;
