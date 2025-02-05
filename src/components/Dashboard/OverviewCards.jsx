function OverviewCards() {
    return (
      <div className="grid grid-cols-4 gap-4 my-4">
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-bold">Users</h3>
          <p>120</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-bold">Projects</h3>
          <p>45</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-bold">Tasks</h3>
          <p>230</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-bold">Earnings</h3>
          <p>$10,000</p>
        </div>
      </div>
    );
  }
  
  export default OverviewCards;
  