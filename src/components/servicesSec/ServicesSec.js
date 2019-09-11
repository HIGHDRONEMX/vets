import React, {Component} from "react";
import "./ServicesSec.css";

export class ServicesSec extends Component {
  render() {
    return (
      <section className="page-section" id="services">
        <div className="container">
          <h2 className="text-center mt-0">Siempre a tu servicio</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                <h3 className="h4 mb-2">Nacidos fuertes</h3>
                <p className="text-muted mb-0">
                  Con los mejores materiales para soportar hasta el entorno mas
                  duro
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                <h3 className="h4 mb-2">Hechos con amor</h3>
                <p className="text-muted mb-0">
                  ¿Realmente es un buen proyecto si no le das amor?
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-tasks text-primary mb-4"></i>
                <h3 className="h4 mb-2">Al d&iacute;a</h3>
                <p className="text-muted mb-0">
                  Nuestros proyectos se mantienen actualizados para mantener
                  nuestro alto standar
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-check-double text-primary mb-4"></i>
                <h3 className="h4 mb-2">Listo para su uso</h3>
                <p className="text-muted mb-0">
                  ¡Te entregamos tu pedido listo para ser utilizado!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesSec;
