import { useEffect } from "react";
import { FormHeader } from "../components/Form/FormHeader";
import { Username } from "../components/Form/Username";
import { Password } from "../components/Form/Password";
import { IoEyeOff } from "react-icons/io5";
import { ButtonForm } from "../components/Form/Button";
import { Link } from "react-router-dom";
import { Remember } from "../components/Form/Remember";

export const Login = () => {
  useEffect(() => {
    document.title = "Rire NFTs | Login";
  }, []);
  return (
    <FormHeader src={"../public/images/baby-fox.jpg"}>
      <form className="md:w-[85%] lg:w-[70%]">
        <h1 className="font-workSans font-semibold text-2xl lg:text-4xl mb-6">Welcome Back</h1>
        <Username placeholder={"Username"} id={"username"} htmlFor={"username"} />
        <Password placeholder={"Password"} id={"password"} htmlFor={"password"}>
          <p className="cursor-pointer show">
            <IoEyeOff />
          </p>
        </Password>
        <Remember />
        <ButtonForm>Log In</ButtonForm>
        <p>
          Don't have an account?{" "}
          <Link to={"/register"} className="hover:text-secondary transition-all duration-200 hover:duration-300">
            Create Account
          </Link>
        </p>
      </form>
    </FormHeader>
  );
};
