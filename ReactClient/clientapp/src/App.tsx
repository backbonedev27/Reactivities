import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button, ButtonContent, Header, List } from 'semantic-ui-react';


function App() {
  const [getActivities, setActivities] = useState([]);
  
  useEffect(()=> {
      axios.get('http://localhost:5000/api/activities')
      .then(response =>{
        
        setActivities(response.data);
      })
  },[])

  return (
    <div>
     <Header as='h2' icon='users' content='Reactivities'/>
       
       <List>
        {getActivities.map((activity : any) => (
          <List.Item key={activity.id}>
            {activity.venue}

          </List.Item>
        ))}
       </List>
     
    </div>
  );
}

export default App;
