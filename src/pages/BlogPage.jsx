import Blogcards from "../components/Blogcards";
import GlobalHeader from "../Components/GlobalHeader";
const BlogPage = () => {
  return (
    <div>
      <GlobalHeader headerTitle="Blog" headerLink="Blog"/>
    
    <section className="flex flex-wrap items-center justify-center">
        <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/08.jpg"
        blogdetails="The Surfing man Will Blow Your Mind"
        />
         <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/09.jpg"
        blogdetails="Supervisor Disapproved Of Latest Work"
        />
         <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/10.jpg"
        blogdetails="Get Best Advertiser In Your Side Pocket"
        />
         <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/11.jpg"
        blogdetails="Get Best Advertiser In Your Side Pocket"
        />
        <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/12.jpg"
        blogdetails="Supervisor Disapproved Of Latest Work"
        />
          <Blogcards 
        blogimages="https://turmet-react.vercel.app/assets/img/news/13.jpg"
        blogdetails="Get Best Advertiser In Your Side Pocket"
        />
    </section>

    
    </div>
  )
}

export default BlogPage;