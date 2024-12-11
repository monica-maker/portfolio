import "/src/components/styles/portfolios.css";
import "/src/components/styles/testimonial.css";
import "/src/components/styles/footer.css";
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';

export default function Details() {
  return (
    <>
      <div className="service">
        <h1>Portfolios.</h1>
        <p className="a">Click on my card to see my portfolios of related category.</p>
      </div>

      <div className="detail_cards">
        <div className="card">
          <img src="/src/components/assets/figma-min.png" alt="" />
          <h4>UI/UX Designing</h4>
          <p>We are providing stunning designs for your UI/UX project. We can handle any project related to landing page designs, e-commerce design, business website, and many more as per your requirement.</p>
        </div>
        <div className="card">
          <ViewInArSharpIcon/>
          <h4>Graphic Designing</h4>
          <p>We are providing stunning designs for your UI/UX project. We can handle any project related to landing page designs, e-commerce design, business website, and many more as per your requirement.</p>
        </div>
        <div className="card">
          <ArrowForwardIosSharpIcon/><MinimizeSharpIcon/>
          <h4>Web Development</h4>
          <p>We are providing stunning designs for your UI/UX project. We can handle any project related to landing page designs, e-commerce design, business website, and many more as per your requirement.</p>
        </div>
        <div className="card">
          <img src="/src/components/assets/insta-min.png" alt="" />
          <h4>Social Media Post Designing.</h4>
          <p>We are providing stunning designs for your UI/UX project. We can handle any project related to landing page designs, e-commerce design, business website, and many more as per your requirement.</p>
        </div>
        <div className="card">
          <PhoneAndroidSharpIcon/>
          <h4>Mobile App UI/UX</h4>
          <p>We are providing stunning designs for your UI/UX project. We can handle any project related to landing page designs, e-commerce design, business website, and many more as per your requirement.</p>
        </div>
        <div className="card">
          <h4>Want your stunning designs</h4>
          <p>We are providing stunning designs for your UI/UX project. We can handle any project related to landing page designs, e-commerce design, business website, and many more as per your requirement.</p>
          <button className="b1">Let's Talk</button>
        </div>
      </div>

      <div className="testimonials">
        <div className="testimonial">
          <div className="circle"></div>
          <p className="name">Vaseem Aziz</p>
          <p className="quote">
            This young man is a great designer. Second time I am working with him.
            He will be very pleased with the outcome. He also works very hard and
            listens to clients - I have been picky at times and he made the
            appropriate amendments. All the best Kazim.
          </p>
        </div>

        <div className="testimonial">
          <div className="circle"></div>
          <p className="name">Vaseem Aziz</p>
          <p className="quote">
            Very Hard worker. Listens and understands clients needs. Uses his own
            initiative to get the job done. Well done.
          </p>
        </div>

        <div className="testimonial">
          <div className="circle"></div>
          <p className="name">Qasim Ahmad</p>
          <p className="quote">
            Kazim has been my go-to graphic designer for a few months now and I am
            always satisfied with his work. He is very professional, quick to
            respond, and always delivers high-quality graphics. I highly recommend him!
          </p>
        </div>
      </div>

      <div className="footer">
            <div>
                <h1>MDee</h1>
            </div>

            <div className="links">
                    <div>
                    <img src="/src/components/assets/goggle.png" alt="" />
                    <a href="#">monicadavid176@gmail.com</a>
                </div>
                <div>
                    <img src="/src/components/assets/linkedin.png" alt="" />
                    <a href="#">https://bit.ly/3St3BWn</a>
                </div>
                <div>
                    <img src="/src/components/assets/instagram-new.png" alt="" />
                    <a href="#">https://www.instagram.com/monica_dee/</a>
                </div>
                <div>
                    <img src="/src/components/assets/facebook2.png" alt="" />
                    <a href="#">https://www.facebook.com/monica_dee/</a>
                </div>
            </div>
      </div>
    </>
  );
}
