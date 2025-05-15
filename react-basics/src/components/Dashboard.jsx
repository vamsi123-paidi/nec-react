import { Outlet, Link } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Renders nested routes here */}
    </div>
  );
}

export default DashboardLayout
