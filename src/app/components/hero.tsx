import '../styles/hero.css';
import Image from "next/image"
const hero = () => {
    return(
        <div className="hero">
<div className="picture">
    {/*Left Side*/}
<Image src="/ms.jpg"
alt="Loading Image"
height={300}
width={300}
/>
</div>
<div className="hero-right">
    {/*Right Side*/}
    <h1>I am Muhammad Shaheryar</h1>
       <h2>full stack Developer</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia ut architecto impedit sit hic enim possimus ducimus facere omnis dignissimos, illum consequatur, iure voluptatum libero vitae quasi, voluptas neque.</p>
    <button className="button">Hire Me</button>
</div>
</div>
    )
}
export default hero
