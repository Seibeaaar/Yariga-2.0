import { FC, ImgHTMLAttributes } from "react";

type PrimaryGalleryImageProps = ImgHTMLAttributes<HTMLImageElement>;

const PrimaryGalleryImage: FC<PrimaryGalleryImageProps> = (props) => {
  return <img {...props} className="h-full rounded-[10px] w-[60%]" />;
};

export default PrimaryGalleryImage;
