export async function api(path) { 
  const res = await fetch(path);
  return res.json();
}