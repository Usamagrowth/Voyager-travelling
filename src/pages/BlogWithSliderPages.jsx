import Blogwithslidercard from "../components/Blogwithslidercard";
import img2 from "../assets/img3.jpg"
import img1 from "../assets/img4.jpg"
import img3 from "../assets/img2.jpg"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Blogslideranddetail2rowcard from "../components/Blogslideranddetail2rowcard";
import GlobalHeader from "../Components/GlobalHeader";
const BlogWithSliderPages = () => {
  return (
    <div>
      <GlobalHeader headerTitle="Blog Classic" headerLink="Blog Classic"/>
    
    <section className="flex  p-5 gap-[45px] lg:items-start justify-center">
   <div className="flex flex-col gap-5 items-center justify-center">
 <Blogwithslidercard
    blogsliderimages={img2}
   blogsliderheader="The Surfing man Will Blow Your Mind"
   blogslidertext="Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus
    in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. 
    Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero,
    mollis ac quam et, venenatis."
 />
  <Blogwithslidercard
    blogsliderimages={img3}
   blogsliderheader="The Surfing man Will Blow Your Mind"
   blogslidertext="Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus
    in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. 
    Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero,
    mollis ac quam et, venenatis."
 />
   <Blogwithslidercard
    blogsliderimages={img1}
   blogsliderheader="The Surfing man Will Blow Your Mind"
   blogslidertext="Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus
    in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. 
    Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero,
    mollis ac quam et, venenatis."
 />

  <span>
    <ul className="bg-gray-300 text-blue-500 font-bold flex cursor-pointer divide-x-4 items-center justify-center w-fit h-fit">
    <a href="" className="hover:bg-blue-500 hover:text-white p-3"><GrLinkPrevious /></a>
    <a href="#" className="hover:bg-blue-500 hover:text-white p-3">01</a>
    <a href="" className="hover:bg-blue-500 hover:text-white p-3">02</a>
    <a href="" className="hover:bg-blue-500 hover:text-white p-3">03</a>
    <a href="" className="hover:bg-blue-500 hover:text-white p-3"><GrLinkNext /></a>
   </ul>
  </span>
 </div>
   <Blogslideranddetail2rowcard />
   </section>
   </div>
  )
}

export default BlogWithSliderPages;