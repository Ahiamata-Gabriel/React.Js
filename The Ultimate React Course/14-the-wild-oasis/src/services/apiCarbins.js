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

// *** CREATING A NEW CARBIN  ***
export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Had problems creating carbins");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Had problems deleting carbins");
  }

  return data;
}
