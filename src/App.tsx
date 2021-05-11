import React from 'react';
import './App.css';
import {PlayPageContainer} from "./Components/PlayPage/PlayPageContainer";
import {Container} from "@material-ui/core";


function App() {
    return (
        <div className="App">
            <Container>
                <PlayPageContainer/>
            </Container>
        </div>
    );
}

export default App;
