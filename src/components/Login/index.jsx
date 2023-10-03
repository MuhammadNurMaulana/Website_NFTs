import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Password } from "../Form/Password";
import { Username } from "../Form/Username";
import { FormHeader } from "../Form/FormHeader";

export const Login = () => {
  return (
    <FormHeader>
      <div className="grid sm:grid-cols-1 px-8 gap-16 md:gap-0 md:grid-cols-2 grid-rows-1 md:items-center lg:items-start md:px-20 lg:px-40 py-20">
        <form className="md:w-[85%] lg:w-[70%]">
          <h1 className="font-workSans font-semibold text-2xl lg:text-4xl mb-6">Welcome Back</h1>
          <Username />
          <Password>
            <p className="cursor-pointer show">
              <IoEyeOff />
            </p>
          </Password>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="md:text-sm lg:text-base">Remember Password</p>
            </div>
            <Link className="hover:text-secondary transition-all duration-200 hover:duration-300 md:text-sm lg:text-base">Forgot Password</Link>
          </div>
          <div className="cursor-pointer border border-secondary rounded-lg py-3 text-center text-xl font-spaceMono hover:bg-secondary transition-all duration-300 hover:duration-300 mb-3">Login</div>
          <p>
            Don't have an account?{" "}
            <Link to={"/register"} className="hover:text-secondary transition-all duration-200 hover:duration-300">
              Create Account
            </Link>
          </p>
        </form>
        <div>
          <img src="../public/images/fox.jpg" alt="fox" className="grid rounded-xl" />
        </div>
      </div>
    </FormHeader>
  );
};
