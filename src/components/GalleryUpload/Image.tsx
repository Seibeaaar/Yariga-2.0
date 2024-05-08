import { FC, useState } from "react";
import { Delete } from "@mui/icons-material";

type GalleryImageProps = {
  image: File;
  onDelete: (image: File) => void;
};

const GalleryImage: FC<GalleryImageProps> = ({ image, onDelete }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-[calc(20%-17.5px)] h-[180px] cursor-pointer relative rounded-[10px] overflow-hidden"
    >
      <img
        src={URL.createObjectURL(image)}
        alt="Property image"
        className="w-full h-full"
      />
      {hovered ? (
        <>
          <div className="absolute flex items-center z-[2] justify-center top-0 left-0 w-full h-full bg-slate-700 opacity-80" />
          <div
            onClick={() => onDelete(image)}
            className="absolute text-[36px] top-[calc(50%-30px)] left-[calc(50%-18px)] z-[3]"
          >
            <Delete color="inherit" fontSize="inherit" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default GalleryImage;
