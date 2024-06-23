"use server"
import { createClient } from "@/utils/supabase/server"

type Pet = {
    pet_id?: string
    name: string
    age: number
    breed: string
    description: string
}

// DB 
const supabase = createClient()

// CreatePet server action
export const CreatePet = async (formData: FormData) => {
    const pet: Pet = {
        name: formData.get('name') as string,
        age: Number(formData.get('age')),
        breed: formData.get('breed') as string,
        description: formData.get('description') as string
    }

    console.log(pet)
    const { data, error } = await supabase.from('pets').insert([pet]).
        select('pet_id')
    if (error) {
        throw error
    }
    return data
};


// Get All Pets server action
export const GetAllPets = async () => {
    const { data, error } = await supabase.from('pets').select('*')
    if (error) {
        throw error
    }
    return data
};