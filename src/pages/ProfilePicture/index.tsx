import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { RootState, AppDispatch } from "@/redux";
import { uploadProfilePicture } from "@/redux/actions/profile";

import Button from "@/components/Button";
import ScreenContainer from "@/components/Background";
import { Avatar } from "@mui/material";
import Tooltip from "@/components/Tooltip";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CloseIcon from "@mui/icons-material/Close";
import { ChangeEvent, useState, useRef } from "react";
import { ACCEPTED_AVATAR_FORMATS } from "@/constants/profile";
import Loader from "@/components/Loader";

const ProfilePictureScreen = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { profilePicturePending, profilePictureError } = useSelector(
    (state: RootState) => state.profile,
  );

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setShowOptions(false);
    if (e.target.files?.length) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const openFileCatalog = () => fileInputRef.current?.click();

  const deleteUploadedImage = () => {
    setUploadedImage(null);
  };

  const formatImageSrc = () =>
    uploadedImage ? URL.createObjectURL(uploadedImage) : "";

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("avatar", uploadedImage!);
    dispatch(uploadProfilePicture(formData));
  };

  return (
    <>
      {profilePicturePending ? <Loader /> : null}
      <ScreenContainer className="pt-[24px] pb-[48px] px-[24px] xl:px-0 flex flex-col items-center">
        <Tooltip
          showTooltip={!!profilePictureError}
          severity="error"
          vertical="top"
          horizontal="right"
          title="Uh-oh."
          content="Something went wrong while upload a picture."
        />
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h1 className="text-center font-bold text-2xl md:text-3xl mb-[16px]">
            Please choose your profile picture
          </h1>
          <h3 className="text-center font-medium text-xl">
            It is important to build a trust between parties
          </h3>
        </motion.div>
        <section className="flex flex-1 items-center">
          <div
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
            onClick={() => !uploadedImage && openFileCatalog()}
            className="w-[254px] h-[254px] rounded-full cursor-pointer relative border-2 border-secondary-light dark:border-secondary-dark"
          >
            <Avatar src={formatImageSrc()} sx={{ width: 250, height: 250 }} />
            <input
              type="file"
              className="w-0 h-0 absolute"
              onChange={handleImageUpload}
              title=""
              ref={fileInputRef}
              accept={ACCEPTED_AVATAR_FORMATS.map(
                (format) => `.${format}`,
              ).join(",")}
            />
            {uploadedImage && showOptions ? (
              <>
                <div className="flex gap-[48px] justify-center items-center w-full h-full bg-secondary-light rounded-full absolute top-0 opacity-80" />
                <div
                  onClick={openFileCatalog}
                  className="absolute z-[1] top-[100px] right-[50px] flex w-[48px] h-[48px] hover:bg-primary items-center justify-center rounded bg-primary-light opacity-1"
                >
                  <FileDownloadIcon />
                </div>
                <div
                  onClick={deleteUploadedImage}
                  className="absolute z-[1] top-[100px] left-[50px] flex w-[48px] h-[48px] hover:bg-primary items-center justify-center rounded bg-primary-light"
                >
                  <CloseIcon />
                </div>
              </>
            ) : null}
          </div>
        </section>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="lg:w-1/2 xl:w-1/3 w-full"
        >
          <Button
            onClick={onSubmit}
            disabled={!uploadedImage}
            text="Upload a profile picture"
          />
        </motion.div>
      </ScreenContainer>
    </>
  );
};

export default ProfilePictureScreen;
