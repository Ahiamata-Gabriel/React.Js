import supabase from "./supabase";

export async function getTrucks() {
  const { data, error } = await supabase.from("Trucks").select("*");

  console.log(data);

  if (error) {
    console.error(error);
    throw new Error("Trucks could not be loaded");
  }

  return data;
}
