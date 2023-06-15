import "./business.scss";

const data = [
  "Connect to freelancers with proven business experience",
  "Get matched with the perfect talent by a customer success manager",
  "Manage teamwork and boost productivity with one powerful workspace"
]


const Business = () => {
  return (
    <section className="fiverr-business">
      <div className="item">
        <h1>
          Fiverr <i>business</i>
        </h1>
        <h1>
          A business solution designed for <i>teams</i>
        </h1>
        <p>
          Upgrade to a curated experience packed with tools and benefits,
          dedicated to businesses
        </p>
        {data.map(item => (
          <div>
            <img src="./img/check.png" alt="checkmark" />
            {item}
          </div>
        ))}
        <button>Explore Fiverr Business</button>
      </div>

      <div className="item">
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
          alt=""
        />
      </div>
    </section>
  )
}

export default Business;