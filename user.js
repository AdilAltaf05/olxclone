import React, { useState, useEffect } from "react";
import "../App.css";
import { getDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { db } from "../db";
import "./user.css"
import Button from 'react-bootstrap/Button';



function User() {

  const {userId} = useParams();
  const [adTitle, setAdTitle] = useState();
  const [adDiscription, setAdDiscription] = useState();
  const [adImg, setAdImg] = useState();
  const [adPrice, setAdPrice] = useState();
  const [adLocation, setAdLocation] = useState();
  const [adUserName, setAdUserName] = useState();


  //  const { userId } = useParams();
  useEffect(() => {
    getDoc(doc(db, "users", userId.split(":")[1])).then((e) => {
      setAdDiscription(e.data().desc);
      setAdTitle(e.data().name);
       setAdImg(e.data().picture);
        setAdPrice(e.data().price);
      setAdLocation(e.data().City);
        setAdUserName(e.data().email);
      console.log(e.data())
    });
  }, []);




    
  return (
    <div className="main-user">
      <div className="User-top" >
        <h1>Product Detail</h1>
      </div>
      <div className="main2-user">

      <div className="Container1-user">
        <h5 className="heading1-user" > Product: {adTitle}</h5>
        <h6  className="heading2-user" > Location: {adLocation}</h6>
      <img src={adImg} />
      </div>

      <div className="col2-user">

      <div className="Container2-user">
        <h3  className="heading3-user" >{adPrice} </h3>
        <Button className="button-User" variant="outline-info">Send Message</Button>
      </div>

      <div className="Container3-user">
        <h3 className="heading4-user"  >About Seller</h3>
        <span></span>
        <h5 className="heading5-user" > Seller's name: {adUserName}</h5>
        <h5 className="heading6-user" > Products Description: </h5>
        <h5  className="heading7-user" >{adDiscription} </h5>
      </div>
      </div>
      </div>
    </div>
  )
}

export default User