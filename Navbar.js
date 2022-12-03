import React from "react";
import {Link} from "react-router-dom"
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function Navbar() {

    return(

        <div className="Main-container" >

            <div className="Head-1"  >
                
            <div className="container-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
                height='40px' ></img>
                <h4 className="heading-1">MOTORS</h4>
                <h4 className="heading-1">PROPERTY</h4>
            </div>

            <div className="container-2">
            <img src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
                height='45px' ></img>

                <input className="searchbar-1" placeholder="Choose Loaction" />
                <input className="searchbar-2" placeholder="Find Cars Mobile Phones and more..." />
                <img className="search-icon" src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-find-icon-png-image_854997.jpg"
                height='50px' ></img>
                <Link className="link-1">Login</Link>

                <button className="button-1">
                <Link className="buttonlink-1" to={'/add'}> SELL</Link>
                </button>
            </div>
                </div>

                <div className="container-3">
                <h3>ALL CATEGORIES</h3>
                <h5>Mobile Phones</h5>
                <h5>Cars</h5>
                <h5>Motorcycle</h5>
                <h5>TV-Video-Audio</h5>
                <h5>Tablets</h5>
                <h5>Land & Plots</h5>
                <h5>Kids</h5>
                <h5>Furniture & Home Decor</h5>
                <h5>Jobs</h5>
                <h5>Fashion & Beauty</h5>
            </div>




                <div className="Container-4" >
                <Carousel>
        <Carousel.Item  interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  interval={500}>
          <img
            className="d-block w-100"
            src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
            alt="Second slide"
          />
          <Carousel.Caption>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="Slider" >
          <img
            className="d-block w-100"
            src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
                </div>

                <h1 className="last-heading">Fresh recommendations</h1>

            

        </div>
    )
};

export default Navbar;