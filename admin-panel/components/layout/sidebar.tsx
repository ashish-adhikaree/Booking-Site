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
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
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
    <div className="flex-grow flex flex-col items-center md:block bg-white h-[100vh] overflow-x-scroll sticky left-0 top-0 pt-5 scrollbar-none border-r">
      <h1 className="md:pl-5 md:hidden font-bold uppercase text-customPurple">
        BS
      </h1>
      <h1 className="md:pl-5 hidden md:block font-bold uppercase text-customPurple">
        Booking Admin
      </h1>
      <div className="flex flex-col">
        {navList.map((section, index) => (
          <section className="md:pt-5 w-full" key={index}>
            <h2 className="md:pl-5 pb-2 text-customGray uppercase font-bold text-sm border-b hidden md:block">
              {section.title}
            </h2>
            <ul className="text-customPurple">
              {section.pages.map((page, index) => (
                <li
                  title={page.title}
                  className="px-5 md:px-0 md:pl-5 md:min-w-[250px] py-2 cursor-pointer space-x-2 md:hover:bg-gradient-to-tr from-transparent to-customPurple w-full hover:text-indigo-700 md:hover:text-inherit"
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
      <div
        title="Logout"
        className="sticky bottom-0 py-3 shadow-[0px_-7px_10px_-4px_rgba(0,0,0,0.1)] bg-white text-customPurple flex items-center justify-center uppercase font-semibold hover:text-indigo-700 cursor-pointer"
      >
        <span className="text-customGray mr-3 hidden md:inline">Logout</span>{" "}
        <LogoutRoundedIcon />
      </div>
    </div>
  );
}
