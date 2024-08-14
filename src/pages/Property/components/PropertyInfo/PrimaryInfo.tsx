import { FC, useContext } from "react";
import { PropertyInfoProps } from ".";
import { ThemeContext } from "@/customization/Theme";
import { Rating } from "@mui/material";
import { Star, Place } from "@mui/icons-material";
import { PROPERTY_TYPE_NAME } from "@/constants/property";
import { COLORS } from "@/constants/styling";

const PropertyPrimaryInfo: FC<PropertyInfoProps> = ({ property }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-stretch justify-between text-primary-light dark:text-primary-dark">
      <div className="flex flex-col justify-between">
        <h5 className="text-lg font-medium">
          {PROPERTY_TYPE_NAME[property.type]}
        </h5>
        <h2 className="text-2xl font-medium mt-[8px] mb-[16px]">
          {property.title}
        </h2>
        <div className="flex items-center gap-[8px] text-secondary-light dark:text-secondary-dark">
          <Place color="inherit" />
          <p className="text-sm">{property.location}</p>
        </div>
      </div>
      <div className="text-primary-light dark:text-primary-dark flex flex-col justify-between">
        <Rating
          value={property.rating}
          readOnly
          emptyIcon={
            <Star
              color="inherit"
              style={{
                color: isDarkTheme
                  ? COLORS["secondary-dark"]
                  : COLORS["secondary-light"],
              }}
            />
          }
        />
        <p className="font-medium">Price</p>
        <h4 className="text-primary font-bold text-2xl">${property.price}</h4>
      </div>
    </div>
  );
};

export default PropertyPrimaryInfo;
