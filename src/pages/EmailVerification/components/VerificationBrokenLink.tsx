import InvalidLinkIcon from "@/assets/icons/InvalidLink.svg";
import Button from "@/components/Button";
import { FC } from "react";

type BrokenLinkProps = {
  onButtonClick(): void;
};

const VerificationBrokenLink: FC<BrokenLinkProps> = ({ onButtonClick }) => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center text-center px-[24px] py-[32px]">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl mb-[16px]">
          Oh-oh! Seems like a verification link is broken.
        </h1>
        <h3 className="font-medium text-xl">Please check your email again.</h3>
      </div>
      <img
        className="w-full h-full md:w-2/3 md:h-2/3 mt-[16px]"
        src={InvalidLinkIcon}
        alt="Email letter"
      />
      <Button
        text="Go back to sign up"
        onClick={onButtonClick}
        className="mt-[16px] w-full md:w-2/3 lg:w-1/4"
      />
    </section>
  );
};

export default VerificationBrokenLink;
