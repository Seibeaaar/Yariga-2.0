import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import router from "./router";
import ThemeContextProvider from "./customization/Theme";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContextProvider>
        <GoogleOAuthProvider clientId="34541685527-8i762v2hsfb1bstmmh6i1q7dmemgs2ve.apps.googleusercontent.com">
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </ThemeContextProvider>
    </PersistGate>
  </Provider>
);

export default App;
