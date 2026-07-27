import { Outlet } from "react-router";
import NavBar from "../component/Nav/NavBar";

const AuthLayout = () => {
    return (
        <div className="bg-gray-100 min-h-screen ">
            <header className=" w-11/12 mx-auto pt-4 ">
                <NavBar></NavBar>
            </header>
            <main className="w-11/12 mx-auto  ">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;