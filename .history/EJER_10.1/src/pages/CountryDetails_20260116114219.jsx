import { useParams, useRouteLoaderData, Link } from "react-router-dom";

export default function CountryDetails() {
  const { countryName } = useParams();
  const countries = useRouteLoaderData("root");

  const country = countries.find(
    c => c.name.common.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    return <h2>País no encontrado</h2>;
  }

  const borderCountries = country.borders
    ? country.borders
        .map(code => countries.find(c => c.cca3 === code))
        .filter(Boolean)
    : [];

  return (
    <main style={{ padding: "1rem" }}>
      <h2>{country.name.official}</h2>
      <p><strong>Capital:</strong> {country.capital ? country.capital.join(", ") : "N/A"}</p>
      <p><strong>Población:</strong> {country.population.toLocaleString("es-ES")}</p>
      <p><strong>Continente:</strong> {country.region} - {country.subregion}</p>
      <p>
        <strong>Idiomas:</strong>{" "}
        {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
      </p>

      {borderCountries.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Países Fronterizos:</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
            {borderCountries.map(border => (
              <button
                key={border.cca3}
                style={{
                  backgroundColor: "#001f3f",
                  color: "white",
                  border: "none",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "4px",
                  cursor: "default"
                }}
              >
                {border.name.common}
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
