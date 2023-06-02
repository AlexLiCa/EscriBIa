import React from "react";
import "../styles/index.css";
import "../styles/layout.css";
import "../styles/inputs.css";
import "../styles/texto.css";

const Home = ({ pestaña, setPestaña }) => {
  return (
    <>
      <div className="topnav">
        <div className="active" onClick={() => setPestaña(false)}>
          EscribIA
        </div>
        <div className onClick={() => setPestaña(true)}>
          {" "}
          Correccion{" "}
        </div>
      </div>

      {/* <h2 className="txt-escribia">Bienvendos a EscribIA</h2> */}

      <div className="container-r">
        <div className="item-ft">
          <p className="txt-home2">
            No dejes que tu escritura te detenga.
            <br /> Deja que EscribIA te ayude <br />a redactar mejor
          </p>
          <button className="btn-2" onClick={() => setPestaña(true)}>
            Pruebalo!
          </button>
        </div>
        <div className="item-fa">
          <iframe
            src="https://embed.lottiefiles.com/animation/139662"
            className="writing"
          />
        </div>
      </div>
      <div className="container">
        <div className="card-h">
          <p className="txt-home">
            EscribIA utiliza inteligencia artificial para mejorar la calidad del
            texto y las habilidades de redacción de los usuarios.
          </p>
        </div>
        <div className="card-h">
          <p className="txt-home">
            Dirigido a estudiantes universitarios, EscribIA ofrece corrección
            gramatical y consejos útiles para mejorar el texto.
          </p>
        </div>
        <div className="card-h">
          <p className="txt-home">
            Dirigido a estudiantes universitarios, EscribIA ofrece corrección
            gramatical y consejos útiles para mejorar el texto.
          </p>
        </div>
        <div className="card-h">
          <p className="txt-home">
            Fácil de usar para cualquier usuario, EscribIA utiliza las
            tecnologías de React, Flask y OpenAI para brindar resultados
            precisos y rápidos.
          </p>
        </div>
      </div>
 
    </>
  );
};

export default Home;
