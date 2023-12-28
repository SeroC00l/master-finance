"use server";
import supabase from "../supabase/client";

interface UserData {
  email: string;
  password: string;
  name?: string;
}

export async function SingIn(data: UserData) {
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  return JSON.stringify(result);
}

export async function SignUp(data: UserData) {
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        first_name: data.name,
      },
    },
  });
  return JSON.stringify(result);
}

export async function UserSession() {
  return supabase.auth.getSession();
}
