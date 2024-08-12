import { FC } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type GalleryCarouselProps = {
  isOpen: boolean;
  onClose: () => void;
  photos: string[];
};

const GalleryCarousel: FC<GalleryCarouselProps> = ({
  isOpen,
  onClose,
  photos,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-1000 flex items-center justify-center">
      <div onClick={onClose} className="absolute top-0 left-0 w-screen h-screen bg-bg-dark opacity-60" />
      <ImageGallery showPlayButton={false} items={photos.map(photo => ({
        original: photo,
        thumbnail: photo
      }))} />
    </div>
  );
};

export default GalleryCarousel;
