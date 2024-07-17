// app/components/Services.js
export default function Services() {
    return (
      <section className="services" id="services">
        <div className="main-text">
          <h2 className="heading">Why Join Us?</h2>
          <span>Well, Because we offer you :</span>
        </div>
        <div className="services-content">
          <div className="box">
            <i className="fas fa-solid fa-brain"></i>
            <h3>Learning</h3>
            <p>Robotics, Graphic Designing, Programming, etc.</p>
          </div>
          <div className="box">
            <i className="fas fa-solid fa-gears"></i>
            <h3>Project Making</h3>
            <p>Artificial Intelligence, Machine Learning, Project Management, etc.</p>
          </div>
          <div className="box">
            <i className="fas fa-regular fa-star"></i>
            <h3>Competitions</h3>
            <p>National & International Robotics Competition</p>
          </div>
        </div>
      </section>
    );
  }
  