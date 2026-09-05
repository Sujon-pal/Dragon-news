import { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  

  const handleSignup = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      })
      .catch((error) => {
        const errormessage = error.message;
        alert(errormessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center">Create Account</h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Register your account
        </p>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="font-medium">Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          <div>
            <label className="font-medium">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          <div>
            <label className="font-medium">Password</label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-blue-600 text-sm"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-full">Create Account</button>
        </form>

        <p className="text-center mt-5">
          Already have an account?
          <NavLink to="/auth/login">
            <span className="text-primary font-semibold cursor-pointer ml-2">
              Login
            </span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
