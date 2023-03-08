import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>

      </IonHeader>
      <IonContent fullscreen>

      <h6 className="uppcomming">YOUR SUBSCRIPTIONS</h6>

      <div className="categorie">
      <div id="complogomusic"></div>
      <p>Music</p>

      </div>

                  <div className="boxlist">
                    <div id="complogoapple"></div>
                    <div className="dateunder">
                    <p className="titlecard">Apple Music</p>
                    <p className="datecard">JULY 10,2022</p>
                    </div>
                    <p className="price">9.9 $/MTH</p>

                 </div>


        <div className="boxlist">
                                  <div id="complogospotify"></div>
                                  <div className="dateunder">
                                  <p className="titlecard">Spotify</p>
                                  <p className="datecard">JULY 14,2022</p>
                                  </div>
                                  <p className="price">14.9 $/MTH</p>

                       </div>


         <div className="categorie">
            <div id="complogoenter"></div>
            <p>ENTERTAINMENT</p>
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
         <div id="complogodisney"></div>
         <div className="dateunder">
         <p className="titlecard">Disney +</p>
         <p className="datecard">JULY 16,2022</p>
         </div>
         <p className="price">7.9 $/MTH</p>

      </div>




         <div className="categorie">
            <div id="complogopro"></div>
            <p>PROFESSION</p>
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

        <div className="categorie">
           <div id="complogoother"></div>
           <p>OTHER</p>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
