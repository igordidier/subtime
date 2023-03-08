import { IonContent, IonItem, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import apple from '../../public/assets/logos/apple.png'
import { useTodoList } from "./useTodoList";
import React, { useState, useRef } from "react";


const Tab1: React.FC = () => {


const { list, addTodo, updateTodo, deleteTodo } = useTodoList();
const [newTodo, setNewTodo] = useState("");

const doInputRef = useRef<HTMLIonInputElement>(null);

  return (
    <IonPage>

      <IonContent fullscreen>
        <IonHeader collapse="condense">

        </IonHeader>
        <IonCard class="cardhead">
        <IonCardHeader>AVERAGE  MONTHLY EXPENSES</IonCardHeader>

              <div className="buttoncard">
              <p className="buttontext" >150 $</p>
              <button className="button">Break Down ▶</button>
              </div>

            </IonCard>

          <h6 className="uppcomming"> UPCOMING PAYMENTS </h6>

            <div className="boxlist">
              <div id="complogoapple"></div>
              <div className="dateunder">
              <p className="titlecard">Apple Music</p>
              <p className="datecard">JULY 10,2022</p>
              </div>
              <p className="price">9.9 $/MTH</p>

           </div>

           <div className="boxlist">
             <div id="complogonetflix"></div>
             <div className="dateunder">
             <p className="titlecard">Netflix</p>
             <p className="datecard">JULY 11,2022</p>
             </div>
             <p className="price">7.9 $/MTH</p>

          </div>

          <div className="boxlist">
            <div id="complogocanal"></div>
            <div className="dateunder">
            <p className="titlecard">Canal +</p>
            <p className="datecard">JULY 13,2022</p>
            </div>
            <p className="price">19.9 $/MTH</p>

         </div>

         <div className="boxlist">
           <div id="complogospotify"></div>
           <div className="dateunder">
           <p className="titlecard">Spotify</p>
           <p className="datecard">JULY 14,2022</p>
           </div>
           <p className="price">14.9 $/MTH</p>

        </div>

        <div className="boxlist">
          <div id="complogoadobe"></div>
          <div className="dateunder">
          <p className="titlecard">adobe</p>
          <p className="datecard">JULY 14,2022</p>
          </div>
          <p className="price">49.9 $/MTH</p>

       </div>
       <div className="boxlist">
         <div id="complogoyoutube"></div>
         <div className="dateunder">
         <p className="titlecard">Youtube</p>
         <p className="datecard">JULY 16,2022</p>
         </div>
         <p className="price">7.9 $/MTH</p>

      </div>
      <div className="boxlist">
        <div id="complogodisney"></div>
        <div className="dateunder">
        <p className="titlecard">Disney +</p>
        <p className="datecard">JULY 16,2022</p>
        </div>
        <p className="price">7.9 $/MTH</p>

     </div>

      </IonContent>
    </IonPage>
  );
};


export default Tab1;
