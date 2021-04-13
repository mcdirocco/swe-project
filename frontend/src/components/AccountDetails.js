import React, {useEffect, useState} from "react";
import { Button, Container } from "react-bootstrap";
import {getUser} from "../API";
import { Row, Col } from "react-bootstrap";
import './AccountDetails.css'

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
                <div className="card">
                    <h5 className="card-header">Hello {user === undefined ? "Guest" : user.user.firstname + " " + user.user.lastname}!</h5>
                        <div className="card-body">
                            <Col md={{span: 10, offset: 1}}>
                                <h4>Email Address: {user === undefined ? "None" : user.user.email}</h4>
                                <h4>Username: {user === undefined ? "None" : user.user.username} </h4>
                                <h4>Total Points: {points}</h4>
                                <br />
                                <Button href="/landing" onClick={() => {{localStorage.removeItem("name"); localStorage.removeItem("token"); localStorage.setItem("isAdmin", "false")}}} variant={"danger"} className={""}>Logout</Button>
                            </Col>
                          </div>
                      </div>
                </header>
        </div>
    );
};

export default AccountDetails;
