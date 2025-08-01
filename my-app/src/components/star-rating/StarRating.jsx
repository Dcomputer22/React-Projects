import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './StarRating.scss';

const StarRating = ({noOfStars = 5}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
        
    }

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    }

    const handleMouseLeave = (getCurrentIndex) => {
        setHover(rating);
    }


  return (
    <div className={"star-rating-wrapper"}>
        {
            [...Array(noOfStars)].map((_, index) => {
                index ++;

                return <FaStar 
                key={index}
                className={index <= (hover || rating) ? "active" : "inactive"}
                onClick={() => handleClick(index) }
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}
                />
            })
        }
    </div>
  )
}

export default StarRating