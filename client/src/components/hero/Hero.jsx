import "./_hero.scss";
import HeroSearch from "../heroSearch/HeroSearch";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero-container">
        <aside className="hero-links">
          <figure className="hero-link">
            <span className="fa-solid fa-bed hero-icon"></span>
            <figcaption>Stays</figcaption>
          </figure>
          <figure className="hero-link">
            <span className="fa-solid fa-plane hero-icon"></span>
            <figcaption>Flights</figcaption>
          </figure>
          <figure className="hero-link">
            <span className="fa-solid fa-car hero-icon"></span>
            <figcaption>Car Rentals</figcaption>
          </figure>
          <figure className="hero-link">
            <span className="fa-solid fa-person-hiking hero-icon"></span>
            <figcaption>Attractions</figcaption>
          </figure>
          <figure className="hero-link">
            <span className="fa-solid fa-taxi hero-icon"></span>
            <figcaption>Airport Taxis</figcaption>
          </figure>
        </aside>
        <h1>A lifetime of discounts? It's genius</h1>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button>Sign in / Register</button>
        <HeroSearch />
      </article>
    </section>
  );
};

export default Hero;
