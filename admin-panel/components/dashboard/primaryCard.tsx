import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";

type details = {
  title: string;
  icon: JSX.Element;
  value: string;
  change: number
};
export default function PrimaryCard({ details }: { details: details }) {
  return (
    <div className="border text-customBlack rounded-md flex flex-col p-5">
      <div>
        <div className="md:hidden bg-customPurple text-white h-10 w-10 flex items-center justify-center bg-opacity-70 rounded-md">
          {details.icon}
        </div>
        <p className="hidden md:inline-block uppercase text-sm font-semibold tracking-wide">
          {details.title}
        </p>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <p className="text-3xl font-bold tracking-wider py-2">
          {details.value}
        </p>
        <div className={`flex items-center border rounded-2xl text-xs px-1 ${details.change > 0 ? "text-green-400" : "text-red-500"}`}>
          {details.change > 0 ? 
          <ArrowUpwardRoundedIcon fontSize="small"/> : 
          <ArrowDownwardRoundedIcon fontSize="small"/>         
        }
          <span>{Math.abs(details.change).toString()}%</span>
        </div>
      </div>
    </div>
  );
}
