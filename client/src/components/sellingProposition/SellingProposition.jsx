import "./sellingProposition.scss"

const data = [
  {
    heading: "The best for every budget",
    desc: "Find high-quality services at every price point. No hourly rates, just project-based pricing."
  },
  {
    heading: "Quality work done quickly",
    desc: "Find the right freelancer to begin working on your project within minutes."
  },
  {
    heading: "Protected payments, every time",
    desc: "Always know what you'll pay upfront. Your payment isn't released until you approve the work."
  },
  {
    heading: "24/7 support",
    desc: "Our round-the-clock support team is available to help anytime, anywhere."
  }
]


const SellingProposition = () => {
  return (
    <section className="container">
      <ul>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>A whole world of freelance talent at your fingertips</h2>

        {data.map(item =>
          <li style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <span>
                <svg style={{fill: "#62646a"}} width="25" height="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>
              </span>
              <h3>{item.heading}</h3>
            </div>
            <p style={{ color: "#62646a" }}>{item.desc}</p>
          </li>
        )}
      </ul>
      {/* <div> */}
        <img alt="Video Thumbnail" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" />
      {/* </div> */}
    </section>
  )
}


export default SellingProposition;