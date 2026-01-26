export async function countriesLoader() {
  const response = await fetch(
    'https://restcountries.com/v3.1/region/europe'
  );

  if (!response.ok) {
    throw new Error('Error cargando países');
  }

  return response.json();
}
