"use client"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import data from './carousel.json'
function Home() {
    return (
        <Carousel data-bs-theme="dark">
            {
                data.map(({ path, altText, title, subTitle }, index) => {
                    return <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={path}
                            alt={altText}
                            height="500px"
                        />
                        <Carousel.Caption>
                            <h5>{title}</h5>
                            <p>{subTitle}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })
            }


        </Carousel>
    );
}

export default Home
