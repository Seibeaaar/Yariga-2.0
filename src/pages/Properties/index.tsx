import ScreenContainer from "@/components/ScreenContainer";
import AddPropertyLink from "./components/AddPropertyLink";
import Widget from "@/components/Widget";
import Searchbar from "@/components/Searchbar";
import PropertyFiltersModal from "./components/PropertyFiltersModal";
import PropertyItemsList from "./components/PropertyList";

const PropertyListScreen = () => {
  return (
    <ScreenContainer pageTitle="Properties" actionItem={<AddPropertyLink />}>
      <Widget className="my-[16px]">
          <div className="flex items-center h-[50px] pb-[16px]">
            <Searchbar />
            <PropertyFiltersModal />
          </div>
          <PropertyItemsList />
        </Widget>
    </ScreenContainer>
  );
};

export default PropertyListScreen;
