import React from 'react'
import { collection, query, onSnapshot} from "firebase/firestore";
import db from '../data/firebase';
import { useEffect, useState } from "react";
import NaitaTulemust from './NaitaTulemust';

const Tulemused = () => {
    const [tulemused, setTulemused] = useState([])
    useEffect(() => {
        const q = query (collection(db, "tulemused"));
        const unsub = onSnapshot(q, (querySnapshot) => {
          let tulemusedArray = [];
          querySnapshot.forEach((doc) => {
            tulemusedArray.push({ ...doc.data(), id: doc.id})
          })
          setTulemused(tulemusedArray)
        });
        return () => unsub();
      }, []);
  return (
    <div>{tulemused.map((tulemus) => (
    <NaitaTulemust 
        key={tulemus.id}
        id={tulemus.id}
        voistluseKoht={tulemus.voistluseKoht}
        voistluseAeg={tulemus.voistluseAeg}
        voitja={tulemus.voitja}
        valitud={tulemus.value}
        loplikkontojaak={tulemus.kontoJaak}
    />))}</div>
  )
}

export default Tulemused