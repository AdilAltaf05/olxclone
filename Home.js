import React from 'react'
import {Link} from "react-router-dom"
import { useEffect, useState } from 'react';
import { collection, getDocs  } from "firebase/firestore"; 
import {db} from "../db"
import Navbar from '../Main/Navbar';
import { async } from '@firebase/util';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Home.css"
import Footer from '../Main/footer';
import { useNavigate } from "react-router-dom"
import {doc} from 'firebase/firestore'

function Home(props) {
  console.log("🚀 ~ file: Home.jsx:15 ~ Home ~ props", props)
  const [user, setUser] = useState([""]);
  const navigate = useNavigate()

  useEffect(() => {
    read();
  }, []);

  async function read() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data=[]
  querySnapshot.forEach((doc) => {
    data.push({...doc.data(), id:doc.id})
    console.log(data);
  });
  setUser(data)
  }



  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className='Card' >
        {user.map((event) => {
          return(
            <div className='Maincard'> 
            <div >
            <Card  style={{ width: '18rem' }}>
      <Card.Img className='img-card' variant="top" src={event.picture} />
      <Card.Body >
        <div className='cardmain' >
        <Card.Title>{event.name}</Card.Title>
        <img className='img-heart' src='https://freeiconshop.com/wp-content/uploads/edd/heart-outline.png' />
        </div>
        <Card.Title>{event.price}</Card.Title>

        <Card.Text className='city-card'>
         Location {event.City}
        </Card.Text>
        <Button variant="primary"  onClick={ () => navigate("User:"+event.id)} >Check Details</Button>
      </Card.Body>
      </Card>
            </div>
            </div>
          )
        })}
      </div>

      <Footer />
    </div>
  )
}

export default Home