import { ReactNode, FC } from "react";
import Navbar from "./Navbar";
import Header from "./Header";

type ScreenContainerProps = {
  children: ReactNode;
  pageTitle: string;
};

const ScreenContainer: FC<ScreenContainerProps> = ({ children, pageTitle }) => {
  return (
    <main className="flex">
      <Navbar />
      <section className="bg-bg-light dark:bg-bg-dark flex-grow text-primary-light dark:text-primary-dark">
        <Header />
        <div className="p-[24px]">
          <h1 className="font-bold text-2xl">{pageTitle}</h1>
          {children}
        </div>
      </section>
    </main>
  );
};

export default ScreenContainer;
