import Business from "components/Business/Business";
import BusinessTeam from "components/Business/BusinessTeam";
import Layout from "components/Common/Layout/Layout";
import { useSelector } from "react-redux";
import { BUSINESS_VIEWS } from "utils/data";

function App() {
  const { businessView } = useSelector((state) => state.business);
  return (
    <Layout>
      {businessView === BUSINESS_VIEWS.BUSINNES ? (
        <Business />
      ) : (
        <BusinessTeam />
      )}
    </Layout>
  );
}

export default App;
