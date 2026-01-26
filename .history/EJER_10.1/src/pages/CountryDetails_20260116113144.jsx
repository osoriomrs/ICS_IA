import { Link, useParams, useRouteLoaderData } from 'react-router-dom';

export default function CountryDetails() {
  const { countryName } = useParams();
  const countries = useRouteLoaderData('root');

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === countryName
  );

  if (!country) {
    return <h2>País no encontrado</h2>;
  }

  const borderCountries =
    country.borders?.map((code) =>
      countries.find((c) => c.cca3 === code)
    ).filter(Boolean) || [];

  return (
    <div>
      <h1>{country.name.official}</h1>
      <img src={country.flags.svg} width="200" />

      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Región:</strong> {country.region}</p>
      <p><strong>Subregión:</strong> {country.subregion}</p>

      <p>
        <strong>Idiomas:</strong>{' '}
        {country.languages
          ? Object.values(country.languages).join(', ')
          : 'No disponibles'}
      </p>

      <h3>Países Fronterizos</h3>
      {borderCountries.length === 0 ? (
        <p>No tiene fronteras</p>
      ) : (
        <ul>
          {borderCountries.map((border) => (
            <li key={border.cca3}>
              <Link to={`/country/${border.name.common.toLowerCase()}`}>
                {border.name.common}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
