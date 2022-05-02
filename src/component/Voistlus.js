import React from "react";
import Card from "../UI/Card";
import classes from "./Voistlus.module.css";
import { useState, useRef } from "react";
import Input from "./Input";
import { addDoc, collection } from "firebase/firestore";
import db from "../data/firebase";

const Voistlus = (props) => {
  const [kontoJaak, setKontoJaak] = useState(100);
  const [voitja, setVoitja] = useState("");
  const [voitjaSelgunud, setVoitjaSelgunud] = useState(false);
  const [panusHobune, setPanusHobune] = useState("");
  const [value, setValue] = useState("");
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [kinnitatud, setKinnitatud] = useState(false);
  const amountInputRef = useRef();
  const voistluseAeg = props.aeg;
  const voistluseKoht = props.koht;
  const hobune1 = props.voistleja1;
  const hobune2 = props.voistleja2;
  const hobune3 = props.voistleja3;
  const hobune4 = props.voistleja4;
  const voitjaksTuli = [hobune1, hobune2, hobune3, hobune4];

  let kontovaartus = 100;

  const lisaVoistlusDb = async (e) => {
    e.preventDefault();
    const voistlusteRef = await addDoc(collection(db, "tulemused"), {
      voitja,
      voistluseAeg,
      voistluseKoht,
      value,
      kontoJaak,
    });
    setKinnitatud(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 100
    ) {
      setAmountIsValid(false);
      return;
    }
    setPanusHobune(value);
    console.log(value);

    const getRandomVoitja = () => {
      return voitjaksTuli[Math.floor(Math.random() * voitjaksTuli.length)];
    };
    const handleCLick = () => {
      const randomVoitja = getRandomVoitja();
      setVoitja(randomVoitja);
      if (value === randomVoitja) {
        setKontoJaak(parseFloat(enteredAmount) + parseFloat(kontoJaak));
      } else {
        setKontoJaak(kontoJaak - enteredAmount);
      }
    };
    setVoitjaSelgunud(true);
    handleCLick();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const voistlusModal = (
    <div className={classes.koik}>
      <Card>
        <div>Selle võistluse kontojääk: {kontoJaak}€</div>
        <div>Võistluste toimumiskoht: {props.koht}</div>
        <div>Võistluste toimumisaeg: {props.aeg}</div>
        <div>
          <h3>Võistlejad:</h3>
          <ul className={classes.list}>
            <li>{props.voistleja1}</li>
            <li>{props.voistleja2}</li>
            <li>{props.voistleja3}</li>
            <li>{props.voistleja4}</li>
          </ul>
          <form>
            <Input
              ref={amountInputRef}
              label="Panus"
              input={{
                id: "Panus_" + props.id,
                type: "number",
                min: "0",
                max: "100",
                step: "1",
                defaultValue: "0",
              }}
            />
            {!amountIsValid && <p>Palun sisesta panus max:{kontoJaak}</p>}
            <select value={value} onChange={onChange}>
              <option value={props.voistleja1}>{props.voistleja1}</option>
              <option value={props.voistleja2}>{props.voistleja2}</option>
              <option value={props.voistleja3}>{props.voistleja3}</option>
              <option value={props.voistleja4}>{props.voistleja4}</option>
            </select>
          </form>
          <h1>{`valisid:${value}`}</h1>
          <h1>{`Võitis:${voitja}`}</h1>
          {!voitjaSelgunud && <button onClick={submitHandler}>Start</button>}
          {voitjaSelgunud && <button onClick={lisaVoistlusDb}>Kinnita</button>}
        </div>
      </Card>
    </div>
  );
  return (
    <div>
      <div>{!kinnitatud && voistlusModal}</div>
    </div>
  );
};

export default Voistlus;
