import React from 'react';
import { useState, useEffect } from 'react';
import './reset.css';
import './App.css';
import { CatList } from '../Components/CatList/CatList';
import { SavedTopics } from '../Components/SavedTopics/SavedTopics';
import { SaveButton } from '../Components/SaveButton/SaveButton';

export function App(): JSX.Element {
  
  const [topics, setTopics] = useState<string[]>([]); //stores the topics that are returned by the API call and is mapped as options in a list.
  const [clickedTopics, setClickedTopics] = useState<string[]>([]); //stores the topics that the user clicks on in the list and is mapped to buttons.
  const [savedTopics, setSavedTopics] = useState<string[]>([]); //stores the topics the user has already saved that are returned by the API call and is mapped to buttons. 
  
  //================================================================ API Calls ===========================================================================================

    useEffect(() => { //Calls the API on page load to retrieve the list of topics the user can choose from.

        const apiCall = async () => {

            fetch('http://localhost:5000/topics').then(response => {
              if(response.ok) {
                return response.json();
              }
              throw new Error("Request failed");

            }, networkError => console.log(networkError.message))
            
            .then(jsonResponse => {
              setTopics(jsonResponse.filter((topic: string) => !savedTopics.includes(topic))); //Filters the topics the user has already saved out of the list.
              document.querySelectorAll(".active").forEach(({ classList }) => classList.replace("active", "inactive")); //Fixes an annoying bug with the button toggle.
            })
        };
        apiCall();
    }, [savedTopics]); // reloads everytime the Patch API call changes the saved topics, so the new ones can be filtered out.

    const id: string = "cfortunato";

    useEffect(() => { //Calls the API on page load to retrieve the list of topics the user has already saved.
      
      const apiCallSavedTopics = async () => {
          fetch(`http://localhost:5000/users/`).then(response => {

            if (response.ok) {
              return response.json();
            }
            throw new Error("Request Failed");

          }, networkError => console.log(networkError.message)
          )
          
          .then(jsonResponse  => {
              const topicsArray: string[] = jsonResponse[id].savedTopics;
              setSavedTopics(topicsArray);
          })
        };
        apiCallSavedTopics();
    }, []);
    

    const makePatchRequest = async function() { // Sends the topics chosen by user to the server
      // Forms request body
      interface BodyInt {
        "cfortunato": {
          "savedTopics": string[]
        }
      }
      const body: BodyInt = {
        "cfortunato": {
          "savedTopics": [...savedTopics, ...clickedTopics]
        }
      };

      fetch("http://localhost:5000/users", {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      
      .then(response => {
        if (response.ok) {
          return response.json();
        } 
        throw new Error('Request failed');
        
      }, networkError => {
          console.log(networkError.message);
          alert("Something has gone wrong. Please try again.");
        })

      .then((jsonResponse: any)=> { // Grabs the server response and adds the new topics to the savedTopics Array to be displayed.
        const topicsArray: string[] = jsonResponse[id].savedTopics;
        setSavedTopics(topicsArray);
        setClickedTopics([]); // Clears the clicked topics
      });
      
    };

//================================================================== Event handlers =========================================================================================

    const handleClick = (e: any): void => { // When the user clicks on an item in the list, this grabs the item and puts it into the clickedTopics array. Takes the emitted event as parameter.
      e.preventDefault();
      const topic: string = e.target.innerHTML; 
        if (clickedTopics.includes(topic)) {    // If the item has already been clicked on, the function calls the delete handler.
          e.target.className = "inactive";
          handleTopicButtonsDelete(e, topic);

        } else {
          e.target.className = "active";
          setClickedTopics([...clickedTopics, topic]);
          
        }
    };

    const handleTopicButtonsDelete = (e:any, topic: string): void => { // Deletes a topic from the clicked topics array. Takes the emitted event as parameter.
        setClickedTopics(clickedTopics.filter((clickedTopic: string)=> clickedTopic !== topic ));
    }

    const handleSaveButtonClick = (): void => {  //Sends the PATCH request when the user clicks on the "Save" button.
      makePatchRequest();
    }

    
//=================================================================== JSX ==================================================================================================
    
  return (
    
    <div className="App" data-testid="app">
      <header>
        <p>TRIPLE</p>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Profile</li>
        </ul>
      </header>
      <main>
        <h1>User Profile</h1>
        <CatList topics={topics} handleClick={handleClick} handleDelete={handleTopicButtonsDelete} clickedTopics={clickedTopics} />
        <SaveButton handleClick={handleSaveButtonClick}/>
        <SavedTopics topics={savedTopics}/>
      </main>
      <footer>
        <p>Page made by Clémence Fortunato. <a href="http://www.cjlfortunato.work/">Portfolio</a> <a href="https://github.com/CJLFortunato/">GitHub</a></p>
      </footer>
      
      
    </div>
  );
}

export default App;
