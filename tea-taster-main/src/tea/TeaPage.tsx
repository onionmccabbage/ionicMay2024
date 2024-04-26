import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { Tea } from '../shared/models';
import './TeaPage.css';
import { useHistory } from 'react-router';
import { useSession } from '../core/session/useSession';
import { logOutOutline } from 'ionicons/icons';
import { useTea } from './TeaProvider';

export const listToMatrix = (teas: Tea[]): Tea[][] => {
  let teaMatrix: Tea[][] = [];
  let row: Tea[] = [];

  teas.forEach(tea => {
    row.push(tea);
    if (row.length === 4) {
      teaMatrix.push(row);
      row = [];
    }
  });

  if (row.length) teaMatrix.push(row);
  return teaMatrix;
};

const Home: React.FC = () => {
  const { teas } = useTea();
  // const { logout } = useSession();
  // const history = useHistory();

  const handleLogout = async () => {
    // await logout();
    // we want to see the page without logging in
    // history.replace('/login');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tea</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => handleLogout()}>
              <IonIcon icon={logOutOutline} />
            </IonButton>
          </IonButtons>          
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tea</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid className="tea-grid">
          {listToMatrix(teas).map((row, idx) => (
            <IonRow
              key={idx}
              className="ion-justify-content-center ion-align-items-stretch">
              {row.map(tea => (
                <IonCol size="12" sizeMd="6" sizeXl="3" key={tea.id}>
                  <IonCard>
                    <IonImg src={tea.image} />
                    <IonCardHeader>
                      <IonCardTitle>{tea.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>{tea.description}</IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
