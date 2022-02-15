import Business from "components/Business/Business";
import BusinessTeam from "components/BusinessTeam/BusinessTeam";
import Layout from "components/Common/Layout/Layout";
import Home from "components/Home/Home";
import { useSelector } from "react-redux";
import { VIEWS } from "utils/data";

function App() {
  const { mainView } = useSelector((state) => state.views);

  const getView = () => {
    if (mainView === VIEWS.BUSINNES) return <Business />;
    else if (mainView === VIEWS.BUSINNES_TEAM) return <BusinessTeam />;

    return <Home />;
  };

  return <Layout>{getView()}</Layout>;
}

export default App;
