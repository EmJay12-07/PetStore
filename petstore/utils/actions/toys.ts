"use server"
import { createClient } from "../supabase/server"



// DB INITIALIZATION
const supabase = createClient();


// GET ALL TOYS
export const getToys = async () => {
  const { data, error } = await supabase
    .from("toys")
    .select("*")
  return data;
}