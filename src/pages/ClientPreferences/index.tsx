import { useSelector } from "react-redux";
import ScreenBackground from "@/components/Background";
import ClientPreferencesForm from "./components/PreferencesForm";
import { RootState } from "@/redux";
import Loader from "@/components/Loader";
import Tooltip from "@/components/Tooltip";

const ClientPreferencesScreen = () => {
  const { setPreferencesPending, setPreferencesError } = useSelector(
    (state: RootState) => state.profile,
  );
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
      <ScreenBackground className="py-[24px] h-fit min-h-screen">
        <h1 className="text-center font-bold text-2xl md:text-3xl mb-[16px]">
          The last step before diving into Yariga is to set your property
          preferences.
        </h1>
        <h3 className="text-center font-medium text-xl">
          It is optional but it can ensure the best experience on the platform.
        </h3>
        <ClientPreferencesForm />
      </ScreenBackground>
    </>
  );
};

export default ClientPreferencesScreen;
