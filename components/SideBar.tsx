import NewChat from "./NewChat";

const SideBar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
            {/* New Chart */}
            <NewChat />
        </div>

        <div>
            {/* ModelSelction */}
        </div>

        {/* Map through the CharTows */}
      </div>
    </div>
  );
};

export default SideBar;
