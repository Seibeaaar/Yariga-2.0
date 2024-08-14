import { FC } from "react";

type PropertyDescriptionProps = {
  description: string;
};

const PropertyDescription: FC<PropertyDescriptionProps> = ({ description }) => {
  return (
    <div className="text-primary-light dark:text-primary-dark">
      <h5 className="font-medium text-lg mt-[36px] mb-[24px]">Description</h5>
      <p className="text-sm text-secondary-light dark:text-secondary-dark">
        {description}
      </p>
    </div>
  );
};

export default PropertyDescription;
