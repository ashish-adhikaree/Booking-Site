import PrimaryCard from "./primaryCard";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import BallotRoundedIcon from "@mui/icons-material/BallotRounded";

export default function Summary() {
  const cardDetails = [
    {
      title: "Revenue",
      icon: <AttachMoneyRoundedIcon />,
      value: "$2000",
      change: -12
    },
    {
      title: "Bookings",
      icon: <BallotRoundedIcon />,
      value: "34",
      change: -11
    },
    {
      title: "Clients",
      icon: <Person2RoundedIcon />,
      value: "19",
      change: +5
    },
  ];
  return (
    <section className="dashboard-section">
      <p className="dashboard-section-header">Summary</p>
      <div className="w-full grid grid-cols-3 gap-2 md:gap-5 grid-flow-row">
        {cardDetails.map((details, index) => (
          <PrimaryCard key={index} details={details} />
        ))}
      </div>
    </section>
  );
}
