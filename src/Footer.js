import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
  return (
    <div className="footer">
      <div className="menufooter">
        <div className="footerbox">
          <h2>Support</h2>
          <a href="">
            <h4>Help centre</h4>
          </a>
          <a href="">
            <h4>AirCover</h4>
          </a>
          <a href="">
            <h4>Anti-discrimination</h4>
          </a>
          <a href="">
            <h4>Disability support</h4>
          </a>
          <a href="">
            <h4>Cancellation options</h4>
          </a>
          <a href="">
            <h4>Report neighbourhood concern</h4>
          </a>
        </div>
        <div className="footerbox">
          <h2>Hosting</h2>
          <a href="">
            <h4>Newsroom</h4>
          </a>
          <a href="">
            <h4>Newsroom</h4>
          </a>
          <a href="">
            <h4>Newsroom</h4>
          </a>
          <a href="">
            <h4>Newsroom</h4>
          </a>
          <a href="">
            <h4>Newsroom</h4>
          </a>
          <a href="">
            <h4>Newsroom</h4>
          </a>
        </div>
        <div className="footerbox">
          <h2>Airbnb</h2>
          <a href="">
            <h4>Airbnb your home</h4>
          </a>
          <a href="">
            <h4>AirCover</h4>
          </a>
          <a href="">
            <h4>Anti-discrimination</h4>
          </a>
          <a href="">
            <h4>Disability support</h4>
          </a>
          <a href="">
            <h4>Cancellation options</h4>
          </a>
          <a href="">
            <h4>Report neighbourhood concern</h4>
          </a>
        </div>
      </div>
      <div className="copyright">
        <div className="terms">
          {/* <CopyrightIcon/>  */}
          <p>© 2023 Airbnb, Inc.·PrivacyTermsSitemapCompany details</p>
        </div>
        <div className="social">
          <div className="currency">
            <CurrencyRupeeIcon />
            <span>INR</span>
          </div>
          <div className="lang">
            <LanguageIcon />
            <span>English(IN)</span>
          </div>

          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
