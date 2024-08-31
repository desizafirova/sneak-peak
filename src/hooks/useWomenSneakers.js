import supabase from '../services/supabase';

export async function getWomenSneakers() {
  let { data: womenSneakers, error } = await supabase
    .from('sneakers')
    .select('*')
    .eq('category', 'women');

  if (error) {
    throw new Error('Sneakers could not be loaded 💥');
  }

  return womenSneakers;
}
