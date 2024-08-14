import { FC } from "react";
import { Property } from "@/types/property";
import PropertyPrimaryInfo from "./PrimaryInfo";
import PropertyFacilitiesInfo from "./Facilities";
import PropertyInfoNumbers from "./Numbers";
import PropertyDescription from "./Description";

export type PropertyInfoProps = {
  property: Property;
};

const PropertyInfo: FC<PropertyInfoProps> = ({ property }) => {
    return (
        <article className="w-full mt-[36px]">
            <PropertyPrimaryInfo property={property} />
            <PropertyInfoNumbers property={property} />
            <PropertyFacilitiesInfo facilities={property.facilities} />
            <PropertyDescription description={property.description} />
        </article>
    )
};

export default PropertyInfo;

