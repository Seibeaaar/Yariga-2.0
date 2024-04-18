import { useSelector } from "react-redux";
import { RootState } from "@/redux";

import SkyScraperImage from "@/assets/images/Skyscraper.webp";
import LoginForm from "./components/LoginForm";
import AuthRedirect from "@/components/AuthRedirect";
import Loader from "@/components/Loader";

const LoginScreen = () => {
  const { authPending } = useSelector((state: RootState) => state.profile);
  return (
    <main className="w-screen h-screen flex items-center bg-white dark:bg-black text-primary-light dark:text-primary-dark">
      {authPending ? <Loader /> : null}
      <section className="h-full md:w-1/2 w-full px-[24px] xl:p-0 flex items-center justify-center">
        <div className="2xl:w-1/2 xl:w-2/3 w-full">
          <h1 className="text-center md:text-left font-bold text-4xl">
            Welcome back
          </h1>
          <h4 className="text-center md:text-left text-base leading-6 text-secondary-light dark:text-secondary-dark">
            Welcome back to Yariga! Please enter your details.
          </h4>
          <LoginForm />
          <AuthRedirect
            to="/"
            question="Don\'t have n account"
            linkTitle="Create an account"
          />
        </div>
      </section>
      <img
        src={SkyScraperImage}
        alt="Sky scraper"
        className="h-screen w-1/2 md:block hidden"
      />
    </main>
  );
};

export default LoginScreen;