import React, { useState } from "react";
import { IonContent,IonPage,IonItem,IonTitle,IonHeader,IonToolbar, IonThumbnail, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonLabel, IonIcon } from "@ionic/react";
import { Categorie } from "../../components/Categorie";
import { airplane } from 'ionicons/icons';

type Airplane = {
    airplane: {
        id: number,
        photo: string,
        immatriculation: string,
        dateobtention: string,
        puissance: number,
        categorie: Categorie,
        etatphysique: string,
        distance: number,
        carburantdepense: number
    }
}

const AirplaneDetail = (data: Airplane) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle><IonIcon icon={airplane} />Airplane details</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonItem>
                    <IonThumbnail slot="start">
                        <IonImg src={"/assets/images/"+data.airplane.photo} />
                    </IonThumbnail>
                    <IonLabel>
                        <h3>Immatriculation : {data.airplane.immatriculation}</h3>
                        <p>Puissance {data.airplane.puissance}</p>
                        <p>Date obtention {data.airplane.dateobtention}</p>
                        <p>Etat physique <b>{data.airplane.etatphysique}</b> </p>
                        <p>Kilometrage effectué <b>{data.airplane.distance}</b> </p>
                    </IonLabel>
                </IonItem>
            </IonContent>
        </IonPage>
    );
}

export default AirplaneDetail;