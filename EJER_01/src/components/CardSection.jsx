import React from 'react';

function CardSection() {
  return (
    <section className="container my-5">
      <div className="row">
        {[1, 2, 3, 4].map((card) => (
          <div className="col-md-3 mb-4" key={card}>
            <div className="card h-100 text-center">
              <div className="card-body">
                <img src="https://cdn.pixabay.com/photo/2023/06/05/06/25/small-plant-8041521_1280.png" alt="Planta" className="mb-3" />
                <h5 className="card-title">Explora la Naturaleza</h5>
                <p className="card-text">Descubre cómo cuidar el medio ambiente y conectar con la vida natural.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardSection;
