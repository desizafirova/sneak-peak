import supabase from './supabase';

export async function getSneakers() {
  let { data: sneakers, error } = await supabase.from('sneakers').select('*');

  if (error) {
    throw new Error('Sneakers could not be loaded 💥');
  }

  return sneakers;
}

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
