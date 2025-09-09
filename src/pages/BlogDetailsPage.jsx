import Blogdetailcard from "../components/Blogdetailcard";
import Blogslideranddetail2rowcard from "../components/Blogslideranddetail2rowcard";
import GlobalHeader from "../Components/GlobalHeader";

const BlogDetailsPage = () => {
  return (
    <div>
      <GlobalHeader headerTitle="Blog Details" headerLink="Blog Details"/>
    <section className="p-20 flex flex-col lg:flex-row gap-3 lg:items-start justify-center">
       <Blogdetailcard />
       <Blogslideranddetail2rowcard />
    </section>
    </div>
  )
}

export default BlogDetailsPage;