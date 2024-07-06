import { AppDispatch } from "@/redux";
import { setInitialSearch, setSearchError } from "@/redux/reducers/property";

export const generateErrorMesaage = (e: unknown) => {
  if (e instanceof Error) {
    return e.message;
  }
  return "Error not defined.";
};

export const resetPropertySearchState = (dispatch: AppDispatch) => {
  dispatch(setInitialSearch(true));
  dispatch(setSearchError(null));
};
