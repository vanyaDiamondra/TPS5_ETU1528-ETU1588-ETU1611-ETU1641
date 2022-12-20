import { IonContent, IonButton } from "@ionic/react";
import React,{ useEffect, useState} from "react";
import Vehicules from "../../components/Vehicules";
import Header from '../../components/Header'

const VehiculeList: React.FC = () => {
    const [vehicules,setvehicule]: any[] = useState([]);
    const fetchvehicule = async () => {
        fetch("http://localhost:8080/flotte-auto/vehicule",{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }).then( response => response.json())
        .then((data) => {
            setvehicule(data["data"]);
        })
        .catch((err) => {
            console.log(err.message);
        });    
    } 

    useEffect( () => {
        fetchvehicule();
    },[]);

    return (
        <IonContent>
            <IonButton onClick={}></IonButton>
            <Vehicules data={vehicules}></Vehicules>
        </IonContent>
    );
}

export default VehiculeList;