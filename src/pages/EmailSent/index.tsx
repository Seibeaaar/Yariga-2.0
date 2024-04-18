import { motion } from "framer-motion";
import VerifyEmailIcon from "@/assets/icons/VerifyEmail.svg";
import Button from "@/components/Button";
import ScreenBackground from "@/components/Background";

const EmailSentScreen = () => (
  <ScreenBackground className="flex flex-col justify-center items-center text-center px-[24px] py-[32px]">
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
        We have sent you an email to confirm your email address
      </h1>
      <h3 className="font-medium text-xl">
        There you will find further instructions
      </h3>
    </motion.div>
    <motion.img
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className="w-full h-full md:w-2/3 md:h-2/3 mt-[16px]"
      src={VerifyEmailIcon}
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
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <h4>If you haven't got a letter - we can send you another one </h4>
      <Button text="Resend email" className="mt-[16px]" />
    </motion.div>
  </ScreenBackground>
);

export default EmailSentScreen;
