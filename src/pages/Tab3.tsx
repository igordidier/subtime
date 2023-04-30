import { IonContent, IonItem, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import apple from '../../public/assets/logos/apple.png'
import { useTodoList } from "./useTodoList";
import React, { useState, useRef, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import './Tab3.css';

function Tab3() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);


    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user name");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/Login");
    fetchUserName();
  }, [user, loading]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard class="cardhead">


            <div className="buttoncard">
            <p className="buttontext" >{name}</p>

            </div>

          </IonCard>
      <div className="buttonlist">
        <a className="buttonset" href="#">Persenal Detail</a>
        <a className="buttonset" href="#">Add Subscription</a>
        <a className="buttonset" href="#">History</a>
        <a className="buttonset" href="#">Settings</a>
        <button className="dashboard__btn" onClick={logout}>
         Logout
        </button>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
