import { FC } from "react";
import Tooltip from "@/components/Tooltip";
import PropertyListPagination from "@/components/Pagination";

import PropertyItemLoader from "@/components/PropertyItem/Loader";
import PropertyItem from "@/components/PropertyItem";
import { Property } from "@/types/property";

export type PropertyListProps = {
  pending: boolean;
  hasError: boolean;
  properties: Property[];
  onPageChange: (payload: number) => void;
  activePage: number;
  pages: number;
}

const PropertyListBase: FC<PropertyListProps> = ({
  pending,
  properties,
  hasError,
  onPageChange,
  activePage,
  pages
}) => {
  const renderContent = () => {
    switch (true) {
      case pending:
        return (
          <div className="w-full flex flex-wrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <PropertyItemLoader key={i} />
            ))}
          </div>
        );
      case properties.length > 0:
        return (
          <div className="w-full flex flex-wrap">
            {properties.map((property) => (
              <PropertyItem key={property.id} property={property} />
            ))}
          </div>
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
    <section className="pt-[36px]">
      <Tooltip
        showTooltip={hasError}
        severity="error"
        vertical="top"
        horizontal="right"
        title="Uh-oh."
        content="Something went wrong while searching for properties."
      />
      {renderContent()}
      <PropertyListPagination
        onPageChange={onPageChange}
        activePage={activePage}
        pages={pages}
      />
    </section>
  );
};

export default PropertyListBase;