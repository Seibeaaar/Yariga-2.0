import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { AddCircle } from "@mui/icons-material";
import { ACCEPTED_AVATAR_FORMATS } from "@/constants/profile";
import GalleryImage from "./Image";

const GalleryUpload = () => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setUploadedImages((images) => [...images, e.target.files![0]]);
    }
  };

  const handleImageRemoval = (image: File) => {
    setUploadedImages((images) => images.filter((i) => i !== image));
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="mt-[24px] flex-wrap"
    >
      <p className="text-lg">Upload images of a property. Minimum 3 images required.</p>
      <div className="w-full my-[24px] flex items-center gap-[16px] flex-wrap">
        {uploadedImages.map((image, i) => (
          <GalleryImage
            onDelete={handleImageRemoval}
            key={`${image.name}${i}`}
            image={image}
          />
        ))}
        {uploadedImages.length < 10 ? (
          <div className="w-[47.5%] md:w-[31.5%] lg:w-[19%] h-[180px] text-secondary-light dark:text-secondary-dark flex flex-col items-center justify-center relative border-[2px] border-dashed border-border-light dark:border-border-dark rounded-[10px]">
            <input
              type="file"
              className="opacity-0 cursor-pointer absolute top-0 left-0 w-full h-full"
              onChange={handleImageUpload}
              accept={ACCEPTED_AVATAR_FORMATS.map(
                (format) => `.${format}`,
              ).join(",")}
            />
            <AddCircle fontSize="large" color="inherit" />
            <p className="mt-[16px]">Add property images</p>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default GalleryUpload;
