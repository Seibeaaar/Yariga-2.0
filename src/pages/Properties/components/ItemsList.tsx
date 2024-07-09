import Tooltip from "@/components/Tooltip";
import PropertyListPagination from "@/components/Pagination";

const PropertyItemsList = () => {
  // const { searchResults, searchPending, searchError, initialSearch } =
  //   useSelector((state: RootState) => state.property);

  // const renderContent = () => {
  //   switch (true) {
  //     case !!searchPending:
  //       return (
  //         <div className="w-full flex flex-wrap">
  //           {Array.from({ length: 8 }).map((_) => (
  //             <PropertyItemLoader />
  //           ))}
  //         </div>
  //       );
  //     case searchResults.length > 0:
  //       return (
  //         <div className="w-full flex flex-wrap">
  //           {searchResults.map((property) => (
  //             <>
  //               <PropertyItem key={property.id} property={property} />
  //               <PropertyItem key={property.id} property={property} />
  //               <PropertyItem key={property.id} property={property} />
  //             </>
  //           ))}
  //         </div>
  //       );
  //     case !!initialSearch:
  //       return (
  //         <p className="text-center text-2xl text-secondary-light dark:text-secondary-dark font-bold">
  //           Start looking for properties you'd be interested in
  //         </p>
  //       );
  //     default:
  //       return (
  //         <p className="text-center text-2xl text-secondary-light dark:text-secondary-dark font-bold">
  //           Unfortunately no results found
  //         </p>
  //       );
  //   }
  // };

  return (
    <section className="pt-[36px]">
      <Tooltip
        showTooltip={false}
        severity="error"
        vertical="top"
        horizontal="right"
        title="Uh-oh."
        content="Something went wrong while searching for properties."
      />
      {/* {renderContent()} */}
      <PropertyListPagination
        onPageChange={() => console.log("Change")}
        activePage={1}
        pages={10}
      />
    </section>
  );
};

export default PropertyItemsList;
