
import { BsChevronDoubleRight } from "react-icons/bs";
import ActivitiesPageCard from "../Components/ActivitiesPageCard";
import GlobalHeader from "../Components/GlobalHeader";

function ActivitiesPage () {
  return (
    <div>
      <GlobalHeader headerTitle="Activities" headerLink="Activities"/>
        <section className='my-20'>
            <div className="flex justify-center">
                <div className='lg:px-8 px-3 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/01.jpg" activitiesCardTrip="5 Trips" activitiesCardTitle="Califonia"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/01.jpg" activitiesCardTrip="5 Trips" activitiesCardTitle="Califonia"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/01.jpg" activitiesCardTrip="5 Trips" activitiesCardTitle="Califonia"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/01.jpg" activitiesCardTrip="5 Trips" activitiesCardTitle="Califonia"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/01.jpg" activitiesCardTrip="5 Trips" activitiesCardTitle="Califonia"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/01.jpg" activitiesCardTrip="5 Trips" activitiesCardTitle="Califonia"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/01.jpg" activitiesCardTrip="5 Trips" activitiesCardTitle="Califonia"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/01.jpg" activitiesCardTrip="5 Trips" activitiesCardTitle="Califonia"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/01.jpg" activitiesCardTrip="5 Trips" activitiesCardTitle="Califonia"/>                 
                </div>
            </div>
        </section>
    </div>
  )
}

export default ActivitiesPage