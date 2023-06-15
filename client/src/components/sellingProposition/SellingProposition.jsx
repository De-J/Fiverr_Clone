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
    <ul className="selling-proposition">
      <h1>A whole world of freelance talent at your fingertips</h1>
      {data.map(item =>
        <li>
          <h3>
            <span>
              <img src="./img/check.png" alt="" />
            </span>
            {item.heading}
          </h3>
          <p>{item.desc}</p>
        </li>
      )}
    </ul>
  )
}


export default SellingProposition;