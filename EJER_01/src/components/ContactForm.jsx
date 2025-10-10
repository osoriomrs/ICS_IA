import React from 'react';

function ContactForm() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h3 className="mb-4">Solicita más información</h3>
        <form name="contacto" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contacto" />
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre completo</label>
            <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="tucorreo@ejemplo.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Teléfono</label>
            <input type="tel" className="form-control" id="phone" placeholder="Tu teléfono" />
          </div>
          <button type="submit" className="btn btn-success">Enviar solicitud</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
