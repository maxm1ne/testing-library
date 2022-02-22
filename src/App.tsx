import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Link, Route, Routes} from 'react-router-dom';
import {Todos} from "./components/Todos";

type ButtonListItemType = {
    id: number,
    value: number
}

export const counterButtonList: ButtonListItemType[] = [
    {
        id: 1000,
        value: 500
    },
    {
        id: 2,
        value: 2
    },
    {
        id: 3,
        value: 3
    },
]
export const setCounterButtonsList: ButtonListItemType[] = [
    {
        id: 1000,
        value: 10000
    },
    {
        id: 2,
        value: 500
    },
    {
        id: 3,
        value: 1237123
    },
]

function App() {


    return (
        <div className="App">

            <Routes>
                <Route  path={"/"}  element={<>
                    <h1 data-testid="location-title" className={"Title"}>Корневая страница</h1>
                    <Link data-testid="link_to_counter" to={"/counter"}>To Counter</Link>
                    <Link data-testid="link_to_about" to={"/about"}>To About</Link>
                </>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/todos" element={<Todos/>}/>
            </Routes>
        </div>
    );
}

export default App;
