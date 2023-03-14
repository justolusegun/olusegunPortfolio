import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import '../../src/project.css'


const portfolioData = [
  {
    imgUrl: img1,
    title: "Turitor",
    url: "https://turitor.netlify.app//",
  },
  {
    imgUrl: img2,
    title: "Drivter",
    url: "https://drivter-web.vercel.app/",
  },
  {
    imgUrl: img3,
    title: "Aptech Abeokuta",
    url: "http://www.aptechabeokuta.com.ng/",
  },
];

const Project = () => {
  return (
      <Container>
        <Row>
          <Col lg="12" className="portfolio_top mb-5">
            <h6>Explore my work and give feedback</h6>
          </Col>

          {portfolioData.slice(0, 3).map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio_card">
                <div className="portfolio_img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>

                <div className="portfolio_content">
                  <h5>{item.title}</h5>
                  <a href={item.url}> View live demo</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* <Row className="mt-5">
          <Col lg="12" className="portfolio_top mb-5">
            <h6>Not yet deployed </h6>
            <h2>Portfolio</h2>
          </Col>
          {portfolioData.slice(0, 3).map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio_card">
                <div className="portfolio_img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>
                <div className="portfolio_content">
                  <h5>{item.title}</h5>
                  <a href={item.url}> View live demo</a>
                </div>
              </div>
            </Col>
          ))}
        </Row> */}
      </Container>
  );
};

export default Project;


