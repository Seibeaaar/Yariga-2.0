import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ScreenBackground from "@/components/Background";
import Button from "@/components/Button";
import { RootState } from "@/redux";
import Loader from "@/components/Loader";
import Tooltip from "@/components/Tooltip";
import PropertyFiltersForm from "@/components/PropertyFiltersForm";
import { PROPERTY_FILTERS_USE } from "@/types/property";

const ClientPreferencesScreen = () => {
  const { setPreferencesPending, setPreferencesError } = useSelector(
    (state: RootState) => state.profile,
  );

  const preferencesSubmit = (isDisabled: boolean) => {
    return (
      <>
        <Button
          disabled={isDisabled}
          text="Add your preferences"
          className="mb-[16px]"
          type="submit"
        />
        <Button variant="text" text="Skip for now" />
      </>
    );
  };
  return (
    <>
      <Loader showLoader={setPreferencesPending} />
      <Tooltip
        showTooltip={!!setPreferencesError}
        severity="error"
        vertical="top"
        horizontal="right"
        title="Uh-oh."
        content="Something went wrong while setting your preferences."
      />
      <ScreenBackground className="py-[24px] h-fit">
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
          <h1 className="text-center font-bold text-2xl md:text-3xl mb-[16px]">
            The last step before diving into Yariga is to set your property
            preferences.
          </h1>
          <h3 className="text-center font-medium text-xl">
            It is optional but it can ensure the best experience on the
            platform.
          </h3>
        </motion.div>
        <div className="mx-auto px-[24px] lg:w-3/4 mt-[48px]">
          <PropertyFiltersForm
            animated
            submitComponent={preferencesSubmit}
            mode={PROPERTY_FILTERS_USE.PREFERENCES}
          />
        </div>
      </ScreenBackground>
    </>
  );
};

export default ClientPreferencesScreen;
