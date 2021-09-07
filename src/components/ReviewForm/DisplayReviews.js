import React, { Component } from 'react';
import StyledCarousel from 'react-card-carousel';

class Carousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '300px',
      width: '300px',
      paddingTop: '80px',
      textAlign: 'center',
      background: 'black',
      border: '4px #FFF solid',
      color: '#29f9fc',
      marginLeft: '-24rem',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  }

  render() {
    return (
      <StyledCarousel autoplay={ true } autoplay_speed={ 5000 }>
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
      </StyledCarousel>
    );
  }
}

export default Carousel;