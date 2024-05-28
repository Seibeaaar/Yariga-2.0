import { ReactNode, FC } from "react";
import Navbar from "./Navbar";
import Header from "./Header";

type ScreenContainerProps = {
  children: ReactNode;
};

const ScreenContainer: FC<ScreenContainerProps> = ({ children }) => {
  return (
    <main className="flex">
      <Navbar />
      <section className="bg-bg-light dark:bg-bg-dark flex-grow">
        <Header />
        {children}
      </section>
    </main>
  );
};

export default ScreenContainer;
