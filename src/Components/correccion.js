import React, { useState } from "react";
import axios from "axios";
import "../styles/index.css";
import "../styles/layout.css";
import "../styles/inputs.css";
import "../styles/texto.css";

const Correccion = ({ pestaña, setPestaña }) => {
  const [text, setText] = useState("");
  const [correctText, setCorrectText] = useState("");
  const [tips, setTips] = useState("");
  const [grade, setGrade] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post("https://escribai.onrender.com", {
        text,
      });
      setCorrectText(response.data.corrected_text);
      setTips(response.data.tips_text);
      setGrade(response.data.grade_text);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="topnav">
        {/* <img src={pic} alt="Logo" className="img" /> */}
        <div onClick={() => setPestaña(false)}>EscribIA</div>
        <div className="active" onClick={() => setPestaña(true)}>
          {" "}
          Correccion{" "}
        </div>
      </div>

      <div className="card-p">
        <h2 className="txt">¿Qué texto quieres que revise?</h2>
        <form onSubmit={onSubmit}>
          <div>
            <textarea
              className="question"
              autoComplete="off"
              value={text}
              onChange={onChange}
              required
            ></textarea>
            <label htmlFor="msg"></label>
            <input type="submit" value="Revisar!"></input>
          </div>
        </form>
      </div>
      {!loading ? (
        <>
          {correctText === "" ? (
            <></>
          ) : (
            <>
              <div className="card">
                <h2 className="txt">Texto corregido:</h2>
                <div className="txt">{correctText}</div>
              </div>
              <div className="card">
                <h2 className="txt">Calificación</h2>
                <div className="container-r">
                  <div className="calificacion">
                    <p className="txt-cal">{grade}</p>
                  </div>
                  <div className="card-t">
                    <p className="txt-home">
                      {tips}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <iframe
            src="https://embed.lottiefiles.com/animation/112187"
            className="loading"
          ></iframe>
        </>
      )}
    </>
  );
};

export default Correccion;
