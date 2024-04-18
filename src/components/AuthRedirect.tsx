import { FC } from "react";
import { Link } from "react-router-dom";

type AuthRedirectprops = {
  question: string;
  linkTitle: string;
  to: string;
};

const AuthRedirect: FC<AuthRedirectprops> = ({ question, linkTitle, to }) => (
  <div className="w-full mt-[30px] flex justify-center items-center gap-[4px]">
    <p className="text-sm text-secondary-light dark:text-secondary-dark">
      {question}?
    </p>
    <Link to={to} className="text-sm text-primary">
      {linkTitle}
    </Link>
  </div>
);

export default AuthRedirect;