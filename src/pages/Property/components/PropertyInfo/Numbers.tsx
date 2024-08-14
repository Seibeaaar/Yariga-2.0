import { FC } from "react";
import {
  SquareFoot,
  MeetingRoom,
  Bed,
  MapsHomeWork,
} from "@mui/icons-material";
import { Property } from "@/types/property";

type PropertyInfoNumbersProps = {
  property: Property;
};

const PropertyInfoNumbers: FC<PropertyInfoNumbersProps> = ({ property }) => {
  const { area, rooms, beds, floors } = property;
  return (
    <div className="text-primary-light dark:text-primary-dark">
      <h5 className="font-medium text-lg mt-[36px] mb-[24px]">Numeric info</h5>
      <div className="flex flex-wrap items-center gap-y-[24px]">
        <div className="flex items-center gap-[16px] w-1/4">
          <SquareFoot />
          <p className="text-sm">{area}M area</p>
        </div>
        <div className="flex items-center gap-[16px] w-1/4">
          <MeetingRoom />
          <p className="text-sm">{rooms} rooms</p>
        </div>
        <div className="flex items-center gap-[16px] w-1/4">
          <Bed />
          <p className="text-sm">{beds} beds</p>
        </div>
        <div className="flex items-center gap-[16px] w-1/4">
          <MapsHomeWork />
          <p className="text-sm">{floors} floors</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfoNumbers;
