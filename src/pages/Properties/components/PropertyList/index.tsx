import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux";
import { searchProperty, filterProperty, getProperties } from "@/redux/actions/property";

import PropertyListBase from "./ListBase";
import { isObjectEmpty } from "@/utils/common";

const PropertyList = () => {
    const {
        properties,
        searchError,
        searchPending,
        filterError,
        filterPending,
        getPropertiesError,
        getPropertiesPending,
        searchQuery,
        metadata,
        appliedFilters
    } = useSelector((state: RootState) => state.propertySearch);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (!searchQuery && isObjectEmpty(appliedFilters)) {
            dispatch(getProperties(1));
        }
    }, [dispatch, searchQuery, appliedFilters]);

    const changeSearchPage = (page: number) => dispatch(searchProperty({
        query: searchQuery,
        page
    }))

    const changeFilterPage = (page: number) => dispatch(filterProperty({
        filters: appliedFilters,
        page
    }));

    const changeListPage = (page: number) => dispatch(getProperties(page));

    if (searchQuery) {
        return (
            <PropertyListBase
                properties={properties}
                hasError={!!searchError}
                pending={searchPending}
                activePage={metadata.page}
                pages={metadata.page}
                onPageChange={changeSearchPage}
            />
        )
    }

    if (!isObjectEmpty(appliedFilters)) {
        return (
            <PropertyListBase 
                properties={properties}
                hasError={!!filterError}
                pages={metadata.pages}
                onPageChange={changeFilterPage}
                activePage={metadata.page}
                pending={filterPending}
            />
        )
    }

    return (
        <PropertyListBase 
            properties={properties}
            hasError={!!getPropertiesError}
            pending={getPropertiesPending}
            pages={metadata.pages}
            onPageChange={changeListPage}
            activePage={metadata.page}
        />
    )
};

export default PropertyList;