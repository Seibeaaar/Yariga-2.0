import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux";
import ScreenContainer from "@/components/ScreenContainer";
import AddPropertyLink from "./components/AddPropertyLink";
import Widget from "@/components/Widget";
import Searchbar from "@/components/Searchbar";
import PropertyFiltersModal from "./components/PropertyFiltersModal";
import PropertyItemsList from "./components/ItemsList";
import { resetPropertySearchState } from "@/utils/redux";

const PropertyListScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    return () => {
      resetPropertySearchState(dispatch);
    };
  }, [dispatch]);

  return (
    <ScreenContainer pageTitle="Properties" actionItem={<AddPropertyLink />}>
      <Widget className="my-[16px]">
          <div className="flex items-center">
            <Searchbar />
            <PropertyFiltersModal />
          </div>
        </Widget>
        <PropertyItemsList />
    </ScreenContainer>
  );
};

export default PropertyListScreen;
