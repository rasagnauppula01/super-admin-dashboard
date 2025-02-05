import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import OverviewCards from "../components/Dashboard/OverviewCards";
import StatsChart from "../components/Dashboard/StatsChart";

function SuperAdminDashboard() {
  return (
    <div className="flex h-min bg-gray-900">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="p-4">
          <OverviewCards />
          <StatsChart />
        </div>
      </div>
    </div>
  );
}

export default SuperAdminDashboard;
