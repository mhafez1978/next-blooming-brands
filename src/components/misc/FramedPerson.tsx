import "./FramedPerson.css";

const FramedPerson = () => {
  return (
    <>
      <section className="w-[100vw] bg-slate-800">
        <div className="min-h-[60vh] text-white">
          <div className="guy-image-container">
            <img
              className="shape vector"
              src="https://raw.githubusercontent.com/Moamal-2000/images/15544c5f489023b8c871801240bcff0fa435be65/vector-icon.svg"
              alt="vector shape"
            />
            <img
              className="shape circles"
              src="https://raw.githubusercontent.com/Moamal-2000/images/15544c5f489023b8c871801240bcff0fa435be65/group-icon.svg"
              alt="circles shape"
            />
            <img
              className="shape triangle"
              src="https://raw.githubusercontent.com/Moamal-2000/images/15544c5f489023b8c871801240bcff0fa435be65/group-icon2.svg"
              alt="triangle shape"
            />
            <img
              className="shape plus-sign"
              src="https://raw.githubusercontent.com/Moamal-2000/images/15544c5f489023b8c871801240bcff0fa435be65/plus-sign-icon.svg"
              alt="plus sign shape"
            />

            <div className="background-square-frame"></div>
            <div className="invisible-holder">
              <div className="square-frame">
                <img
                  src="https://raw.githubusercontent.com/Moamal-2000/images/main/young-guy.png"
                  alt="young guy with yellow T-shirt"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FramedPerson;
