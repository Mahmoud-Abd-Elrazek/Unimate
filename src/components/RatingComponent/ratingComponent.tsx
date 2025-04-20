import React from 'react';
import './ratingComponent.css'
import { IoPersonCircle } from "react-icons/io5";

interface RatingProps {
  rating: number;
  timeAgo: string;
}

const RatingComponent: React.FC<RatingProps> = ({ rating, timeAgo }) => {
  return (
    <div className='flex  w-full justify-between items-center px-1' dir='rtl'>
      <div className='flex'>
      <div className="">
      <IoPersonCircle className='w-10 h-10 '/>
      </div>
      <div>
      <h1 className='text-xl'>صاحب السكن 1</h1>
      <div style={styles.rating}>
        {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
      </div>
      <div>
        the comment
      </div>
      </div>
      </div>
      <div>
      <div className='w-20 h-10 rounded-xl MainColorBG text-white text-center flex justify-center items-center'>مضيف</div>
      <div style={styles.timeAgo}>{`منذ ${timeAgo}`}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 15px',
    cursor: 'pointer',
  },
  rating: {
    margin: '0 10px',
    fontSize: '18px',
    color: '#FFD700',
  },
  timeAgo: {
    color: 'gray',
  },
};

export default RatingComponent;