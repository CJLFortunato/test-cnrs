import React from 'react';
import { useState, useEffect } from 'react';
import './reset.css';
import './App.css';
import { Form } from '../Components/Form/Form';
import { SavedTopics } from '../Components/SavedTopics/SavedTopics';

function App() {
  const [savedTopics, setSavedTopics] = useState<string[]>([]); //stores the topics that are returned by the API call and is mapped as options in a list.
    

    useEffect(() => { //Calls the API on page load to retrieve the list of topics
      const id = "cfortunato";
      const apiCallSavedTopics = async () => {
          const res = await fetch(`http://localhost:5000/users/`);
          const data = await res.json();
          
          const topicsArray = data[id].savedTopics;
          setSavedTopics(topicsArray);
          
          
        };
        apiCallSavedTopics();
       
        
    });



  return (
    <div className="App">
      <h1>User Profile</h1>
      <Form />
      <SavedTopics topics={savedTopics}/>
    </div>
  );
}

export default App;
