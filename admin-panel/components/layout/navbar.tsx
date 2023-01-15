import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
export default function Navbar() {
  return (
    <div className="bg-white border-b sticky top-0 flex justify-between items-center p-3">
      <form className="bg-white border rounded-full px-4 py-1 text-customGray text-sm md:w-[300px] flex">
        <input
          className="bg-transparent border-none outline-none flex-grow"
          type="text"
          placeholder="SEARCH"
        />
        <button className="hidden"></button>
        <SearchRoundedIcon />
      </form>
      <ul className="text-customPurple flex items-center space-x-4">
        <li className="relative cursor-pointer">
          <ChatBubbleRoundedIcon />
          <span className="alert-bubble">12</span>
        </li>
        <li className="relative cursor-pointer">
          <NotificationsRoundedIcon />
          <span className="alert-bubble">25</span>
        </li>
        <li className="h-8 w-8 rounded-full bg-gray-300">

        </li>
      </ul>
    </div>
  );
}
