/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux";
import { clearSearch } from "@/redux/reducers/property/search";
import { Dialog } from "@mui/material";
import Button from "@/components/Button";
import PropertyFiltersForm from "@/components/PropertyFiltersForm";
import { PROPERTY_FILTERS_USE } from "@/types/property";

import TuneIcon from "@/assets/icons/Tune.svg?react";

const PropertyFiltersModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const resetFilters = () => {
    closeModal();
    dispatch(clearSearch());
  }

  const filtersModalSubmit = (isDisabled: boolean) => {
    return (
      <div className="ml-auto w-[33%] overflow-hidden pb-[14px] flex gap-[24px]">
        <Button 
          text="Clear filters"
          onClick={resetFilters}
          variant='text'
          type="button"
        />
        <Button
          onClick={closeModal}
          text="Apply"
          disabled={isDisabled}
        />
      </div>
    );
  };

  return (
    <>
      <div
        onClick={openModal}
        className="bg-bg-light dark:bg-bg-dark cursor-pointer rounded-[8px] px-[20px] py-[14px] flex items-center gap-[10px]"
      >
        <TuneIcon className="fill-black dark:fill-white" />
        <p className="text-xs text-black dark:text-white">Filters</p>
      </div>
      <Dialog open={modalOpen} maxWidth="md" onClose={closeModal}>
        <div className="bg-white dark:bg-black w-[800px] h-screen py-[24px]">
          <h3 className="ml-[24px] mb-[24px] text-2xl text-primary-light dark:text-primary-dark font-bold">
            Set up your search criterias:
          </h3>
          <PropertyFiltersForm
            mode={PROPERTY_FILTERS_USE.FILTER}
            submitComponent={filtersModalSubmit}
          />
        </div>
      </Dialog>
    </>
  );
};

export default PropertyFiltersModal;
