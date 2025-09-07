import Blogdetailcard from "../components/Blogdetailcard";
import Blogslideranddetail2rowcard from "../components/Blogslideranddetail2rowcard";

const Blogdetail = () => {
  return (
    <section className="p-20 flex flex-col lg:flex-row gap-3 lg:items-start justify-center">
       <Blogdetailcard />
       <Blogslideranddetail2rowcard />
    </section>
  )
}

export default Blogdetail;