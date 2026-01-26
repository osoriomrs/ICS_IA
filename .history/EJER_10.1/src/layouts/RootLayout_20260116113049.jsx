import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { useState } from 'react';

export default function RootLayout() {
  const countries = useLoaderData();
  const [search, setSearch] = useState('');

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '320px', padding: '1rem', overflowY: 'auto', borderRight: '1px solid #ccc' }}>
        <input
          type="text"
          placeholder="Buscar país..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredCountries.map((country) => (
            <li key={country.cca3} style={{ marginBottom: '0.5rem' }}>
              <NavLink
                to={`/country/${country.name.common.toLowerCase()}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <img src={country.flags.svg} width="24" />
                {country.name.common}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}
