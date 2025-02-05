// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SuperAdminDashboard from "./pages/SuperAdminDashboard";
// import "./styles/global.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SuperAdminDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Dashboard/Sidebar";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import UserList from "./components/UserManagement/UserList";
import AddEditUserModal from "./components/UserManagement/AddEditUserModal";
import RolePermissions from "./components/UserManagement/RolePermissions";
import ContentList from "./components/ContentManagement/ContentList";
import AddEditContent from "./components/ContentManagement/AddEditContent";
import TaskList from "./components/TaskManagement/TaskList";
import AssignTask from "./components/TaskManagement/AssignTask";
import TaskReports from "./components/TaskManagement/TaskReports";
import EarningsList from "./components/FinancialManagement/EarningsList";
import Invoices from "./components/FinancialManagement/Invoices";
import NotificationList from "./components/Notifications/NotificationList";
import SendNotification from "./components/Notifications/SendNotification";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<SuperAdminDashboard />} />
            {/* User Management */}
            <Route path="/users" element={<UserList />} />
            <Route path="/users/add-edit" element={<AddEditUserModal />} />
            <Route path="/users/permissions" element={<RolePermissions />} />
            {/* Content Management */}
            <Route path="/content" element={<ContentList />} />
            <Route path="/content/add-edit" element={<AddEditContent />} />
            {/* Task Management */}
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/assign" element={<AssignTask />} />
            <Route path="/tasks/reports" element={<TaskReports />} />
            {/* Financial Management */}
            <Route path="/financial/earnings" element={<EarningsList />} />
            <Route path="/financial/invoices" element={<Invoices />} />
            {/* Notifications */}
            <Route path="/notifications" element={<NotificationList />} />
            <Route path="/notifications/send" element={<SendNotification />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
