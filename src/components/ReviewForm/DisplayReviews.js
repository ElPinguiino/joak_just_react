import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

class Carousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '300px',
      width: '300px',
      paddingTop: '80px',
      textAlign: 'center',
      background: 'black',
      color: '#FFF',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  }

  render() {
    return (
      <ReactCardCarousel autoplay={ true } autoplay_speed={ 5000 }>
        <div style={ Carousel.CARD_STYLE }>
          <p>Juan A.</p>
          <p>Date Visited: 08/15/2021</p>
          <p>Food Rating: Very good!</p>
          <p>Service Rating: Very good!</p>
          <p>Review: This was great!</p>
        </div>
        <div style={ Carousel.CARD_STYLE }>
          Second Card
        </div>
        <div style={ Carousel.CARD_STYLE }>
          Third Card
        </div>
        <div style={ Carousel.CARD_STYLE }>
          Fourth Card
        </div>
        <div style={ Carousel.CARD_STYLE }>
          Fifth Card
        </div>
      </ReactCardCarousel>
    );
  }
}

export default Carousel;