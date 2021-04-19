import React from 'react';
import './App.css';
import {PlayPageContainer} from "./Components/PlayPageContainer";
import {CardsContainer} from "./Components/CardsContainer";
import {Container} from "@material-ui/core";


function App() {
    return (
        <div className="App">
            <Container>
            <PlayPageContainer/>
            <CardsContainer/>
            </Container>
        </div>
    );
}

export default App;
