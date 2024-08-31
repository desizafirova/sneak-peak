import supabase from '../services/supabase';

export async function getMenSneakers() {
  let { data: menSneakers, error } = await supabase
    .from('sneakers')
    .select('*')
    .eq('category', 'men');

  if (error) {
    throw new Error('Sneakers could not be loaded 💥');
  }

  return menSneakers;
}
