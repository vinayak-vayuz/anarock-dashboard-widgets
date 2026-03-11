import Header from "../components/Header";
import AssetValueBreakdown from "./component/AssetValueBreakdown";
import RevenuebyCategory from "./component/RevenuebyCategory";
import Stats from "./component/StatsGrid";
function Facilities({ data = {}, onExport }) {
  return (
    <div>
      <Header
        title="Facilities"
        description="Facility bookings overview"
        onExport={onExport}
      />
      <Stats data={data?.stats} />

      <div className="px-5 grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,3.5fr)] gap-[24px] mt-6">
        <AssetValueBreakdown data={data?.assetValueBreakdown} />
        <RevenuebyCategory data={data?.revenueByCategory} />
      </div>
    </div>
  );
}

export default Facilities;
