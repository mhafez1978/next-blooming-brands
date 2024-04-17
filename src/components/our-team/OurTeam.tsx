import "./OurTeam.css";

const OurTeam = () => {
  return (
    <>
      <section className="sectionz w-[100vw] min-h-[100vh]">
        <div className="pt-12 pb-32">
          <h2 className="text-7xl font-black text-black">Our Team</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
            praesentium veritatis voluptatibus ut consequuntur quas consequatur
            omnis id rem obcaecati.
          </p>
          <div className="cards">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Franklin Carlson"
              />
              <div className="card-content">
                <h3>franklin carlson</h3>
                <p>UX Designer</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Antonia Moore"
              />
              <div className="card-content">
                <h3>antonia moore</h3>
                <p>product designer</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Travis Lynch"
              />
              <div className="card-content">
                <h3>travis lynch</h3>
                <p>web developer</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
