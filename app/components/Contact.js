// app/components/Contact.js
export default function Contact() {
    return (
      <section className="contact" id="contact">
        <div className="main-text">
          <h2 className="heading">Our Stats</h2>
          <span>We believe in numbers :</span>
        </div>
        <div className="contact-content">
          <div className="box">
            <i className="bx bxs-user"></i>
            <div className="contact-info">
              <h3>500+</h3>
              <span>Members</span>
            </div>
          </div>
          <div className="box">
            <i className="bx bx-trophy"></i>
            <div className="contact-info">
              <h3>15</h3>
              <span>Awards</span>
            </div>
          </div>
          <div className="box">
            <i className="bx bx-shield"></i>
            <div className="contact-info">
              <h3>150+</h3>
              <span>Events Held</span>
            </div>
          </div>
          <div className="box">
            <i className="bx bx-bot"></i>
            <div className="contact-info">
              <h3>50+</h3>
              <span>Projects</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  