import { FC } from "react";
import { motion } from "framer-motion";
import { useForm, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import GalleryUpload from "./GalleryUpload";
import {
  SquareFoot,
  MeetingRoom,
  Bed,
  MapsHomeWork,
  Foundation,
  AttachMoney,
} from "@mui/icons-material";

import { PROPERTY_VALIDATION_SCHEMA } from "@/schemas/property";
import Input from "./Input";
import Textarea from "./Textarea";
import LocationPicker from "./LocationPicker";
import { AGREEMENT_TYPE_OPTIONS } from "@/constants/agreement";
import OptionCard from "./OptionsCard";
import { PROPERTY_TYPE_OPTIONS } from "@/constants/property";

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

  const formValues = useWatch({
    control,
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
      <Controller
        control={control}
        name="location"
        render={() => (
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          >
            <LocationPicker />
          </motion.div>
        )}
      />
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
        className="flex flex-wrap gap-[24px]"
      >
        <Controller
          control={control}
          name="area"
          render={({ field: { onChange } }) => (
            <div className="w-[calc(50%-12px)]">
              <Input
                onChange={onChange}
                prefixIcon={<SquareFoot />}
                label="Property area (sq.m.)"
                type="number"
                error={errors?.title?.message}
                placeholder="Area in sq.m."
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange } }) => (
            <div className="w-[calc(50%-12px)]">
              <Input
                onChange={onChange}
                prefixIcon={<AttachMoney />}
                label="Property price"
                type="number"
                error={errors?.title?.message}
                placeholder="Price of purchase or rent"
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="rooms"
          render={({ field: { onChange } }) => (
            <div className="w-[calc(50%-12px)]">
              <Input
                onChange={onChange}
                prefixIcon={<MeetingRoom />}
                label="Number of rooms"
                type="number"
                error={errors?.title?.message}
                placeholder="Number of rooms available"
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="beds"
          render={({ field: { onChange } }) => (
            <div className="w-[calc(50%-12px)]">
              <Input
                onChange={onChange}
                label="Number of beds"
                error={errors?.title?.message}
                placeholder="Number of beds available"
                prefixIcon={<Bed />}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="floors"
          render={({ field: { onChange } }) => (
            <div className="w-[calc(50%-12px)]">
              <Input
                onChange={onChange}
                label="Number of floors"
                prefixIcon={<MapsHomeWork />}
                error={errors?.title?.message}
                placeholder="Number of floors"
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="floorLevel"
          render={({ field: { onChange } }) => (
            <div className="w-[calc(50%-12px)]">
              <Input
                onChange={onChange}
                label="Property's floor level"
                prefixIcon={<Foundation />}
                error={errors?.title?.message}
                placeholder="Enter property's floor level"
              />
            </div>
          )}
        />
      </motion.div>
      <Controller
        control={control}
        name="agreementType"
        render={({ field: { onChange } }) => (
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ ease: "easeOut", duration: 1, delay: 1 }}
            className="w-full"
          >
            <p className="text-lg">Select an agreement type:</p>
            <div className="flex items-center justify-center gap-[16px] mt-[24px]">
              {AGREEMENT_TYPE_OPTIONS.map((option) => (
                <OptionCard
                  option={option}
                  key={option.value}
                  selected={option.value === formValues.agreementType}
                  className="text-xl w-[25%]"
                  onSelect={onChange}
                />
              ))}
            </div>
          </motion.div>
        )}
      />
      <Controller
        control={control}
        name="propertyType"
        render={({ field: { onChange } }) => (
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ ease: "easeOut", duration: 1, delay: 1.25 }}
            className="w-full"
          >
            <p className="text-lg">Select a type of your property:</p>
            <div className="flex justify-center gap-[16px] mt-[24px]">
              {PROPERTY_TYPE_OPTIONS.map((option) => (
                <OptionCard
                  option={option}
                  key={option.value}
                  selected={option.value === formValues.propertyType}
                  className="text-xl w-[20%]"
                  onSelect={onChange}
                />
              ))}
            </div>
          </motion.div>
        )}
      />
    </form>
  );
};

export default PropertyForm;
