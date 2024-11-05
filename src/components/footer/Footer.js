import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaXTwitter,
} from "react-icons/fa6";
import "./Footer.css";
function Footer() {
  const footerData = [
    {
      heading: "Info",
      data: [
        { label: "Courses", navigateTo: "" },
        { label: "Blogs", navigateTo: "" },
        { label: "Posts", navigateTo: "" },
        { label: "Research Paper", navigateTo: "" },
      ],
    },
    {
      heading: "Info",
      data: [
        { label: "Courses", navigateTo: "" },
        { label: "Blogs", navigateTo: "" },
        { label: "Posts", navigateTo: "" },
        { label: "Research Paper", navigateTo: "" },
      ],
    },
    {
      heading: "Info",
      data: [
        { label: "Courses", navigateTo: "" },
        { label: "Blogs", navigateTo: "" },
        { label: "Posts", navigateTo: "" },
        { label: "Research Paper", navigateTo: "" },
      ],
    },
    {
      heading: "Info",
      data: [
        { label: "Courses", navigateTo: "" },
        { label: "Blogs", navigateTo: "" },
        { label: "Posts", navigateTo: "" },
        { label: "Research Paper", navigateTo: "" },
      ],
    },
  ];
  const socialMediaLinks = [
    { label: "facebook", icon: FaFacebook },
    { label: "Instagram", icon: FaInstagram },
    { label: "LinkedIn", icon: FaLinkedinIn },
    { label: "Google", icon: FaGoogle },
    { label: "X", icon: FaXTwitter },
  ];

  const handleLinkForwarding = (name) => {
    alert(`${name} external link forwarding`);
  };

  return (
    <footer id="about" className="footer-container">
      <div className="footer__rowbox">
        {footerData?.map((item, index) => (
          <div key={index} className="footer__section">
            <h3>{item?.heading}</h3>
            {item.data.map((meta, metaIndex) => (
              <a href={item?.navigateTo}>
                <h5 key={metaIndex} className="footer__section__text">
                  {meta.label}
                </h5>
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer__socialMedia">
        {socialMediaLinks.map((item, index) => (
          <div key={index} className="footer__socialMedia__icon">
            {
              <item.icon
                onClick={() => handleLinkForwarding(item?.label)}
                height={"30px"}
              />
            }
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
