import React from "react";
import Card from "../UI/Card";
import classes from "./NaitaTulemust.module.css";

const NaitaTulemust = (props) => {
  const tulemusedModal = (
    <div className={classes.tulemused}>
      <Card>
        <div>Võistluse id: {props.id}</div>
        <div>Võistluste toimumiskoht: {props.voistluseKoht}</div>
        <div>Võistluste toimumisaeg: {props.voistluseAeg}</div>
        <div>Teie valitud hobune:{props.valitud}</div>
        <div>Võitja: {props.voitja}</div>
        <div>Lõplik kontojääk peale panustamist: {props.loplikkontojaak}</div>
      </Card>
    </div>
  );
  return <div>{tulemusedModal}</div>;
};

export default NaitaTulemust;
