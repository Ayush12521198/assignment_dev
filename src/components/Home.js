import { useEffect, useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/1.jpg" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">Hello {`I'm`}</h3>
                {userData && (
                  <>
                    <h3 className="name">{userData.about.name}</h3>
                    <h3 className="job">{userData.about.title} from {userData.about.address}</h3>
                    <p className="text">{userData.about.description}</p>
                    <div className="buttons">
                      <div className="devman_tm_button">
                        <a className="anchor" href="#contact">Get a Quote</a>
                      </div>
                      <div className="simple_button">
                        <a className="anchor" href="#about">About Me</a>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {userData && (
                <>
                  <h3 className="stroke_1">{userData.about.name.split(' ')[0]}</h3>
                  <h3 className="stroke_2">{userData.about.name.split(' ')[1]}</h3>
                </>
              )}
            </div>
            <div className="right">
              <div className="image">
                {userData && (
                  <>
                    <img src="img/thumbs/53-61.jpg" alt="" />
                    <div className="main" data-img-url={userData.about.avatar.url} />
                    <div className="numbers year">
                      <div className="wrapper">
                        <h3>{userData.about.exp_year}</h3>
                        <span className="item_name">Years of<br />Success</span>
                      </div>
                    </div>
                    <div className="numbers project">
                      <div className="wrapper">
                        <h3>{userData.about.some_total}</h3>
                        <span className="extra">+</span>
                        <span className="item_name">Projects<br />Completed</span>
                      </div>
                    </div>
                    <span className="circle anim_circle">
                      <img src="img/hero/circle.png" alt="" />
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
