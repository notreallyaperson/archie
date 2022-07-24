import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faShirt, faTShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/Archie-in-a-box.jpeg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About</h2>
              <p style={{ fontSize: '16px' }}>{props.data ? props.data.paragraph : "loading..."}</p>

              <div className="list-style" style={{ fontSize: '16px' }}>
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    <li style={{ paddingLeft: '3px' }}><FontAwesomeIcon icon={faCalendarAlt} /><span
                      href="https://goo.gl/maps/uqhoBe1xodFHCryk8"
                      style={{ marginLeft: '1rem', textDecoration: 'none', cursor: 'pointer' }}>
                      6 August, 2022
                    </span></li>
                    <li><FontAwesomeIcon icon={faShirt} /><span
                      style={{ marginLeft: '7px', textDecoration: 'none', cursor: 'pointer' }}>
                      Casual Attire
                    </span></li>
                    <li style={{ paddingLeft: '3px' }}><FontAwesomeIcon icon={faLocationDot} /><span
                      style={{ marginLeft: '1rem', textDecoration: 'none', cursor: 'pointer' }}>
                      132 Jalan Athinahapan 1
                    </span></li>
                  </ul>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.789331970486!2d101.62616571456068!3d3.1501990540251743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4927c904d099%3A0x65c46e5db403b196!2s132%2C%20Jalan%20Athinahapan%201%2C%20Taman%20Tun%20Dr%20Ismail%2C%2060000%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1658683988118!5m2!1sen!2smy"  style={{ border: "0", width: "100%", minHeight: '250px', marginTop: '1rem' }} className='paddingRight' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
