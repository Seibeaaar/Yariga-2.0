import { FC } from "react";
import { Link } from "react-router-dom";
import {
  PlaceOutlined,
  BedOutlined,
  SquareFootOutlined,
} from "@mui/icons-material";
import { Property } from "@/types/property";
import { hyphenizeURL } from "@/utils/common";

type PropertyItemProps = {
  property: Property;
};

const PropertyItem: FC<PropertyItemProps> = ({ property }) => {
  return (
    <Link to={hyphenizeURL(`/property/${property.title}`)} className="flex gap-[16px] h-[125px] w-[48.5%] mb-[36px]">
      <img
        className="rounded-[10px] w-[200px]"
        src={property.photos[0]}
        alt={`${property.title} photo`}
      />
      <div className="flex flex-col justify-between self-stretch">
        <div className="bg-secondary rounded-[5px] px-[10px] py-[6px] w-fit">
          <p className="text-xs text-primary font-semibold">
            ${property.price}
          </p>
        </div>
        <p className="text-primary-light dark:text-primary-dark font-semibold">
          {property.title}
        </p>
        <div className="flex text-[18px] items-center gap-[8px] text-secondary-light dark:text-secondary-dark">
          <PlaceOutlined fontSize="inherit" color="inherit" />
          <p className="text-sm">{property.location}</p>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="flex text-[18px] items-center gap-[4px] text-primary-light dark:text-primary-dark">
            <BedOutlined fontSize="inherit" color="inherit" />
            <p className="text-sm">{property.beds ?? 0} beds</p>
          </div>
          <div className="flex text-[18px] items-center gap-[4px] text-primary-light dark:text-primary-dark">
            <SquareFootOutlined fontSize="inherit" color="inherit" />
            <p className="text-sm">{property.area}M</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyItem;
