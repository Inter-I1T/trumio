import React from 'react';
import { BidNavbar, BidderList, Project } from '../components/bidderPage';
import { useLocation } from 'react-router-dom';

const Bidder = () => {
  const location = useLocation();
  const { state } = location
  console.log(state)
  return (
    <>
      {/* <BidNavbar /> */}
      <div className='pt-20 bg-gray-100'>
        <Project data={state.project} />
        <div className='mx-16 flex gap-5'>
          {state.bidder.map((bidder, index) => (
            <BidderList key={index} data={bidder} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Bidder;