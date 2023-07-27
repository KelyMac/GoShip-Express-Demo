import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function ImageCarousel({ images }) {
    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img src={image.src} alt={image.alt} className="d-block w-100" />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
