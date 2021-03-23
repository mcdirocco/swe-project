import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import {getUser} from "../API";

const AccountDetails = () => {
    let [points, setPoints] = useState(0);
    let [user, setUser] = useState(undefined);
    let [loading, setLoading] = useState(true);
    useEffect(async () => {
        let user = await getUser(localStorage.getItem("token"));
        setUser(user);
        setPoints(user.user.points);
        setLoading(false);
        setLoading(false);
    });
    // useEffect( () => {
    //     async function getPoints() {
    //         let user = await getUser(localStorage.getItem("token"));
    //         setUser(user);
    //         setPoints(user.user.points);
    //         setLoading(false);
    //     }
    //     console.log("test");
    // }, []);
    if(loading) {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Loading...</h1>
                </header>
            </div>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Current User: {user === undefined ? "Guest" : user.user.firstname + " " + user.user.lastname}</h1>
                <h2>Email Address: {user === undefined ? "None" : user.user.email}</h2>
                <h2>Total Points: {points}</h2>
                <br />
                <Button href="/landing" onClick={() => {{localStorage.removeItem("name"); localStorage.removeItem("token");}}} variant={"danger"} className={""}>Logout</Button>
            </header>
        </div>
    );
};

export default AccountDetails;
