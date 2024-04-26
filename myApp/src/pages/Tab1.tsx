import { IonAvatar, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { allUsers } from '../static/userData';
import { useState } from 'react';

const Tab1: React.FC = () => {
  const [users, setUsers] = useState(allUsers)
  const alterUsers = (e: any) => {
    // need to add/edit users
    setUsers([...users, e])
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users Tab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab A</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {/* in React always provide an index when iterating */}
          {users.map((user, index) => { //index=user.id
            return <IonItem key={index}>
              <IonLabel >{user.first_name} {user.last_name}</IonLabel>
              <IonAvatar>
                <img src={user.avatar} alt={user.first_name} />
              </IonAvatar>
              <IonLabel>{user.email}</IonLabel>
            </IonItem>
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
