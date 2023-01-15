import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import BallotRoundedIcon from "@mui/icons-material/BallotRounded";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";
import ParaglidingRoundedIcon from "@mui/icons-material/ParaglidingRounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import DynamicFeedRounded from "@mui/icons-material/DynamicFeedRounded";
const navList = [
  {
    title: "Analytics",
    pages: [
      {
        title: "Dashboard",
        icon: <DashboardRoundedIcon />,
        link: "/",
      },
      {
        title: "Bookings",
        icon: <BallotRoundedIcon />,
        link: "/bookings",
      },
      {
        title: "Revenue",
        icon: <PaidRoundedIcon />,
        link: "/revenue",
      },
      {
        title: "Demographics",
        icon: <Diversity1RoundedIcon />,
        link: "/demographics",
      },
    ],
  },
  {
    title: "Clients",
    pages: [
      {
        title: "Messages",
        icon: <EmailRoundedIcon />,
        link: "/chat",
      },
      {
        title: "Reviews",
        icon: <ReviewsRoundedIcon />,
        link: "/reviews",
      },
    ],
  },
  {
    title: "Promotion",
    pages: [
      {
        title: "Advertisements",
        icon: <CampaignRoundedIcon />,
        link: "/advertisements",
      },
      {
        title: "Promo Codes",
        icon: <DiscountRoundedIcon />,
        link: "/promocodes",
      },
    ],
  },
  {
    title: "Services",
    pages: [
      {
        title: "Activities",
        icon: <ParaglidingRoundedIcon />,
        link: "/activities",
      },
      {
        title: "Packages",
        icon: <DynamicFeedRounded />,
        link: "/packages",
      },
    ],
  },
  {
    title: "About us",
    pages: [
      {
        title: "Team",
        icon: <GroupsRoundedIcon />,
        link: "/team",
      },
      {
        title: "Our Page",
        icon: <StoreRoundedIcon />,
        link: "/account",
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className="flex-grow flex flex-col items-center md:block bg-white h-[100vh] overflow-x-scroll sticky left-0 top-0 py-5 scrollbar-none border-r">
      <h1 className="md:pl-5 md:hidden font-bold uppercase text-indigo-400">BS</h1>
      <h1 className="md:pl-5 hidden md:block font-bold uppercase text-indigo-400">
        Booking Admin
      </h1>
      <div className="flex flex-col">
        {navList.map((section, index) => (
          <section className="md:pt-5 w-full" key={index}>
            <h2 className="md:pl-5 pb-2 text-gray-400 uppercase font-bold text-sm border-b hidden md:block">
              {section.title}
            </h2>
            <ul className="text-indigo-400">
              {section.pages.map((page, index) => (
                <li
                  className="md:pl-5 py-2 cursor-pointer space-x-2 hover:bg-gradient-to-tr from-transparent to-indigo-300 w-full"
                  key={index}
                >
                  {page.icon}
                  <span className="hidden md:inline text-gray-500 font-semibold">
                    {page.title}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
