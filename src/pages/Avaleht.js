import React from "react";
import Form from "../component/Form";
import { useNavigate } from "react-router-dom";
import classes from "./Avaleht.module.css";

const Avaleht = () => {
  let navigate = useNavigate();
  return (
    <div className={classes.avaleht}>
      <div className={classes.form}>
        <Form />
      </div>
      <div className={classes.nupud}>
        <div className={classes.nupp2}>
          <button
            onClick={() => {
              navigate("/panustamine");
            }}
          >
            Mine panustama
          </button>
        </div>
        <div className={classes.nupp1}>
          <button
            onClick={() => {
              navigate("/tulemused");
            }}
          >
            Vaata kinnitatud tulemusi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avaleht;
