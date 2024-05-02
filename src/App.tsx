import { Provider } from "react-redux";
import store from "./redux";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import router from "./router";
import ThemeContextProvider from "./customization/Theme";

const App = () => (
  <Provider store={store}>
    <ThemeContextProvider>
      <GoogleOAuthProvider clientId="34541685527-8i762v2hsfb1bstmmh6i1q7dmemgs2ve.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </ThemeContextProvider>
  </Provider>
);

export default App;
