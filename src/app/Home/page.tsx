import { UserSession } from "../lib/auth-functions";
import { redirect } from "next/navigation";
import LogOutButton from "../components/LogOutButton";

export default async function Homepage() {
  const { data } = await UserSession();

  if (!data.session) {
    return redirect("/sing-in");
  }
  return (
    <div>
      this is the Homepage
      <LogOutButton />
    </div>
  );
}
