import { Provider } from "react-redux";
import store from "./redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
