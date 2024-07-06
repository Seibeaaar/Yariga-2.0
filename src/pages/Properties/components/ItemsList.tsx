import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { RootState } from "@/redux";

import Widget from "@/components/Widget";
import Tooltip from "@/components/Tooltip";

const PropertyItemsList = () => {
  const { searchResults, searchPending, searchError, initialSearch } =
    useSelector((state: RootState) => state.property);

  const renderContent = () => {
    switch (true) {
      case !!searchPending:
        return <CircularProgress />;
      case searchResults.length > 0:
          return <p>Properties</p>;
      case !!initialSearch:
        return (
          <p className="text-center text-2xl text-secondary-light dark:text-secondary-dark font-bold">
            Start looking for properties you'd be interested in
          </p>
        );
      default:
        return (
          <p className="text-center text-2xl text-secondary-light dark:text-secondary-dark font-bold">
            Unfortunately no results found
          </p>
        );
    }
  };

  return (
    <Widget className="flex flex-col items-center justify-center">
      <Tooltip
        showTooltip={!!searchError}
        severity="error"
        vertical="top"
        horizontal="right"
        title="Uh-oh."
        content="Something went wrong while searching for properties."
      />
      {renderContent()}
    </Widget>
  );
};

export default PropertyItemsList;
