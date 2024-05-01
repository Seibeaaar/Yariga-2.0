import Logo from "@/assets/icons/Logo.svg";
import { FC } from "react";

type LoaderProps = {
  showLoader: boolean;
  transparent?: boolean;
};

const Loader: FC<LoaderProps> = ({ showLoader, transparent = true }) => {
  if (!showLoader) return null;
  return (
    <section className="fixed z-[1000] w-screen h-screen flex justify-center items-center">
      <div
        className={`w-full h-full ${
          transparent ? "opacity-70" : ""
        } bg-black z-0 absolute`}
      />
      <img
        src={Logo}
        className="w-[96px] h-[96px] absolute animate-heartbeat opacity-100 z-1"
        alt="Yariga logo"
      />
    </section>
  );
};

export default Loader;
