import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> leadership
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Dronacharya College of Engineering</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Graduated in 2026. Studied Data Structures & Algorithms,
              Object-Oriented Programming, DBMS, Operating Systems, Computer
              Networks, Software Engineering, and Web Development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Peer Mentor</h4>
                <h5>Leadership & Activities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Contributed to peer code reviews and collaborative full-stack
              development sessions. Helped peers understand system design, REST
              API development, and deployment practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
