import { Provider } from "react-redux";
import store from "./redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import ThemeContextProvider from "./customization/Theme";

const App = () => (
  <Provider store={store}>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </Provider>
);

export default App;
