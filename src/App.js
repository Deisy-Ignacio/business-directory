import Business from "components/Business/Business";
import { Layout } from "components/Common/Layout/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Business />
      </Layout>
    </Provider>
  );
}

export default App;
