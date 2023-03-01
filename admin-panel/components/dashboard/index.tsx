import BookingsTable from "./bookingsTable";
import RevenueChart from "./revenueChart";
import Summary from "./summary";
import dynamic from "next/dynamic";


export default function Dashboard() {
  return (
    <main className="p-5 space-y-5">
      <Summary/>
      <RevenueChart/>
      <BookingsTable/>
    </main>
  );
}
