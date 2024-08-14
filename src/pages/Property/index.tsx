import ScreenContainer from "@/components/ScreenContainer";
import Widget from "@/components/Widget";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";
import PhotoGallery from "@/components/PhotoGallery";
import PropertyInfo from "./components/PropertyInfo";
import PropertyOwnerInfo from "./components/OwnerInfo";

const PropertyScreen = () => {
    const { state: { property } } = useLocation();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <ScreenContainer pageTitle='Property Details'>
            <Widget>
                <div className="flex items-center gap-[16px]">
                    <div className="cursor-pointer" onClick={goBack}>
                        <ArrowBackIos />
                    </div>
                    <h4 className="text-xl font-semibold">Go Back</h4>
                </div>
                <div className="flex mt-[36px] gap-[36px] items-stretch">
                    <section className="w-[65%]">
                        <PhotoGallery photos={property.photos} />
                        <PropertyInfo property={property} />
                    </section>
                    <section className="flex-grow">
                        <PropertyOwnerInfo owner={property.owner} />
                    </section>
                </div>
            </Widget>
        </ScreenContainer>
    )
};

export default PropertyScreen;