import React from "react";
import Tulemused from "../component/Tulemused";
import { useNavigate } from "react-router-dom";
import classes from './TulemusteLeht.module.css'

const TulemusteLeht = () => {
    let navigate = useNavigate();
  return (
    <div >
        <div className={classes.nupud}>
        <div className={classes.nupp1}><button onClick={() => {navigate("/")}}>Sisesta uus võistlus</button></div>
        <div className={classes.nupp2}><button onClick={() => {navigate("/panustamine")}}>Mine panustama</button></div>
        </div>
      <div>
        <Tulemused />
      </div>
    </div>
  );
};

export default TulemusteLeht;
