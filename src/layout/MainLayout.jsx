import { Outlet } from "react-router";
import Header from "../component/header/Header";
import NavBar from "../component/Nav/NavBar";
import LatestNews from "../component/header/LatestNews";
import LeftAside from "../component/homeLayout/LeftAside";
import RightAside from "../component/homeLayout/RightAside";

const MainLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto mt-10">
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <NavBar></NavBar>
      </header>

      <main className="grid grid-cols-12 gap-3 ">
  
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>

        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
       
      </main>
    </div>
  );
};

export default MainLayout;
