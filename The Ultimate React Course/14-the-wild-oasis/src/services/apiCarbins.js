/* eslint-disable no-unused-vars */
import supabase from "./supabase";

export async function getCarbins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Had problems loading carbins");
  }

  return data;
}
