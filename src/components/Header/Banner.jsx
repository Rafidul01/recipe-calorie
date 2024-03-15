import bannerImg from "../../images/banner-img.jpg"
const Banner = () => {
    return(
        
        <div className="hero min-h-screen rounded-[24px] mb-[100px]" style={{backgroundImage: `linear-gradient(0deg,rgba(21, 11, 43, 0.90) 0%,rgba(21, 11, 43, 0.00) 100%),url(${bannerImg});`}}>
  <div className="hero-content text-center text-neutral-content">
    <div className="lg:max-w-[897px] space-x-4">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      <button className="btn rounded-[50px] text-[#150B2B] text-[20px] font-bold bg-[#0BE58A] border-none">Explore Now</button>
      <button className="border btn rounded-[50px] text-white bg-transparent font-bold text-[20px]">Our Feedback</button>
    </div>
  </div>
</div>
    )
}
export default Banner;