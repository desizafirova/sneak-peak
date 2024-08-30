import supabase from './supabase';

export async function getSneakers() {
  let { data: sneakers, error } = await supabase.from('sneakers').select('*');

  if (error) {
    throw new Error('Sneakers could not be loaded 💥');
  }

  return sneakers;
}
