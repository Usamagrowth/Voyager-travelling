import Blogcards from "../components/Blogcards";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
const Blog = () => {
  return (
    <section className="flex flex-wrap items-center justify-center">
        <Blogcards 
        blogimages={img1}
        blogdetails="The Surfing man Will Blow Your Mind"
        />
         <Blogcards 
        blogimages={img2}
        blogdetails="Supervisor Disapproved Of Latest Work"
        />
         <Blogcards 
        blogimages={img3}
        blogdetails="Get Best Advertiser In Your Side Pocket"
        />
         <Blogcards 
        blogimages={img4}
        blogdetails="Get Best Advertiser In Your Side Pocket"
        />
        <Blogcards 
        blogimages={img5}
        blogdetails="Supervisor Disapproved Of Latest Work"
        />
          <Blogcards 
        blogimages={img6}
        blogdetails="Get Best Advertiser In Your Side Pocket"
        />
    </section>
  )
}

export default Blog;