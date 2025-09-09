import TourCard from "../Component/TourCard"
import cardpics from '../assets/cardpics.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import card6 from '../assets/card6.png'
import card7 from '../assets/card7.png'
import card8 from '../assets/card8.png'
import card9 from '../assets/card9.png'
import RightCards from "../Component/TourCategoryCard"
import GlobalHeader from "../Components/GlobalHeader"
const TourPage = () => {
       return (
       <div>
       <GlobalHeader headerTitle="Tour" headerLink="Tour"/>
       <section className="lg:px-8 px-3 m-0 mt-2">
       <div className="flex gap-5">
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5  py-2 w-full'>
              <article>
                     <TourCard 
                            location="BROOKLYN NY"
                            cardpics={cardpics} 
                            people="50+" 
                            duration="10 Days"
                            resorts="Brooklyn Beach Resort Tour"
                            button="Book Now"
                            price="$59.00"
                            days="/Per Day"
                            rating="4.7"
                     />
              </article>
              <article>
                     <TourCard 
                            location="CLEVELAND OH"
                            cardpics={card2} 
                            people="50+" 
                            duration="10 Days"
                            resorts="Cleveland Beach Resort Tour"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article>
                     <TourCard 
                            location="SACRAMENTO CA"
                            cardpics={card3} 
                            people="50+" 
                            duration="10 Days"
                            resorts="California Beach Resort Tour"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article >
                     <TourCard 
                            location="LONDON UK"
                            cardpics={card4} 
                            people="50+" 
                            duration="10 Days"
                            resorts="London Chumphon Town Tour "
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article >
                     <TourCard 
                            location="NORWOOD MA"
                            cardpics={card5} 
                            people="50+" 
                            duration="10 Days"
                            resorts="Places to Visit in Norwood"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article >
                     <TourCard 
                            location="PERTH AU"
                            cardpics={card6} 
                            people="50+" 
                            duration="10 Days"
                            resorts="Perth Beach Resort Tour"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article>
                     <TourCard 
                            location="AMSTERDAM ND"
                            cardpics={card7} 
                            people="50+" 
                            duration="10 Days"
                            resorts="Amsterdam Beach Resort Tour"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article >
                     <TourCard 
                            location="PARIS FR"
                            cardpics={card8} 
                            people="50+" 
                            duration="10 Days"
                            resorts="Beach Resort Tour In Paris"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article>
                     <TourCard 
                            location="TORONTO CA"
                            cardpics={card9} 
                            people="50+" 
                            duration="10 Days"
                            resorts="Toronto Beach Resort Tour"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
       </div>
       <RightCards/>
       </div>
       </section>
       </div>
       )
}
 export default TourPage
