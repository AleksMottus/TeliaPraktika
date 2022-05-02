import React from "react";
import Naitavoistlejaid from "../component/Naitavoistlejaid";
import { useNavigate } from "react-router-dom";
import classes from './Koikvoistlused.module.css'



const Koikvoistlused = () => {
  let navigate = useNavigate();

  return (
    <div >
      <div className={classes.voistlused}><Naitavoistlejaid /></div>
      <div className={classes.nupud}>
      <div className={classes.nupp1}><button onClick={()=> {navigate("/tulemused")}}>Vaata kinnitatud tulemusi</button></div>
      <div className={classes.nupp2}><button onClick={()=> {navigate("/")}}>Sisesta veel võistluseid</button></div>
      </div>
    </div>
  );
};

export default Koikvoistlused;
