import logoMomo from "../../assets/logo.svg";
import profilePic from "../../assets/profile-pic.jpg";
import "./Header.scss";
function Header() {
  return (
    <header className="head">
      <img
        className="logo"
        src={logoMomo}
        alt="logo"
      />
      <div className="welcome-text">
        <p className="welcome">Bienvenida</p>
        <p className="store">Tienda 1</p>
      </div>
      <img
        className="profile-pic"
        src={profilePic}
        alt="logo"
      />
    </header>
  );
}
export default Header;
