import { FC, ImgHTMLAttributes } from "react";

type BasicGalleryImageProps = ImgHTMLAttributes<HTMLImageElement>;

const BasicGalleryImage: FC<BasicGalleryImageProps> = (props) => {
  return <img {...props} className="h-full rounded-[10px] w-[75%]" />;
};

export default BasicGalleryImage;