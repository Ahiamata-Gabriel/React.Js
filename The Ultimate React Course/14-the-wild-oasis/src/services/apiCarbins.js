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

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Had problems delete carbins");
  }
}