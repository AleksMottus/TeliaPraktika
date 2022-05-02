import React from 'react'
import { collection, query, onSnapshot} from "firebase/firestore";
import db from '../data/firebase';
import { useEffect, useState } from "react";
import Voistlus from './Voistlus';


const Naitavoistlejaid = (props) => {
    const [voistlused, setVoistlused] = useState([])
    
    
  

  useEffect (() => {
    const q = query(collection(db, "voistlejad"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let voistlejadArray = [];
      querySnapshot.forEach((doc) => {
        voistlejadArray.push({ ...doc.data(), id: doc.id})
      })
      setVoistlused(voistlejadArray)
    });
    return () => unsub();
  }, []);
  return (
    <div>{voistlused.map((voistlus) => (
        <Voistlus 
        key={voistlus.id}
        id={voistlus.id}
        koht={voistlus.koht}
        aeg={voistlus.aeg}
        voistleja1={voistlus.voistleja1}
        voistleja2={voistlus.voistleja2}
        voistleja3={voistlus.voistleja3}
        voistleja4={voistlus.voistleja4}
        
        />
        
    ))}
    
    </div>

    
  )
}

export default Naitavoistlejaid