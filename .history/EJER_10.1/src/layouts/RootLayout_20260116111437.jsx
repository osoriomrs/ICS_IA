import { NavLink, Outlet, useLoaderData } from 'react-router-dom';

export default function RootLayout() {
  const countries = useLoaderData();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
      <aside
        style={{
          width: '300px',
          overflowY: 'auto',
          borderRight: '1px solid #ccc',
          padding: '1rem',
        }}
      >
        <h3>Países de Europa</h3>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {countries.map((country) => (
            <li key={country.cca3} style={{ marginBottom: '0.5rem' }}>
              <NavLink
                to={`/country/${country.name.common.toLowerCase()}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <img
                  src={country.flags.svg}
                  alt={country.name.common}
                  width="24"
                />
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
