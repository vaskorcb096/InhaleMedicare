import React from 'react';
import './Ratting.css'

const Ratting = (props) => {
  const { rating, numReviews,caption } = props;
  return (
    <div className="shoprating rating">
      <span>
        <i
          className={
            numReviews >= 10
              ? 'fa fa-star'
              : numReviews >= 5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            numReviews >= 25
              ? 'fa fa-star'
              : numReviews >= 20
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            numReviews >= 40
              ? 'fa fa-star'
              : numReviews >= 30
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            numReviews >= 50
              ? 'fa fa-star'
              : numReviews >= 35
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            numReviews >= 60
              ? 'fa fa-star'
              : numReviews >= 40
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <span>{numReviews + ' reviews'}</span>
      )}
    </div>
  );
};

export default Ratting;