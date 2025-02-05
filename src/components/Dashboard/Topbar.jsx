function Topbar() {
    return (
      <div className="bg-gray-900 text-emerald-500 shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Super Admin Dashboard</h1>
        <button className="bg-emerald-400 text-white px-4 py-2 rounded">Logout</button>
      </div>
    );
  }
  
  export default Topbar;
  