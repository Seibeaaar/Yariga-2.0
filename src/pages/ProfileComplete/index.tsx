import ScreenBackground from "@/components/Background";
import CityScapeImage from "@/assets/images/CityScape.webp";
import ProfileCompletionForm from "./Form";

const ProfileCompleteScreen = () => {
  return (
    <ScreenBackground className="flex items-center justify-center lg:justify-normal">
      <img
        src={CityScapeImage}
        alt="Business center"
        className="h-full w-1/2 hidden lg:block"
      />
      <ProfileCompletionForm />
    </ScreenBackground>
  );
};

export default ProfileCompleteScreen;