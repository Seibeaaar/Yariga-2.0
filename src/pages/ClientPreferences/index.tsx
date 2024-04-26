import ScreenBackground from "@/components/Background";
import ClientPreferencesForm from "./components/PreferencesForm";

const ClientPreferencesScreen = () => {
  return (
    <ScreenBackground className="py-[24px]">
      <h1 className="text-center font-bold text-2xl md:text-3xl mb-[16px]">
        The last step before diving into Yariga is to set your property
        preferences.
      </h1>
      <h3 className="text-center font-medium text-xl">
        It is optional but it can ensure the best experience on the platform.
      </h3>
      <ClientPreferencesForm />
    </ScreenBackground>
  );
};

export default ClientPreferencesScreen;
