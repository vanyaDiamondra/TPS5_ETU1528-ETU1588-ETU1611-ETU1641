import React, { useEffect,useState } from "react";
import { IonContent,IonPage,IonItem,IonTitle,IonHeader,IonToolbar, IonList, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import { Categorie } from "./Categorie";


type VehiculesProps = {
    data: {
        id: number,
        immatriculation: string,
        dateobtention: Date,
        puissance: number,
        designation: string,
        etatPhysique: string,
        etatAssurance: string,
        categorie: Categorie
    }[]
}

const Vehicules = (vehicules: VehiculesProps) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Vehicules</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

            { vehicules.data.map(vehicule => {
                return (
                    <IonCard color="light ">
                        <IonCardHeader>
                            <IonCardTitle>{vehicule.immatriculation}</IonCardTitle>
                            <IonCardSubtitle>{vehicule.categorie.nom}</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <p>{vehicule.puissance} ch</p> 
                            <p>{vehicule.etatPhysique}</p>
                            <p>Assurance: {vehicule.etatAssurance}</p>
                        </IonCardContent>

                        <IonButton href="/detailvehicule" fill="outline">Detail</IonButton>
                    </IonCard>
                )
            }) }
            </IonContent>
        </IonPage>
    );
}

export default Vehicules;