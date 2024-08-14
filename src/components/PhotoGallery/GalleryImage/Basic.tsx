import { FC, ImgHTMLAttributes } from "react";

type BasicGalleryImageProps = ImgHTMLAttributes<HTMLImageElement>;

const BasicGalleryImage: FC<BasicGalleryImageProps> = (props) => {
  return <img {...props} className="h-[158px] rounded-[10px]" />;
};

export default BasicGalleryImage;