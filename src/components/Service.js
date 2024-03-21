import { Fragment, useState, useEffect } from "react";
import ServicePopup from "./popup/ServicePopup";

const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then(response => response.json())
      .then(data => setServices(data.user.services))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {services.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={service._id}
                  >
                    <div className="list_inner">
                      <img className="svg" src={service.image.url} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">{service.desc}</p>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src={service.image.url}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
