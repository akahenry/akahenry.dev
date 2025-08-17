import heroImageUrl from "../../../assets/hero.svg";
import "./index.css";

export default function HeroSection() {
  return (
    <div className="hero">
      <img src={heroImageUrl} />
      <div className="description">
        <text>ABC</text>
      </div>
    </div>);
}
