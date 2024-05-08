import { FC } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import GalleryUpload from "./GalleryUpload";

import { PROPERTY_VALIDATION_SCHEMA } from "@/schemas/property";
import Input from "./Input";
import Textarea from "./Textarea";

type PropertyFormProps = {
  mode: "create" | "edit";
  submitText: string;
};

const PropertyForm: FC<PropertyFormProps> = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: yupResolver(PROPERTY_VALIDATION_SCHEMA),
  });

  return (
    <form className="mx-auto px-[32px]">
      <GalleryUpload />
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
      >
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              label="Property name"
              error={errors?.title?.message}
              placeholder="Your property name"
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange } }) => (
            <Textarea
              onChange={onChange}
              label="Property description"
              error={errors?.description?.message}
              placeholder="Add a few words about your property"
            />
          )}
        />
      </motion.div>
    </form>
  );
};

export default PropertyForm;
