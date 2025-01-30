import supabase from "./supabase";

export async function getTrucks() {
  const { data, error } = await supabase.from("Trucks").select("*");

  if (error) {
    console.error(error);
    throw new Error("Trucks could not be loaded");
  }

  return data;
}
