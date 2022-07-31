import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faBeer, faBowlFood, faBurger, faLocationDot, faMartiniGlass, faShirt, faTShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const About13 = (props) => {
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
              <p style={{ fontSize: '16px' }}>{props.data ? props.data.paragraph2 : "loading..."}</p>

              <div className="list-style" style={{ fontSize: '16px' }}>
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    <li style={{ paddingLeft: '3px' }}><FontAwesomeIcon icon={faCalendarAlt} /><span
                      style={{ marginLeft: '1rem', textDecoration: 'none', cursor: 'pointer' }}>
                      13 August, 2022
                    </span></li>
                    <li><FontAwesomeIcon icon={faShirt} /><span
                      style={{ marginLeft: '7px', textDecoration: 'none', cursor: 'pointer' }}>
                      Casual Attire
                    </span></li>
                    <li style={{ paddingLeft: '3px' }}><FontAwesomeIcon icon={faLocationDot} /><span
                      style={{ marginLeft: '1rem', textDecoration: 'none', cursor: 'pointer' }}>
                      Soul City Hub, 20 & 22, Jalan SS 4d/14, Ss 4
                    </span></li>
                    <li style={{ paddingLeft: '1px' }}><FontAwesomeIcon icon={faBurger} /><span
                      style={{ marginLeft: '1rem', textDecoration: 'none', cursor: 'pointer' }}>
                      Light Food
                    </span></li>
                    <li style={{ paddingLeft: '1px' }}><FontAwesomeIcon icon={faMartiniGlass} /><span
                      style={{ marginLeft: '1rem', textDecoration: 'none', cursor: 'pointer' }}>
                      BYOB. We have some drinks but the more the merrier
                    </span></li>
                  </ul>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15935.758103591907!2d101.598128!3d3.110703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d8b72057b88c0da!2sSoulCity%20Hub!5e0!3m2!1sen!2smy!4v1659286371142!5m2!1sen!2smy" style={{ border: "0", width: "100%", minHeight: '250px', marginTop: '1rem' }} className='paddingRight' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
