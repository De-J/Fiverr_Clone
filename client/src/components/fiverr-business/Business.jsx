import Logo from "../logo/Logo"
import "./business.scss";

const data = [
  "Connect to freelancers with proven business experience",
  "Get matched with the perfect talent by a customer success manager",
  "Manage teamwork and boost productivity with one powerful workspace"
]


const Business = () => {
  return (
    <section className="fiverr-business">
      <div className="text">
        <div className="heading">
          <Logo />
          <p style={{ fontSize: "1.5rem", whiteSpace: "nowrap" }}>Business Solutions</p>
        </div>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          Advanced solutions and professional talent for business
        </h2>
        <p>
          Upgrade to a curated experience packed with tools and benefits,
          dedicated to businesses
        </p>
        <ul style={{ paddingBottom: "2rem" }}>
          {data.map(item => (
            <li>
              <svg width="24" height="24" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="#B1ABFF"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.203.432a1.891 1.891 0 0 0-2.406 0l-1.113.912a1.904 1.904 0 0 1-.783.384l-1.395.318c-.88.2-1.503.997-1.5 1.915l.007 1.456c0 .299-.065.594-.194.863L.194 7.59a1.978 1.978 0 0 0 .535 2.388l1.12.903c.231.185.417.422.543.692l.615 1.314a1.908 1.908 0 0 0 2.166 1.063l1.392-.33c.286-.068.584-.068.87 0l1.392.33a1.908 1.908 0 0 0 2.166-1.063l.615-1.314c.126-.27.312-.507.542-.692l1.121-.903c.707-.57.93-1.563.535-2.388l-.625-1.309a1.983 1.983 0 0 1-.194-.863l.006-1.456a1.947 1.947 0 0 0-1.5-1.915L10.1 1.728a1.904 1.904 0 0 1-.784-.384L8.203.432Zm2.184 5.883a.742.742 0 0 0 0-1.036.71.71 0 0 0-1.018 0L6.565 8.135 5.095 6.73a.71.71 0 0 0-1.018.032.742.742 0 0 0 .032 1.036L6.088 9.69a.71.71 0 0 0 1.001-.016l3.297-3.359Z"></path></svg>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <button>Learn more</button>
      </div>
      <img className="image"
        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_2.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
        alt=""
      />

    </section>
  )
}

export default Business;