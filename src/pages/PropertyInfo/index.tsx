import ScreenContainer from "@/components/ScreenContainer";
import Widget from "@/components/Widget";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";
import PhotoGallery from "@/components/PhotoGallery";

const PropertyInfoProps = () => {
    const { state: { property } } = useLocation();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <ScreenContainer pageTitle={property.title}>
            <Widget>
                <div className="flex items-center gap-[16px]">
                    <div className="cursor-pointer" onClick={goBack}>
                        <ArrowBackIos />
                    </div>
                    <h4 className="text-xl font-semibold">Details</h4>
                </div>
                <section className="flex items-center mt-[36px]">
                    <div className="w-[65%]">
                        <PhotoGallery photos={property.photos} />
                    </div>
                </section>
            </Widget>
        </ScreenContainer>
    )
};

export default PropertyInfoProps;