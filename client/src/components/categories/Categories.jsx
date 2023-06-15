import "./categories.scss";

const data = [
  {
    categoryName: "Graphics & Design",
    categoryIcon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
  },
  {
    categoryName: "Digital Marketing",
    categoryIcon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
  },
  {
    categoryName: "Writing & Translation",
    categoryIcon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
  },
  {
    categoryName: "Video & Animation",
    categoryIcon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
  },
  {
    categoryName: "Music & Audio",
    categoryIcon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
  },
  {
    categoryName: "Programming & Tech",
    categoryIcon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
  },
  {
    categoryName: "Business",
    categoryIcon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
  },
  {
    categoryName: "Lifestyle",
    categoryIcon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg",
  },
  {
    categoryName: "Data",
    categoryIcon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
  },
  {
    categoryName: "Photography",
    categoryIcon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
  }
]

const Categories = () => {
  return (
    <section className="categories">
      <h1>Explore the marketplace</h1>
      <ul>
        {data.map(item =>
          <li>
            <a href="">
              <img src={item.categoryIcon} alt={item.categoryName} />
              <p>{item.categoryName}</p>
            </a>
          </li>)}
      </ul>
    </section>
  )
}

export default Categories;