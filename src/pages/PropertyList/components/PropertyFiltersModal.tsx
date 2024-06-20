/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { Dialog } from "@mui/material";
import Button from "@/components/Button";
import PropertyFiltersForm from "@/components/PropertyFiltersForm";
import { PROPERTY_FILTERS_USE } from "@/types/property";

import TuneIcon from "@/assets/icons/Tune.svg?react";

const PropertyFiltersModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const filtersModalSubmit = (isDisabled: boolean) => {
    return (
      <div className="ml-auto overflow-hidden w-[120px] pb-[14px]">
        <Button
          onClick={closeModal}
          text="Apply"
          type="submit"
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
        <div className="bg-white dark:bg-bg-dark w-[800px] h-screen py-[24px]">
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
