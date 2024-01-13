import "./Featured.scss";

function Featured() {
  return (
    <section className="featured">
      <div className="content">
        <h1>
          Find the perfect <span>freelance</span> services for your business
        </h1>

        <div className="search">
          <input
            style={{ width: "50%", borderRadius: "5px 0 0 5px" }}
            type="text"
            placeholder='Try "building mobile app"'
          />
          <button style={{ borderRadius: "0 5px 5px 0" }}>Search</button>
        </div>

        <div className="popular">
          <span>Popular:</span>
          <button>Web Design</button>
          <button>WordPress</button>
          <button>Logo Design</button>
          <button>AI Services</button>
        </div>
      </div>
    </section>
  );
}

export default Featured;