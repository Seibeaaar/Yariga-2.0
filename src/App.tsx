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
        <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </ThemeContextProvider>
    </PersistGate>
  </Provider>
);

export default App;
