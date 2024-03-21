import { Fragment, useState, useEffect } from "react";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then(response => response.json())
      .then(data => setProjects(data.user.projects))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <Fragment>
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehen derit in voluptate
              </p>
            </div>
            <div className="portfolio_list">
              <ul>
                {projects.map(project => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={project._id}>
                    <div className="list_inner">
                      <div className="background_image" style={{ backgroundImage: `url(${project.image.url})` }} />
                      <div className="content">
                        <div className="details">
                          <span className="category">
                            <a href="#">{project.category}</a>
                          </span>
                          <h3 className="title">
                            <a href="#">{project.title}</a>
                          </h3>
                          <span className="view_project">
                            <a href="#">View Project <i className="icon-right-big" /></a>
                          </span>
                        </div>
                      </div>
                      <div className="overlay" />
                      <a className="devman_tm_full_link" href={project.liveurl || project.githuburl} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
