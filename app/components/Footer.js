// app/components/Footer.js
export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="box">
            <h3>Address</h3>
            <p>COMSATS University Islamabad, Lahore Campus.</p>
          </div>
          <div className="box">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:ieeerascui@mail.com">ieeerascui@mail.com</a></p>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <div className="social">
              <a href="https://www.instagram.com/ras.cui/" target="_blank"><i className="bx bxl-instagram"></i></a>
              <a href="https://www.facebook.com/rascuilhr/" target="_blank"><i className="bx bxl-facebook"></i></a>
              <a href="https://www.linkedin.com/company/rascui" target="_blank"><i className="bx bxl-linkedin"></i></a>
              <a href="https://chat.whatsapp.com/KXk9EqEww3z8qaYmBdy9DN" target="_blank"><i className="bx bxl-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 IEEE RAS. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
  