import { useEffect } from "react";
import { ButtonForm } from "./Button";
import { Email } from "./Email";
import { FormHeader } from "./FormHeader";

export const ForgotPassword = () => {
  useEffect(() => {
    document.title = "Rire NFTs | Forgot-Password";
  }, []);
  return (
    <FormHeader src={"../public/images/turtle.jpg"}>
      <div className="w-full flex justify-center items-center">
        <form>
          <h1 className="font-workSans font-semibold text-2xl lg:text-4xl mb-12">Forgot Password?</h1>
          <Email />
          <ButtonForm>Send</ButtonForm>
        </form>
      </div>
    </FormHeader>
  );
};
