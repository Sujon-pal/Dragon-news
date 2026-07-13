import { format } from "date-fns";
import headerImg from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img className="w-[400px]" src={headerImg} alt="" />
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-gray-500">
        {format(new Date(), "EEEE , MMMM MM , yyyy")}
      </p>
    </div>
  );
};

export default Header;
