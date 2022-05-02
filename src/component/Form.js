import React, { useState } from "react";
import db from "../data/firebase";
import { collection, addDoc } from "firebase/firestore";
import classes from "./Form.module.css";

const Form = () => {
  const [koht, setKoht] = useState("");
  const [aeg, setAeg] = useState("");
  const [voistleja1, setVoistleja1] = useState("");
  const [voistleja2, setVoistleja2] = useState("");
  const [voistleja3, setVoistleja3] = useState("");
  const [voistleja4, setVoistleja4] = useState("");

  const handleOnChange = (e) => {
    setKoht(e.target.value);
  };
  const handleOnChange1 = (e) => {
    setAeg(e.target.value);
  };
  const handleOnChange2 = (e) => {
    setVoistleja1(e.target.value);
  };
  const handleOnChange3 = (e) => {
    setVoistleja2(e.target.value);
  };
  const handleOnChange4 = (e) => {
    setVoistleja3(e.target.value);
  };
  const handleOnChange5 = (e) => {
    setVoistleja4(e.target.value);
  };
  const lisaVoistlus = async (e) => {
    e.preventDefault();
    const voistlusRef = await addDoc(collection(db, "voistlejad"), {
      koht,
      aeg,
      voistleja1,
      voistleja2,
      voistleja3,
      voistleja4,
    });
    setKoht("");
    setAeg("");
    setVoistleja1("");
    setVoistleja2("");
    setVoistleja3("");
    setVoistleja4("");
  };

  return (
    <div className={classes.form}>
      <h2 className={classes.pealkiri}>Loo võistlus</h2>
      <form onSubmit={lisaVoistlus} className={classes.vaikeform}>
        <div className={classes.sisesta}>
          <label htmlFor="voistluskoht">Sisesta võistluskoht:</label>
          <input
            type="text"
            id="voistluskoht"
            value={koht}
            onChange={handleOnChange}
          ></input>
        </div>
        <div className={classes.sisesta}>
          <label htmlFor="voistlusaeg">Sisesta kuupäev: </label>
          <input
            type="date"
            id="voistlusaeg"
            value={aeg}
            onChange={handleOnChange1}
          ></input>
        </div>
        <div className={classes.voistlejad}>
          <label htmlFor="voistleja">Sisesta voistlejad: </label>
          <div>
            <label htmlFor="voistleja">1.</label>
            <input
              type="text"
              id="voistleja"
              value={voistleja1}
              onChange={handleOnChange2}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="voistleja1">2.</label>
            <input
              type="text"
              id="voistleja1"
              value={voistleja2}
              onChange={handleOnChange3}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="voistleja2">3.</label>
            <input
              type="text"
              id="voistleja2"
              value={voistleja3}
              onChange={handleOnChange4}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="voistleja3">4.</label>
            <input
              type="text"
              id="voistleja3"
              value={voistleja4}
              onChange={handleOnChange5}
              required
            ></input>
          </div>
        </div>
        <button>Lisa võistlus</button>
      </form>
    </div>
  );
};

export default Form;
