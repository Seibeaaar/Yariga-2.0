import ScreenBackground from "@/components/Background";
import PropertyForm from "@/components/PropertyForm";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import Loader from "@/components/Loader";

const AddPropertyScreen = () => {
  const { addPropertyPending } = useSelector(
    (state: RootState) => state.property,
  );
  return (
    <>
      <Loader showLoader={addPropertyPending} />
      <ScreenBackground className="py-[24px]">
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
          className="w-screen"
        >
          <h1 className="text-center font-bold text-4xl">
            Before you go to explore Yariga
          </h1>
          <h4 className="text-center text-base leading-6 text-secondary-light dark:text-secondary-dark">
            Add a first property. It is an important step to get full
            experience.
          </h4>
        </motion.div>
        <PropertyForm mode="create" submitText="Add property" />
      </ScreenBackground>
    </>
  );
};

export default AddPropertyScreen;
