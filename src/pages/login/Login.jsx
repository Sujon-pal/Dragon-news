import { Link } from "react-router";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { use, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);

  const { userLogin } = use(AuthContext);

  const handleLoing = (e) => {
    e.preventDefault();

    const form = e.target;


    const email = form.email.value;
    const password = form.password.value;

    userLogin(email,password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
    console.log("Login Clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.15)] p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-linear-to-r from-primary to-blue-500 flex items-center justify-center text-white text-3xl shadow-lg">
            <FaLock />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Sign in to continue your journey
        </p>

        <form onSubmit={handleLoing} className="space-y-5">
          {/* Email */}
          <div>
            <label className="font-medium text-gray-700">Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="input input-bordered w-full mt-2 rounded-xl bg-white focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-medium text-gray-700">Password</label>

            <div className="relative mt-2">
              <input
                type={show ? "text" : "password"}
                name = "password"
                placeholder="Enter Password"
                className="input input-bordered w-full rounded-xl pr-12 bg-white focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-gray-500 hover:text-primary transition"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />
              Remember me
            </label>

            <a href="#" className="text-primary hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button  className="btn w-full rounded-xl border-0 bg-linear-to-r from-primary to-blue-500 text-gray-800 font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
            Login
          </button>
        </form>

        <div className="divider text-gray-400 my-8">OR CONTINUE WITH</div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <button className="btn rounded-xl bg-white border hover:bg-red-50 hover:border-red-400 transition-all">
            <FaGoogle className="text-red-500 text-xl" />
            Google
          </button>

          <button className="btn rounded-xl bg-white border hover:bg-gray-100 hover:border-gray-700 transition-all">
            <FaGithub className="text-xl" />
            GitHub
          </button>
        </div>

        <p className="text-center text-gray-600 mt-8">
          Don't have an account?
          <Link
            to="/auth/register"
            className="ml-2 font-semibold text-primary hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
