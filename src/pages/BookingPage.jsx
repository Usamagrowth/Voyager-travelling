import React from 'react'
import GlobalHeader from '../Components/GlobalHeader'
import FlightBooking from '../Components/FlightBooking'
import FooterSection from '../Components/FooterSection'

const BookingPage = () => {
  return (
    <div>
        <GlobalHeader headerTitle="Flight Bookings" headerLink="Booking Page"/>
        <FlightBooking/>
        <div className='mt-20'>
        <FooterSection/>
        </div>
    </div>
  )
}

export default BookingPage