import ScreenBackground from "@/components/Background";
import CityScapeImage from "@/assets/images/CityScape.webp";
import ProfileCompletionForm from "./Form";
import Loader from "@/components/Loader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

const ProfileCompleteScreen = () => {
  const { profileCompletePending } = useSelector(
    (state: RootState) => state.auth,
  );
  return (
    <>
      <Loader showLoader={profileCompletePending} />
      <ScreenBackground className="flex items-center justify-center lg:justify-normal">
        <img
          src={CityScapeImage}
          alt="Business center"
          className="h-full w-1/2 hidden lg:block"
        />
        <ProfileCompletionForm />
      </ScreenBackground>
    </>
  );
};

export default ProfileCompleteScreen;
