import {Link} from "react-scroll"                  

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo">
        <h2>Tanmoy</h2>
      </div>
      <div className="nav-options">
        <ul className="nav-links">
          {['Home','About','Education','Skills','Portfolio','Experience','Achievements','Media'].map((item)=>(
            <li key={item}>
              <Link to={item} smooth={true} duration={500} offset={-200} className="nav-link">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
