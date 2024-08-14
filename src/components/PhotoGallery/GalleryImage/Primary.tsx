import { FC, ImgHTMLAttributes } from "react";

type PrimaryGalleryImageProps = ImgHTMLAttributes<HTMLImageElement>;

const PrimaryGalleryImage: FC<PrimaryGalleryImageProps> = (props) => {
  return <img {...props} className="h-full rounded-[10px] w-[calc(65%-16px)]" />;
};

export default PrimaryGalleryImage;
