import { IonButton, IonContent, IonHeader, IonPage, IonSelect, IonSelectOption, IonSkeletonText, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useState } from 'react';
import { Method } from 'ionicons/dist/types/stencil-public-runtime';

const baseUrl = 'https://jsonplaceholder.typicode.com'
const Tab2: React.FC = () => {
  const [apiStruc, setApiStruc] = useState({
    'baseUrl':baseUrl,
    'category':'photos',
    'id':1
  })
  const updateCategory = (e:any)=>{
    setApiStruc({...apiStruc, 'category':e})
  }
  const [response, setResponse] = useState('') // here we begin with an empty state
  const sendRequest = async ()=>{
    try {
      const response = await fetch(`${apiStruc.baseUrl}/${apiStruc.category}/${apiStruc.id}`, 
      {method:'get'})
      const responseJSON = await response.json() // coinverts JSON text to a JS object stucture
      setResponse(JSON.stringify(responseJSON)) // this will populate our state
    } catch (err:any){
      setResponse(err.message)
    } finally {}
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSelect
          placeholder='Select Category'
          onIonChange={ e =>updateCategory(e.detail.value ?? '')}
          value={apiStruc.category}>
          {/* here the user may choose a category */}
          <IonSelectOption value='users'>Users</IonSelectOption>
          <IonSelectOption value='todos'>Todos</IonSelectOption>
          <IonSelectOption value='photos'>Photos</IonSelectOption>
          <IonSelectOption value='posts'>Posts</IonSelectOption>
          <IonSelectOption value='albums'>Albums</IonSelectOption>
        </IonSelect>
        <IonButton expand='block' onClick={()=>sendRequest()}>Send Request</IonButton>
        <IonText>
          {/* render any loaded data here */}
          <pre>{response}</pre>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
