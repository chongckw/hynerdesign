import { Col, Row } from 'antd';
import { Fade } from "react-awesome-reveal";
import { PlusOutlined } from '@ant-design/icons';

import './Index.css'
import './border.scss'

import logo from "../../assets/image/logo.png";
import landing1 from "../../assets/image/landing01.jpg";
import landing2 from "../../assets/image/landing02.jpg";
import landing3 from "../../assets/image/landing03.jpg";
import landing4 from "../../assets/image/landing04.jpg";
import landing5 from "../../assets/image/landing05.jpg";
import landing6 from "../../assets/image/landing06.jpg";
import landing7 from "../../assets/image/landing07.jpg";
import landing8 from "../../assets/image/landing08.jpg";
import { CarouselDisplay } from './CarouselDisplay';
import { ContactUs } from './ContactUs';

export const Index = () => {
  return (
    <div style={{overflow:'hidden'}}>
        <Fade direction="right" duration={2000} triggerOnce={true}>
          <div style={{overflow:'hidden', marginBottom: '100px'}}>
            <img src={logo} width={'300px'}/>
            <h1>Welcome to Hyner <br/>Life Style Design & Consultant</h1>
          </div>
        </Fade>
        

        <div className="portfolio-image container">
            <div className="portfolio-section">
              <Fade direction="up" duration={2000} triggerOnce={true}>
                    <div className="portfolio-container">
                        <a className="btn">
                          <span>
                            <span>
                              <span>
                                <img src={landing1} />
                              </span>
                            </span>
                          </span>
                        </a>
                        <span className="caption">Project <br /> <label className="caption-label">01</label></span>
                    </div>
                </Fade>

              <Fade direction="down" duration={2000} triggerOnce={true}>
                <div className="portfolio-container">
                    <a className="btn">
                      <span>
                        <span>
                          <span>
                            <img src={landing2} />
                          </span>
                        </span>
                      </span>
                    </a>
                    <span className="caption">Project <br /> <label className="caption-label">02</label></span>
                </div>
              </Fade>
            </div>

            <div className="portfolio-section">
              <Fade direction="down" duration={2000} triggerOnce={true}>
                <div className="portfolio-container">
                    <a className="btn">
                      <span>
                        <span>
                          <span>
                            <img src={landing3} />
                          </span>
                        </span>
                      </span>
                    </a>
                    <span className="caption">Project <br /> <label className="caption-label">03</label></span>
                </div>
              </Fade>
              
              <Fade direction="up" duration={2000} triggerOnce={true}>
                    <div className="portfolio-container">
                        <a className="btn">
                          <span>
                            <span>
                              <span>
                                <img src={landing4} />
                              </span>
                            </span>
                          </span>
                        </a>
                        <span className="caption">Project <br /> <label className="caption-label">04</label></span>
                    </div>
                </Fade>
            </div>

            <div className="portfolio-section">
              <Fade direction="up" duration={2000} triggerOnce={true}>
                    <div className="portfolio-container">
                        <a className="btn">
                          <span>
                            <span>
                              <span>
                                <img src={landing5} />
                              </span>
                            </span>
                          </span>
                        </a>
                        <span className="caption">Project <br /> <label className="caption-label">05</label></span>
                    </div>
                </Fade>

              <Fade direction="down" duration={2000} triggerOnce={true}>
                <div className="portfolio-container">
                    <a className="btn">
                      <span>
                        <span>
                          <span>
                            <img src={landing6} />
                          </span>
                        </span>
                      </span>
                    </a>
                    <span className="caption">Project <br /> <label className="caption-label">06</label></span>
                </div>
              </Fade>
            </div>

            <div className="portfolio-section">
              <Fade direction="up" duration={2000} triggerOnce={true}>
                    <div className="portfolio-container">
                        <a className="btn">
                          <span>
                            <span>
                              <span>
                                <img src={landing7} />
                              </span>
                            </span>
                          </span>
                        </a>
                        <span className="caption">Project <br /> <label className="caption-label">07</label></span>
                    </div>
                </Fade>

                <Fade direction="down" duration={2000} triggerOnce={true}>
                    <div className="portfolio-container">
                        <a className="btn">
                          <span>
                            <span>
                              <span>
                                <img src={landing8} />
                              </span>
                            </span>
                          </span>
                        </a>
                        <span className="caption">Project <br /> <label className="caption-label">08</label></span>
                    </div>
                </Fade>
            </div>
        </div>

        <section className="company-info container">
          <Row className="company-info-container" justify='space-evenly'>
            <Col md={4} xs={24}>
            <div className="qodef-m-icon-wrapper">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="60.604" height="60.604"><g fill="#8e7861"><path d="M29.999 10.394a20.217 20.217 0 0 0-7.867 38.835 20.217 20.217 0 0 0 15.734-37.247 20.084 20.084 0 0 0-7.867-1.588m0-1A21.211 21.211 0 1 1 8.788 30.605 21.211 21.211 0 0 1 29.999 9.394Z" /><path d="M30.802 60.6h-1V0h1Z" /><path d="M.004 30.802v-1h60.6v1Z" /></g></svg>		 */}
              <PlusOutlined className="company-info-icon"/>
            </div>
            <div>
              <h5>
                  <span>1-CLICK IMPORT</span>
              </h5>
              <p>You can get the entire Tadao demo content with just a single mouse click.</p>
            </div>
            </Col>
            <Col md={4} xs={24}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="42.411" height="61"><g fill="#8e7861"><path d="M1 1v40.411h40.411V1H1M0 0h42.411v42.411H0Z" /><path d="M21.706 42.162h-1V.25h1Z" /><path d="M42.162 21.706H21.206v-1h20.956Z" /><path d="M32.184 42.162h-1V21.206h1Z" /><path d="M42.162 32.184H31.684v-1h10.478Z" /><path d="M37.423 42.162h-1V31.684h1Z" /></g></svg>
            </div>
            <div>
              <h5>
                  <span>Elementor</span>
              </h5>
              <p>Fully compatible with the powerful drag-and-drop page builder plugin. </p>
            </div>
            </Col>
            <Col md={4} xs={24}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="49.178" height="61"><g fill="#8e7861"><path d="M24.589 1.994 1.736 41.411h45.707L24.589 1.994m0-1.994 24.589 42.411H0Z" /><path d="M24.59 40.417 47.443 1H1.736L24.59 40.417m0 1.994L.001 0h49.178Z" /></g></svg>		
            </div>
            <div>
                <h5>
                  <span>CUSTOMIZATION</span>
                </h5>
                <p>Configure each and every aspect of your new website with complete ease.</p>
            </div>
            </Col>
            <Col md={4} xs={24}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="55.554" height="61"><g fill="#8e7861"><path d="M27.777 1a26.784 26.784 0 0 0-10.422 51.45A26.786 26.786 0 0 0 38.2 3.1 26.608 26.608 0 0 0 27.777 1m0-1A27.777 27.777 0 1 1 0 27.777 27.777 27.777 0 0 1 27.777 0Z" /><path d="M37.598 10.166a16.955 16.955 0 0 0-11.989 28.945 16.956 16.956 0 1 0 23.979-23.979 16.844 16.844 0 0 0-11.99-4.966m0-1a17.955 17.955 0 1 1-17.955 17.955A17.955 17.955 0 0 1 37.598 9.166Z" /><path d="M37.598 23.262A10.408 10.408 0 1 0 48.005 33.67a10.42 10.42 0 0 0-10.407-10.408m0-1A11.408 11.408 0 1 1 26.19 33.67a11.408 11.408 0 0 1 11.408-11.408Z" /><path d="M33.203 28.122a6.013 6.013 0 1 0 6.013 6.013 6.02 6.02 0 0 0-6.013-6.013m0-1a7.013 7.013 0 1 1-7.013 7.013 7.013 7.013 0 0 1 7.013-7.013Z" /><path d="M34.186 28.776a3.722 3.722 0 1 0 3.721 3.722 3.726 3.726 0 0 0-3.721-3.722m0-1a4.722 4.722 0 1 1-4.722 4.722 4.722 4.722 0 0 1 4.722-4.722Z" /><path d="M36.056 30.552a1.852 1.852 0 1 0 1.848 1.852 1.854 1.854 0 0 0-1.848-1.852m0-1a2.852 2.852 0 1 1-2.852 2.852 2.852 2.852 0 0 1 2.852-2.852Z" /></g></svg>		
            </div>
            <div>
              <h5>
                  <span>HELP CENTER</span>
              </h5>
              <p>If you run into any questions or concerns, visit our official Help Center. </p>
            </div>
            </Col>
          </Row>
        </section>

        <CarouselDisplay />

        <ContactUs />

        {/* <span className="icon-layout--textual-right">
          <svg className="icon-svg--arrow-right" xmlns="http://www.w3.org/2000/svg" width="35" height="10"><g><path d="M30 4.5H0"/><path d="m 35.07 4.5 l -8.75 5 V -0.3 Z"/></g></svg>	
        </span> */}

        {/* <a className="icon--back-to-top_hyperlink">
          <span>
          <svg className="icon-svg--back-to-top" xmlns="http://www.w3.org/2000/svg" width="10" height="41"><g><path d="M5.25 6.058v35"/><path d="m5.75 0 5 8.75H0Z"/></g></svg>	</span>
        </a> */}
    </div>
  )
}
