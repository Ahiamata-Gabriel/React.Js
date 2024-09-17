/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";

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
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/carbin-images/${imageName}`;
  //1. Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Had problems creating carbins");
  }
  //2. Upload image
  const { error: storageError } = await supabase.storage
    .from("carbin-images")
    .upload(imageName, newCabin.image);

  //3. Delete the cabin IF there was an  error uploading  the image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Cabin image not created, hence cabin wasnt created");
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
