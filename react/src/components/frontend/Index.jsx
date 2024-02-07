import { FloatButton, Carousel, Col, Row, Modal } from 'antd';
import { Fade } from "react-awesome-reveal";
import { HighlightOutlined, PhoneOutlined, FormOutlined, ToolOutlined, SmileOutlined, FacebookFilled, WhatsAppOutlined, CompassOutlined } from '@ant-design/icons';

import { FormattedMessage } from 'react-intl';

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

import demo1 from "../../assets/image/welcomes/demo1.jpg";
import demo2 from "../../assets/image/welcomes/demo2.jpg";
import demo3 from "../../assets/image/welcomes/demo3.jpg";
import demo4 from "../../assets/image/welcomes/demo4.jpg";

import desmond1 from "../../assets/image/welcomes/desmond1.jpg";
import desmond2 from "../../assets/image/welcomes/desmond2.jpg";
import desmond3 from "../../assets/image/welcomes/desmond3.jpg";


import isaac1 from "../../assets/image/welcomes/isaac1.jpg";
import isaac2 from "../../assets/image/welcomes/isaac2.jpg";
import isaac3 from "../../assets/image/welcomes/isaac3.jpg";


import steph1 from "../../assets/image/welcomes/steph1.jpg";
import steph2 from "../../assets/image/welcomes/steph2.jpg";
import steph3 from "../../assets/image/welcomes/steph3.jpg";

import { CarouselDisplay } from './CarouselDisplay';
import { ContactUs } from './ContactUs';
import { useState } from 'react';
import { getTranslation } from '../../helper';

export const Index = ({handleLanguageChange}) => {

  const [modal, setModal] = useState(false);

  window.onscroll = function() {myFunction()};
  
  const contactUs = () => {
    setModal(true);
  }

  function myFunction() {
    var button = document.getElementById("float-button");
    if(window.pageYOffset > 300) {
      button.style.display = "block";
    }
    else {
      button.style.display = "none";
    }
  }

  return (
    <div style={{overflow:'hidden'}}>
        <Fade direction="right" duration={2000} triggerOnce={true} className='header sticky'>
            <div>
                <img src={logo} className="logo"/>
                <span className="locale-container"> <label onClick={() => {handleLanguageChange('zh') }}>中</label> | <label onClick={() => {handleLanguageChange('en')}}>EN</label></span>
            </div>
        </Fade>
        
        <Fade direction="right" duration={2000} triggerOnce={true}>
          <div style={{overflow:'hidden'}}>
            <div className='welcome-content'>
              <Carousel className='welcome-carousel' effect="fade">
                <h1>
                  {getTranslation('welcome-to')} <br/> <label>
                  {getTranslation('hyner-design')}</label></h1>
                <div>
                    <a className="btn">
                    <span>
                        <span>
                        <span className='group-image-with-text'>
                            <img src={demo1} className="group-image-img"/>
                            <p>{getTranslation('demo-1')}</p>
                        </span>
                        </span>
                    </span>
                    </a>
                </div>
                <div>
                    <a className="btn">
                    <span>
                        <span>
                        <span className='group-image-with-text'>
                            <p>{getTranslation('demo-2')}</p>
                            <img src={demo2} className="group-image-img"/>
                        </span>
                        </span>
                    </span>
                    </a>
                </div>
                <div>
                    <a className="btn">
                    <span>
                        <span>
                        <span className='group-image-with-text'>
                            <img src={demo3} className="group-image-img" style={{width: '10vw'}}/>
                            <p>{getTranslation('demo-3')}</p>
                        </span>
                        </span>
                    </span>
                    </a>
                </div>
                <div>
                    <a className="btn">
                    <span>
                        <span>
                        <span className='group-image-with-text'>
                            <p>{getTranslation('demo-4')}</p>
                            <img src={demo4} className="group-image-img"/>
                        </span>
                        </span>
                    </span>
                    </a>
                </div>

                <div>
                    <a className="btn">
                    <span>
                        <span>
                        <span className='group-image'>
                            <img src={desmond1} className="group-image-img"/>
                            <img src={desmond2} className="group-image-img"/>
                            <img src={desmond3} className="group-image-img"/>
                        </span>
                        </span>
                    </span>
                    </a>
                </div>

                <div>
                    <a className="btn">
                    <span>
                        <span>
                        <span className='group-image'>
                            <img src={isaac1} className="group-image-img"/>
                            <img src={isaac2} className="group-image-img"/>
                            <img src={isaac3} className="group-image-img"/>
                        </span>
                        </span>
                    </span>
                    </a>
                </div>

                <div>
                    <a className="btn">
                    <span>
                        <span>
                        <span className='group-image'>
                            <img src={steph1} className="group-image-img"/>
                            <img src={steph2} className="group-image-img"/>
                            <img src={steph3} className="group-image-img"/>
                        </span>
                        </span>
                    </span>
                    </a>
                </div>

              </Carousel>
            </div>
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
                        <span className="caption">{getTranslation('project')} <br /> <label className="caption-label">01</label></span>
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
                    <span className="caption">{getTranslation('project')} <br /> <label className="caption-label">02</label></span>
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
                    <span className="caption">{getTranslation('project')} <br /> <label className="caption-label">03</label></span>
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
                        <span className="caption">{getTranslation('project')} <br /> <label className="caption-label">04</label></span>
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
                        <span className="caption">{getTranslation('project')} <br /> <label className="caption-label">05</label></span>
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
                    <span className="caption">{getTranslation('project')} <br /> <label className="caption-label">06</label></span>
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
                        <span className="caption">{getTranslation('project')} <br /> <label className="caption-label">07</label></span>
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
                        <span className="caption">{getTranslation('project')} <br /> <label className="caption-label">08</label></span>
                    </div>
                </Fade>
            </div>
        </div>

        <section className="company-info container">
          <Row className="company-info-container" justify='space-evenly'>
            <Col md={4} xs={24}>
            <div>
              <FormOutlined className="company-info-icon"/>
            </div>
            <div>
              <h5>
                  <span>{getTranslation('step')} 1</span>
              </h5>
              <p>{getTranslation('step-1-content')}</p>
            </div>
            </Col>
            <Col md={4} xs={24}>
            <div>
              <HighlightOutlined className="company-info-icon"/>
            </div>
            <div>
              <h5>
                  <span>{getTranslation('step')} 2</span>
              </h5>
              <p>{getTranslation('step-2-content')}</p>
            </div>
            </Col>
            <Col md={4} xs={24}>
            <div>
              <ToolOutlined className="company-info-icon"/>
            </div>
            <div>
                <h5>
                  <span>{getTranslation('step')} 3</span>
                </h5>
                <p>{getTranslation('step-3-content')}</p>
            </div>
            </Col>
            <Col md={4} xs={24}>
            <div>
              <SmileOutlined className="company-info-icon"/>
            </div>
            <div>
              <h5>
                  <span>{getTranslation('step')} 4</span>
              </h5>
              <p>{getTranslation('step-4-content')}</p>
            </div>
            </Col>
          </Row>
        </section>

        <CarouselDisplay />


        <section className="company-info container">
          <Row className="company-info-container" justify='space-evenly' style={{textAlign: 'center'}}>
            <Col md={8} xs={24}>
              <a href="https://www.facebook.com/hynerdesign/?paipv=0&eav=AfaDlk7nxIfF9sbesw5GX0yAhBHdqPOoziQjyc9Fs4nOq13q56rquEUfMFTsBohDwRg&_rdr" target="_blank" rel="noreferrer">
                <div>
                  <FacebookFilled className="company-info-icon"/>
                  <h5>
                      <span>Facebook</span>
                  </h5>
                </div>
              </a>
            </Col>
            <Col md={8} xs={24}>
            <a href="https://wa.me/message/VZDCLHZKN4NZP1" target="_blank" rel="noreferrer">
              <div>
                <WhatsAppOutlined className="company-info-icon"/>
                <h5>
                    <span>WhatsApp</span>
                </h5>
              </div>
            </a>
            </Col>
            <Col md={8} xs={24}>
              <div>
                <CompassOutlined className="company-info-icon"/>
              </div>
              <h5>
                  <span>{getTranslation("address")}</span> <br/>
                  <span>5A Jalan Sasa 3 Taman Gaya, 81100</span>
              </h5>
            </Col>
          </Row>
        </section>


        <FloatButton onClick={contactUs} shape="circle" id="float-button" icon={<PhoneOutlined />}/>
        <Modal
            open={modal}
            footer=""
            onCancel={() => {setModal(false)}}
          >
            <ContactUs closeModal={setModal}/>
          </Modal>
    </div>
  )
}
