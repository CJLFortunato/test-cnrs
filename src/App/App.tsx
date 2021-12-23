import React from 'react';
import { useState, useEffect } from 'react';
import './reset.css';
import './App.css';
import { Form } from '../Components/Form/Form';
import { SavedTopics } from '../Components/SavedTopics/SavedTopics';

function App() {
  
  const [topics, setTopics] = useState<string[]>([]); //stores the topics that are returned by the API call and is mapped as options in a list.
  const [clickedTopics, setClickedTopics] = useState<string[]>([]); //stores the topics that the user clicks on in the list and is mapped to buttons.
  const [savedTopics, setSavedTopics] = useState<string[]>([]); //stores the topics the user has already saved that are returned by the API call and is mapped to buttons.  

  //================================================================ API Calls ===========================================================================================

    useEffect(() => { //Calls the API on page load to retrieve the list of topics the user can choose from.
        const apiCall = async () => {
            const res = await fetch('http://localhost:5000/topics');
            const data = await res.json();
            setTopics(data);
        };
        apiCall();
    }, []);

    useEffect(() => { //Calls the API on page load to retrieve the list of topics the user has already saved.
      const id = "cfortunato";
      const apiCallSavedTopics = async () => {
          const res = await fetch(`http://localhost:5000/users/`);
          const data = await res.json();
          const topicsArray = data[id].savedTopics;
          setSavedTopics(topicsArray);
        };
        apiCallSavedTopics();
    });

//================================================================== Event handlers =========================================================================================

    const handleClick = (e: any): void => { // When the user clicks on an item in the list, this grabs the item and puts it into the clickedTopics array. Takes the emitted event as parameter.
        const topic: string = e.target.innerHTML; 
        if (clickedTopics.includes(topic)) {    // If the item has already been clicked on, the function returns without doing anything.
            return;
        }
        setClickedTopics([...clickedTopics, topic]);
    };

    const handleTopicButtonsDelete = (e:any): void => { // When the user clicks on an item in the clicked item array, this deletes the item from the array. Takes the emitted event as parameter.
        const topicToDelete: string = e.target.innerHTML;
        setClickedTopics(clickedTopics.filter((topic)=> topic !== topicToDelete ));
        
    }
//=================================================================== JSX ==================================================================================================
    

    



  return (
    <div className="App">
      <h1>User Profile</h1>
      <Form topics={topics} handleClick={handleClick} handleDelete={handleTopicButtonsDelete} clickedTopics={clickedTopics}/>
      <SavedTopics topics={savedTopics}/>
    </div>
  );
}

export default App;
