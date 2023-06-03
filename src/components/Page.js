import React from "react";
import "./Page.css";

function Page() {
  return (
    <>
       <div class="nav-container">
  

  <nav id='navbar'>
<ul>
<li><a href="#Section-1">Home</a></li>
<li><a href="#Section-2">Services</a></li>
<li><a href="#Section-3">About us</a></li>
<li><a href="#Section-4">Nutrients</a></li>
<li><a href="#Section-5">Contact</a></li>
</ul>
</nav>
</div>
      <div className="hero">
        <header>
          <span className="image-clickable">
            <a href="/">
              <img
                src={require("../images/logo.png")}
                alt="main-logo"
                className="logo"
              />
            </a>
          </span>
       
          <a href="login.html">
            <button>LOGIN</button>
          </a>
        </header>

        <div className="info">
          <h2 id="Section-1"></h2>
          <h1>
            Taking <span id="s">care</span> <br />
            for your smart <br />
            <span id="s">pets!</span>
          </h1>
          {/*  <p>Welcome to my official Portfolio Website Where I put all my work<br/>related to my design and many more.</p> -->
                 <a href="https://pdf.ac/1mksNr" target="_blank">Download CV</a>  */}
        </div>

        <div className="img-box">
          <img src={require("../images/img24.png")} className="back-img" />
          <img src={require("../images/dog1.png")} className="man-img" />
        </div>
        <div id="Services-Section"></div>
        <h2 id="Section-2"></h2>
        <div id="outer">
          <h1
            style={{
              marginLeft: "3%",
              fontSize: "40px",
              fontFamily: "Comic Sans MS",
            }}
          >
            <span style={{ borderBottom: "2px dotted black" }}>Services</span>
            <span className="l">Category</span>
          </h1>

          <div className="services">
            <h2 id ="Section-2"></h2>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={require("../images/img1.png")}
                    alt="Avatar"
                    className="i"
                  />
                </div>

                <div className="flip-card-back">
                  <h1> Training</h1>
                  {/*  <p>Architect & Engineer</p>
                            <p>We love that guy</p> */}
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={require("../images/img2.jpg")}
                    alt="Avatar"
                    className="i"
                  />
                </div>

                <div className="flip-card-back">
                  <h1>Boarding</h1>
                  {/* <p>Architect & Engineer</p>
                            <p>We love that guy</p> */}
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={require("../images/img3.jpg")}
                    alt="Avatar"
                    className="i"
                  />
                </div>

                <div className="flip-card-back">
                  <h1>HealthCare</h1>
                  {/* <p>Architect & Engineer</p>
                            <p>We love that guy</p>  */}
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={require("../images/img7.jpg")}
                    alt="Avatar"
                    className="i"
                  />
                </div>

                <div className="flip-card-back">
                  <h1>Grooming</h1>
                  {/* <p>Architect & Engineer</p>
                            <p>We love that guy</p>  */}
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={require("../images/img8.jpg")}
                    alt="Avatar"
                    className="i"
                  />
                </div>

                <div className="flip-card-back">
                  <h1>DayCare</h1>
                  {/* <p>Architect & Engineer</p>
                            <p>We love that guy</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="texxt">
          <div>
            <img src={require("../images/nextlogo.png")} />
          </div>

          <div>
            <h2>
              Pets Do Speak,But Only To
              <br /> Those Who Know How To
              <br /> <span className="l">Listen.</span>
            </h2>
            <p>
              {" "}
              I can tell you that pets communicate with humans and other animals
              in a variety of ways, including body language, vocalizations, and
              behavioral cues. However, understanding and interpreting these
              signals requires knowledge and experience with animal behavior.
              For example, a dog may wag its tail to indicate happiness,
              excitement, or playfulness, while a cat may arch its back and hiss
              to show fear or aggression. Similarly, birds may chirp, squawk, or
              mimic sounds to communicate with their owners or other birds.
              Therefore, it is important for pet owners and animal lovers to
              learn about their pets' behavior and language to better understand
              their needs, emotions, and desires. By doing so, they can develop
              a deeper bond and form a more meaningful relationship with their
              furry, feathered, or scaled friends.{" "}
            </p>
            <br />
            <br />
            <button id="btn">Explore More </button>
          </div>
        </div>

        <div className="teext">
        <h2 id="Section-3"></h2>
          <div>
            <h1>
              About{" "}
              <span
                classNameName="l"
                style={{ borderBottom: "2px dotted black" }}
              >
                Us
              </span>
            </h1>
            <h3>The main MISSION</h3>
            <p>
              is to help pet owners provide the best care possible for their
              pets, whether it's through informative articles, helpful tips and
              tricks, or quality products. We understand the importance of pets
              in our lives, and we believe that every pet deserves the best
              possible care. That's why we offer a range of services and
              resources to help you care for your pet, from nutrition advice to
              training tips. Our team includes experienced veterinarians, animal
              behaviorists, and pet experts who are dedicated to providing the
              best possible care for your pet. We are always learning and
              staying up-to-date on the latest research and techniques to ensure
              that we provide the most effective care possible. At our pet care
              website, we believe that pets are family, and we treat them as
              such. We are committed to providing a safe and welcoming
              environment for pets and their owners alike, and we are always
              here to answer your questions and provide guidance whenever you
              need it. Thank you for choosing our pet care website. We look
              forward to helping you provide the best possible care for your
              furry friend!
            </p>
            <br></br>
            <p>
              Thank you for choosing our pet care website. We look forward to
              helping you provide the best possible care for your furry friend!
            </p>
            <br />
            <button className="bn">Explore More </button>
          </div>
          

          <div>
            <img src={require("../images/img211.png")} />
          </div>
        </div>

        <div
          style={{ backgroundColor: "rgb(219, 231, 254)", marginTop: "-50px" }}
        >
          <h1
            style={{
              marginLeft: " 3%",
              fontSize: "40px",
              fontFamily: "ComicSans MS",
            }}

          >
            
            
            <h2 id="Section-4"></h2>
            <br />
            <span style={{ borderBottom: "2px dotted black" }}>
              Pets Nutrients & Food.
            </span>
            <br />
            <span className="l">25% Off All Products.</span>
          </h1>

          <div className="ba">
            <div className="card">
              <div className="ib">
                <img
                  src={require("../images/img27.png")}
                  alt="mouse corsair"
                  className="mouse"
                />
              </div>

              <div className="contentBox">
                <h3>Dog Toy</h3>
                <h2 className="price">158 ₹</h2>
                <a
                  href="https://www.amazon.in/Dogs-Company-Natural-Rubber-Spiked/dp/B07CP6Z443/ref=sr_1_10?crid=28FW2L0LQUFMZ&keywords=dog+toys&qid=1683175636&sprefix=dog+toys%2Caps%2C260&sr=8-10"
                  className="buy"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="card">
              <div className="ib">
                <img
                  src={require("../images/img22.png")}
                  alt="mouse corsair"
                  className="mouse"
                />
              </div>

              <div className="contentBox">
                <h3>Vital Pedigree</h3>
                <h2 className="price">300 ₹</h2>
                <a
                  href="https://www.amazon.in/Pedigree-Adult-Food-Meat-Rice/dp/B0BQRQMHD1/ref=sr_1_5?crid=QAO1OJOF8ZZE&keywords=vital+pedigree&qid=1683175790&sprefix=vital+pedigree%2Caps%2C247&sr=8-5"
                  className="buy"
                >
                  Buy Now
                </a>
              </div>
            </div>

            <div className="card">
              <div className="ib">
                <img
                  src={require("../images/img26.png")}
                  alt="mouse corsair"
                  className="mouse"
                />
              </div>

              <div className="contentBox">
                <h3>DentaStick Pedigree</h3>
                <h2 className="price">150 ₹</h2>
                <a
                  href="https://www.amazon.in/Pedigree-Dentastix-Medium-10-25kg-Monthly/dp/B01BBXRK7K/ref=sr_1_5?crid=3E852AKJ1Y94X&keywords=pedigree+dentastix&qid=1683175891&rdc=1&sprefix=Denta+pedigree%2Caps%2C390&sr=8-5"
                  className="buy"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer>
        <h2 id="Section-5"></h2>
          <h1 style={{ textAlign: "center", fontSize: "50px" }}>JOIN US</h1>
          <div className="row primary">
            <div
              className="columnAbout"
              style={{ marginTop: "50px", color: "black" }}
            >
              <h3>Connect</h3>
              <p>
                <i className="fa fa-map-marker" aria-hidden="true"></i>prasanjit chetri
               <br />
                6383677118
                <br />
                E-299, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar,
                Punjab 160055
              </p>
              <div className="social">
                <i className="fa fa-facebook-square"></i>
                <i className="fa fa-twitter-square"></i>
                <i className="fa fa-linkedin-square"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>

            <div className="column link" style={{ marginTop: "50px" }}>
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100072654647407&mibextid=ZbWKwL">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/prasan_jit___?igshid=ZDdkNTZiNTM=">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/prasanjit-chetri-365107233">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="column subscribe" style={{ marginTop: "50px" }}>
              <h3>Suggestions</h3>
              <div>
                <input type="email" placeholder="Your email id here" />
                <button
                  style={{
                    backgroundColor: "/008CBA",
                    padding: "16px 32px",
                    textAlign: "center",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: "bold",
                    margin: " 4px 2px",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="row copyright">
            <div className="footer-menu">
              <a href="">Home</a>
              <a href="">F.A.Q</a>
              <a href="">Cookies Policy</a>
              <a href="">Terms Of Service</a>
              <a href="">Support</a>
            </div>
            <p>Copyright &copy; 2022</p>
          </div>
        </footer>
      </div>
      {/* <Login/> */}
    </>
  );
}

export default Page;
