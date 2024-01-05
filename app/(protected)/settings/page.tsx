import { auth } from "@/auth";
import { signOut } from "next-auth/react";

const Settingspage = async () => {
  const session = await auth();
  return (
    <div>
      <p>Settings page</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Signout</button>
      </form>
    </div>
  );
};

export default Settingspage;
