import { FC } from "react";
import { PROPERTY_FACILITY } from "@/types/property";
import { PROPERTY_FACILITIES_OPTIONS } from "@/constants/property";

type PropertyFacilitiesInfoProps = {
    facilities: PROPERTY_FACILITY[];
};

const PropertyFacilitiesInfo: FC<PropertyFacilitiesInfoProps> = ({ facilities }) => {

    const renderFacilities = () => {
        if (facilities.length === 0) {
            return (
                <div className="flex items-center justify-center py-[36px]">
                    <p>No facilities provided</p>
                </div>
            )
        }

        return (
            <div className="flex flex-wrap items-center gap-y-[24px]">
                {facilities.map(facility => {
                    const facilityOption = PROPERTY_FACILITIES_OPTIONS.find(option => option.value === facility);
                    if (!facilityOption) return null;
                    
                    const { icon, label } = facilityOption;
                    return (
                        <div className="text-primary-light dark:text-primary-dark flex items-center gap-[16px] w-1/4" key={facility}>
                            {icon}
                            <p className="text-sm">{label}</p>
                        </div>
                    )
                })}
            </div>
        )
    };
    return (
        <div className="text-primary-light dark:text-primary-dark">
            <h5 className="font-medium text-lg mt-[36px] mb-[24px]">Facilities</h5>
            {renderFacilities()}
        </div>
    )
};

export default PropertyFacilitiesInfo;