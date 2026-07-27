import img1 from "../../assets/class.png";
import img2 from "../../assets/swimming.png";
import img3 from "../../assets/playground.png";
import img4 from "../../assets/bg.png";

const Qzone = () => {
  return (
    <div>
      <div className="bg-gray-200 p-3 ">
        <h1 className=" text-2xl font-bold">Q-Zone</h1>
        <div className=" ">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
      <img className="pt-2.5 pl-2.5" src={img4} alt="" />
    </div>
  );
};

export default Qzone;
