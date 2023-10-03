import { useEffect } from "react";
import { FormHeader } from "../components/Form/FormHeader";
import { Username } from "../components/Form/Username";
import { Email } from "../components/Form/Email";
import { Password } from "../components/Form/Password";
import { Remember } from "../components/Form/Remember";
import { ButtonForm } from "../components/Form/Button";
import { Link } from "react-router-dom";

export const Register = () => {
  useEffect(() => {
    document.title = "Rire NFTs | Register";
  }, []);
  return (
    <FormHeader src={"/images/wonder.jpg"}>
      <form className="w-full">
        <h1 className="font-workSans font-semibold text-2xl lg:text-4xl mb-6">Create Account</h1>
        <div className="flex justify-between flex-col lg:flex-row">
          <Username placeholder={"First Name"} id={"firstName"} htmlFor={"firstName"} />
          <Username placeholder={"Last Name"} id={"lastName"} htmlFor={"lastName"} />
        </div>
        <Email />
        <div className="flex justify-between flex-col lg:flex-row">
          <Password placeholder={"Password"} id={"password"} htmlFor={"password"} />
          <Password placeholder={"Confirm Password"} id={"confirmPassword"} htmlFor={"confirmPassword"} />
        </div>
        <Remember />
        <ButtonForm>Register</ButtonForm>
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="hover:text-secondary transition-all duration-200 hover:duration-300">
            Sign In
          </Link>
        </p>
      </form>
    </FormHeader>
  );
};
