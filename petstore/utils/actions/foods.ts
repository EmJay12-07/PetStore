"use server"
import { createClient } from "@/utils/supabase/server"



// DB 
const supabase = createClient();

// Get All Pet Foods server action
export const GetAllFoods = async () => {
    const { data, error } = await supabase.from('foods').select('*')
    if (error) {
        throw error
    }
    return data
};

// get pets foods by id server action
export const GetFoodById = async (id:number) => {
    console.log(id)
    const { data, error } = await supabase.from('foods').select('*').eq('food_id', id)
    if (error) {
        throw error
    }
    return data
}