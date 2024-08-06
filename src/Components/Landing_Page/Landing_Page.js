import "./Landing_Page.css";

const Landing_Page = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health
          <br />
          Our Responsibility
        </h1>
        <p>
          Make an appointment with some great doctor easier. Only need a few
          clicks and you’re done.
        </p>
        <button className="hero-content_btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/images/doctor_landing.png" alt="Doctor" />
      </div>
    </section>
  );
};

export default Landing_Page;
