import './header.css';
import logoImg from '../images/punit1.png';
export default function Header() {
    return (
        <nav className="nav">
            <img src={logoImg} alt="punit" className="logo-img" />
            <ul className="nav-items">
                <li>About</li>
            </ul>
        </nav>
    );
}


