import { useState, FC } from "react";
import PrimaryGalleryImage from "./GalleryImage/Primary";
import BasicGalleryImage from "./GalleryImage/Basic";
import LastGalleryImage from "./GalleryImage/Last";
import GalleryCarousel from "./Carousel";

type PhotoGalleryProps = {
  photos: string[];
};

const PhotoGallery: FC<PhotoGalleryProps> = ({ photos }) => {
  const [carouselOpen, setCarouselOpen] = useState<boolean>(false);

  if (photos.length === 0) {
    return null;
  }

  const openCarousel = () => setCarouselOpen(true);
  const closeCarousel = () => setCarouselOpen(false);

  return (
    <>
      <div
        onClick={openCarousel}
        className="flex gap-[16px] max-h-[540px] cursor-pointer"
      >
        <PrimaryGalleryImage src={photos[0]} />
        {photos.length > 1 && (
          <div className="flex flex-col gap-[24x] h-full">
            <BasicGalleryImage src={photos[1]} />
            {!!photos[2] && (
              <LastGalleryImage
                src={photos[2]}
                imagesLeft={photos.length - 2}
              />
            )}
          </div>
        )}
      </div>
      <GalleryCarousel
        onClose={closeCarousel}
        isOpen={carouselOpen}
        photos={photos}
      />
    </>
  );
};

export default PhotoGallery;
