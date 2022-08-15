import "./styles.css";
export default function Social() {
  function github() {
    window.location.href = "https://github.com/PvitorDev";
  }
  function linkedin() {
    window.location.href = "https://www.linkedin.com/in/pvdev/";
  }
  function instagram() {
    window.location.href = "https://www.instagram.com/pvitor_dev/";
  }
  return (
    <div className="social-menu">
      <ul>
        <li onClick={() => linkedin()}>
          <i className="fab fa-linkedin-in"></i>
        </li>
        <li onClick={() => github()}>
          <i className="fab fa-github"></i>
        </li>
        <li onClick={() => instagram()}>
          <i className="fab fa-instagram"></i>
        </li>
      </ul>
    </div>
  );
}
