import Button from "@/components/Button";
import EmailVerifiedIcon from "@/assets/icons/EmailVerified.svg";
import { FC } from "react";
import { motion } from "framer-motion";

type VerificationSuccessProps = {
  onButtonClick(): void;
};

const EmailVerificationSuccess: FC<VerificationSuccessProps> = ({
  onButtonClick,
}) => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center text-center px-[24px] py-[32px]">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <h1 className="font-bold text-2xl md:text-3xl mb-[16px]">
          Thank you! Your email address has been verified.
        </h1>
        <h3 className="font-medium text-xl">Welcome to Yariga!</h3>
      </motion.div>
      <img
        className="w-full h-full md:w-2/3 md:h-2/3 mt-[16px]"
        src={EmailVerifiedIcon}
        alt="Email letter"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="mt-[16px] w-full md:w-2/3 lg:w-1/4"
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Button
          text="Complete your profile"
          onClick={onButtonClick}
          className="w-full"
        />
      </motion.div>
    </section>
  );
};

export default EmailVerificationSuccess;
