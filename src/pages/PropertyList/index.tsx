import ScreenContainer from "@/components/ScreenContainer";
import AddPropertyLink from "./components/AddPropertyLink";
import Widget from "@/components/Widget";
import Searchbar from "@/components/Searchbar";

const PropertyListScreen = () => {
  return (
    <ScreenContainer pageTitle="Properties" actionItem={<AddPropertyLink />}>
      <Widget className="mt-[16px]">
        <div className="flex items-center">
          <Searchbar />
        </div>
      </Widget>
    </ScreenContainer>
  );
};

export default PropertyListScreen;
