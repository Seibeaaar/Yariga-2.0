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
    <main className="flex">
      <Navbar />
      <section className="bg-bg-light dark:bg-bg-dark flex-grow text-primary-light dark:text-primary-dark">
        <Header />
        <div className="p-[24px]">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl">{pageTitle}</h1>
            {actionItem}
          </div>
          {children}
        </div>
      </section>
    </main>
  );
};

export default ScreenContainer;
