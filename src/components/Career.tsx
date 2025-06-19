import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Lead</h4>
                <h5>WEB APPS CLUB</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
           I handle the team and manage the projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CO - LEADER</h4>
                <h5>WEB APPS CLUB</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            I handle the club and manage the projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Zidio Development</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            I work as an intern and learn new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
