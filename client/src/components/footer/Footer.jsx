import "./Footer.scss";

const icons = [
  "/img/facebook.png",
  "/img/linkedin.png",
  "/img/pinterest.png",
  "/img/instagram.png"
]

function Footer() {

  return (
    <div className="footer">
      <ul className="left">
        <li>
          <div className="logo">
            fiverr<span className="rights-reserved">&#174;</span>
          </div>
        </li>
        <li className="copyright">© Fiverr International Ltd. 2023</li>
      </ul>

      <ul className="right">
        {icons.map(icon =>
          <li>
            <img
              src={icon}
              alt={icon.slice(5).slice(-1 * icon.length, -4) + " icon"} />
          </li>)}

        <li className="link">
          <img src="/img/language.png" alt="" />
          <span>English</span>
        </li>
      </ul>

    </div>
  );
}

export default Footer;