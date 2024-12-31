import Link from 'next/link';
import '../styles/navbar.css';
import Contact from '../about/page';
import About from '../about/page';
export default function Navbar() {
    return (
      <div className="head">
  <div >
    {/*Left Side*/}
  <div className="title"><h1>Muhammad Shaheryar</h1></div>
  <div className="navbar">
    {/*Right Side*/}
<ul className="navbar-link">
       <li><Link href="/contact">Contact</Link></li>
    <li><Link href="/about">About</Link></li>
</ul>    
  </div>
  </div>
  </div>
    )
  }