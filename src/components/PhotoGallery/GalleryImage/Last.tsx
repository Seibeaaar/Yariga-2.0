import { FC, ImgHTMLAttributes } from "react";

type LastGalleryImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  imagesLeft: number;
};

const LastGalleryImage: FC<LastGalleryImageProps> = (props) => {
  return (
    <div className="relative rounded-[10px] flex flex-grow overflow-hidden">
      <img {...props} className="w-full h-full relative z-1" />
      {props.imagesLeft > 0 && (
        <div className="absolute z-2 top-0 left-0 w-full h-full bg-black opacity-60 flex items-center justify-center">
          <p className="text-white font-medium">+{props.imagesLeft}</p>
        </div>
      )}
    </div>
  );
};

export default LastGalleryImage;
