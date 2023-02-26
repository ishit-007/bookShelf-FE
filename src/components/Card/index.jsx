import './index.css';
import React from 'react';
import PropTypes from 'prop-types';
import coverImage from '../../assets/cover_image.jpeg';
import blankHeart from '../../assets/heart-black.svg';
import filledHeart from '../../assets/heart-red.svg';

const Card = props => {
  const [liked, setLiked] = React.useState(false);
  return (
    <div className="card">
      <div className="card-image">
        <img src={coverImage} alt="" />
      </div>
      <div className="card-content" style={{ backgroundColor: `${props.scheme}` }}>
        <p>{props.name.toUpperCase()}</p>
      </div>
      <div className="reviews">
        <p>{props.rating}</p>
        {liked && <img src={filledHeart} alt="" onClick={() => setLiked(false)} />}
        {!liked && <img src={blankHeart} alt="" onClick={() => setLiked(true)} />}
      </div>
    </div>
  );
};

Card.propTypes = {
  Author: PropTypes.string,
  id: PropTypes.number,
  Name: PropTypes.string,
  rating: PropTypes.number,
  scheme: PropTypes.string,
};
export default Card;
