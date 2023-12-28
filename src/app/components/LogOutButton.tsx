import { redirect } from "next/navigation";
import supabase from "../lib/supabase/client";

export default function LogOutButton() {
  const Logout = async () => {
    "use server";
    await supabase.auth.signOut();
    redirect("/sing-in")
  };

  return (
    <form action={Logout}>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">
        Log Out
      </button>
    </form>
  );
}
