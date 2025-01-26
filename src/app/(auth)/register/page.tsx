import * as React from "react";
import { signIn } from "@/auth";

const Page = () => {
  return (
    <div>
      <form
        action={async (formData) => {
          "use server";
          await signIn("nodemailer", formData);
        }}
      >
        <input type="text" name="email" placeholder="Email" />
        <button type="submit">Signin with nodemailer</button>
      </form>
    </div>
  );
};

export default Page;
