import ScreenContainer from "@/components/Background";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "@/components/Loader";
import EmailVerificationSuccess from "./components/VerificationSuccess";
import EmailVerificationError from "./components/VerificationError";
import VerificationBrokenLink from "./components/VerificationBrokenLink";
import { verifyEmail } from "@/redux/actions/auth";
import { useCallback, useEffect, useState } from "react";

const EmailVerificationScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [retries, setRetries] = useState<number>(0);
  const requestId = searchParams.get("request");
  const {
    emailVerificationSuccessful,
    emailVerificationError,
    emailVerificationPending,
  } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!requestId || emailVerificationSuccessful) {
      return;
    }
    dispatch(verifyEmail(requestId));
  }, [emailVerificationSuccessful, requestId]);

  const onRetryClick = () => {
    if (retries === 3) return;
    setRetries(retries + 1);
    dispatch(verifyEmail(requestId!));
  };

  const goToSignUp = useCallback(() => navigate("/"), [navigate]);
  const goToProfileCompletion = useCallback(
    () => navigate("/complete-profile"),
    [navigate],
  );

  const renderContent = () => {
    switch (true) {
      case !requestId:
        return <VerificationBrokenLink onButtonClick={goToSignUp} />;
      case !!emailVerificationError || retries > 0:
        return (
          <EmailVerificationError
            onRetryClick={onRetryClick}
            onGoBackClick={goToSignUp}
            retries={retries}
          />
        );
      case !!emailVerificationSuccessful:
        return (
          <EmailVerificationSuccess onButtonClick={goToProfileCompletion} />
        );
    }
  };

  const renderLoader = () => {
    if (!emailVerificationPending) {
      return null;
    }
    return <Loader transparent={retries >= 1} />;
  };

  return (
    <ScreenContainer>
      {renderLoader()}
      {renderContent()}
    </ScreenContainer>
  );
};

export default EmailVerificationScreen;
