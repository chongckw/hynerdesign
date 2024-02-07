import { Carousel, Col, Row } from 'antd'
import { useState } from 'react'
import { getTranslation } from '../../helper';

export const CarouselDisplay = () => {
    const data = [
        {
            value: '01',
            title: 'GF',
            images: [
                require('../../assets/image/demos/GF-images/1.jpg'),
                require('../../assets/image/demos/GF-images/2.jpg'),
                require('../../assets/image/demos/GF-images/3.jpg'),
                require('../../assets/image/demos/GF-images/4.jpg'),
                require('../../assets/image/demos/GF-images/5.jpg'),
                require('../../assets/image/demos/GF-images/6.jpg'),
                require('../../assets/image/demos/GF-images/7.jpg'),
                require('../../assets/image/demos/GF-images/8.jpg'),
                require('../../assets/image/demos/GF-images/9.jpg')
            ]
        },
        {
            value: '02',
            title: 'IHKL',
            images: [
                require('../../assets/image/demos/IHKL-images/1.jpg'),
                require('../../assets/image/demos/IHKL-images/2.jpg'),
                require('../../assets/image/demos/IHKL-images/3.jpg'),
                require('../../assets/image/demos/IHKL-images/4.jpg'),
                require('../../assets/image/demos/IHKL-images/5.jpg'),
                require('../../assets/image/demos/IHKL-images/6.jpg'),
                require('../../assets/image/demos/IHKL-images/7.jpg'),
                require('../../assets/image/demos/IHKL-images/8.jpg'),
                require('../../assets/image/demos/IHKL-images/9.jpg'),
                require('../../assets/image/demos/IHKL-images/10.jpg'),
                require('../../assets/image/demos/IHKL-images/11.jpg'),
                require('../../assets/image/demos/IHKL-images/12.jpg'),
                require('../../assets/image/demos/IHKL-images/13.jpg')
            ]
        },
        {
            value: '03',
            title: 'JBBW',
            images: [
                require('../../assets/image/demos/JBBW-images/1.jpg'),
                require('../../assets/image/demos/JBBW-images/2.jpg'),
                require('../../assets/image/demos/JBBW-images/3.jpg'),
                require('../../assets/image/demos/JBBW-images/4.jpg'),
                require('../../assets/image/demos/JBBW-images/5.jpg'),
                require('../../assets/image/demos/JBBW-images/6.jpg'),
                require('../../assets/image/demos/JBBW-images/7.jpg'),
                require('../../assets/image/demos/JBBW-images/8.jpg'),
                require('../../assets/image/demos/JBBW-images/9.jpg'),
                require('../../assets/image/demos/JBBW-images/10.jpg'),
                require('../../assets/image/demos/JBBW-images/11.jpg'),
                require('../../assets/image/demos/JBBW-images/12.jpg'),
                require('../../assets/image/demos/JBBW-images/13.jpg'),
                require('../../assets/image/demos/JBBW-images/14.jpg'),
                require('../../assets/image/demos/JBBW-images/15.jpg'),
                require('../../assets/image/demos/JBBW-images/16.jpg'),
                require('../../assets/image/demos/JBBW-images/17.jpg'),
                require('../../assets/image/demos/JBBW-images/18.jpg'),
                require('../../assets/image/demos/JBBW-images/19.jpg'),
                require('../../assets/image/demos/JBBW-images/20.jpg'),
                require('../../assets/image/demos/JBBW-images/21.jpg'),
            ]
        },
        {
            value: '04',
            title: 'JBML',
            images: [
                require('../../assets/image/demos/JBML-images/1.jpg'),
                require('../../assets/image/demos/JBML-images/2.jpg'),
                require('../../assets/image/demos/JBML-images/3.jpg'),
                require('../../assets/image/demos/JBML-images/4.jpg'),
                require('../../assets/image/demos/JBML-images/5.jpg'),
                require('../../assets/image/demos/JBML-images/6.jpg'),
                require('../../assets/image/demos/JBML-images/7.jpg'),
                require('../../assets/image/demos/JBML-images/8.jpg'),
            ]
        },
        {
            value: '05',
            title: 'JMYG',
            images: [
                require('../../assets/image/demos/JMYG-images/1.jpg'),
                require('../../assets/image/demos/JMYG-images/2.jpg'),
                require('../../assets/image/demos/JMYG-images/3.jpg'),
                require('../../assets/image/demos/JMYG-images/4.jpg'),
                require('../../assets/image/demos/JMYG-images/5.jpg'),
                require('../../assets/image/demos/JMYG-images/6.jpg'),
                require('../../assets/image/demos/JMYG-images/7.jpg'),
                require('../../assets/image/demos/JMYG-images/8.jpg'),
                require('../../assets/image/demos/JMYG-images/9.jpg'),
                require('../../assets/image/demos/JMYG-images/10.jpg'),
                require('../../assets/image/demos/JMYG-images/11.jpg'),
                require('../../assets/image/demos/JMYG-images/12.jpg'),
                require('../../assets/image/demos/JMYG-images/13.jpg'),
                require('../../assets/image/demos/JMYG-images/14.jpg'),
                require('../../assets/image/demos/JMYG-images/15.jpg'),
                require('../../assets/image/demos/JMYG-images/16.jpg'),
                require('../../assets/image/demos/JMYG-images/17.jpg'),
                require('../../assets/image/demos/JMYG-images/18.jpg'),
                require('../../assets/image/demos/JMYG-images/19.jpg'),
                require('../../assets/image/demos/JMYG-images/20.jpg'),
                require('../../assets/image/demos/JMYG-images/21.jpg'),
            ]
        },
        {
            value: '06',
            title: 'KKWK',
            images: [
                require('../../assets/image/demos/KKWK-images/1.jpg'),
                require('../../assets/image/demos/KKWK-images/2.jpg'),
                require('../../assets/image/demos/KKWK-images/3.jpg'),
                require('../../assets/image/demos/KKWK-images/4.jpg'),
                require('../../assets/image/demos/KKWK-images/5.jpg'),
                require('../../assets/image/demos/KKWK-images/6.jpg'),
                require('../../assets/image/demos/KKWK-images/7.jpg'),
                require('../../assets/image/demos/KKWK-images/8.jpg'),
                require('../../assets/image/demos/KKWK-images/9.jpg'),
                require('../../assets/image/demos/KKWK-images/10.jpg'),
                require('../../assets/image/demos/KKWK-images/11.jpg'),
                require('../../assets/image/demos/KKWK-images/12.jpg'),
                require('../../assets/image/demos/KKWK-images/13.jpg')
            ]
        },
        {
            value: '07',
            title: 'MMJT',
            images: [
                require('../../assets/image/demos/MMJT-images/1.jpg'),
                require('../../assets/image/demos/MMJT-images/2.jpg'),
                require('../../assets/image/demos/MMJT-images/3.jpg'),
                require('../../assets/image/demos/MMJT-images/4.jpg'),
                require('../../assets/image/demos/MMJT-images/5.jpg'),
                require('../../assets/image/demos/MMJT-images/6.jpg'),
                require('../../assets/image/demos/MMJT-images/7.jpg'),
                require('../../assets/image/demos/MMJT-images/8.jpg'),
                require('../../assets/image/demos/MMJT-images/9.jpg'),
                require('../../assets/image/demos/MMJT-images/10.jpg'),
                require('../../assets/image/demos/MMJT-images/11.jpg'),
                require('../../assets/image/demos/MMJT-images/12.jpg')
            ]
        },
        {
            value: '08',
            title: 'PJHY',
            images: [
                require('../../assets/image/demos/PJHY-images/1.jpg'),
                require('../../assets/image/demos/PJHY-images/2.jpg'),
                require('../../assets/image/demos/PJHY-images/3.jpg'),
                require('../../assets/image/demos/PJHY-images/4.jpg'),
                require('../../assets/image/demos/PJHY-images/5.jpg'),
                require('../../assets/image/demos/PJHY-images/6.jpg'),
                require('../../assets/image/demos/PJHY-images/7.jpg'),
                require('../../assets/image/demos/PJHY-images/8.jpg'),
                require('../../assets/image/demos/PJHY-images/9.jpg'),
                require('../../assets/image/demos/PJHY-images/10.jpg'),
                require('../../assets/image/demos/PJHY-images/11.jpg'),
                require('../../assets/image/demos/PJHY-images/12.jpg'),
                require('../../assets/image/demos/PJHY-images/13.jpg'),
                require('../../assets/image/demos/PJHY-images/14.jpg'),
                require('../../assets/image/demos/PJHY-images/15.jpg'),
                require('../../assets/image/demos/PJHY-images/16.jpg'),
                require('../../assets/image/demos/PJHY-images/17.jpg'),
                require('../../assets/image/demos/PJHY-images/18.jpg'),
                require('../../assets/image/demos/PJHY-images/19.jpg'),
                require('../../assets/image/demos/PJHY-images/20.jpg'),
            ]
        },
        {
            value: '09',
            title: 'SASF',
            images: [
                require('../../assets/image/demos/SASF-images/1.jpg'),
                require('../../assets/image/demos/SASF-images/2.jpg'),
                require('../../assets/image/demos/SASF-images/3.jpg'),
                require('../../assets/image/demos/SASF-images/4.jpg'),
                require('../../assets/image/demos/SASF-images/5.jpg'),
                require('../../assets/image/demos/SASF-images/6.jpg'),
                require('../../assets/image/demos/SASF-images/7.jpg'),
                require('../../assets/image/demos/SASF-images/8.jpg'),
                require('../../assets/image/demos/SASF-images/9.jpg'),
                require('../../assets/image/demos/SASF-images/10.jpg'),
                require('../../assets/image/demos/SASF-images/11.jpg')
            ]
        },
        {
            value: '10',
            title: 'SEMS',
            images: [
                require('../../assets/image/demos/SEMS-images/1.jpg'),
                require('../../assets/image/demos/SEMS-images/2.jpg'),
                require('../../assets/image/demos/SEMS-images/3.jpg'),
                require('../../assets/image/demos/SEMS-images/4.jpg'),
                require('../../assets/image/demos/SEMS-images/5.jpg'),
                require('../../assets/image/demos/SEMS-images/6.jpg'),
                require('../../assets/image/demos/SEMS-images/7.jpg'),
                require('../../assets/image/demos/SEMS-images/8.jpg'),
                require('../../assets/image/demos/SEMS-images/9.jpg'),
                require('../../assets/image/demos/SEMS-images/10.jpg'),
                require('../../assets/image/demos/SEMS-images/11.jpg'),
                require('../../assets/image/demos/SEMS-images/12.jpg'),
                require('../../assets/image/demos/SEMS-images/13.jpg'),
                require('../../assets/image/demos/SEMS-images/14.jpg'),
            ]
        },
    ];

    const [currentDemo, setCurrentDemo] = useState(data.filter((x) => x.title == "GF")[0]);
    const onClickDemoCarousel = (title) => {
        setCurrentDemo(data.filter((x) => x.title == title)[0]);
    }


  return (
    <section className="carousel container">
    <Row justify='space-evenly'>
       <Col md={14} xs={24}>
        <Carousel
            className="demo-carousel"
            pauseOnFocus={true}
            draggable={true}
            autoplaySpeed={6000}
            lazyLoad="ondemand"
            dots={{
            className: "carousel-dots"
            }} autoplay>
                {
                    currentDemo.images.map((image, index) => (
                        <div key={index}>
                            <a className="btn">
                            <span>
                                <span>
                                <span>
                                    <img src={image} />
                                </span>
                                </span>
                            </span>
                            </a>
                        </div>
                    ))
                }
        </Carousel>
        
        <Carousel 
            slidesToShow = {3}
            draggable={true}
            swipeToSlide={true}
            dots={false}
            autoplay
            autoplaySpeed={5000}
            className="title-carousel"
        >
        {
            data.map((item) => {
            return <div key={item.title} className='title-carousel-container' onClick={() => onClickDemoCarousel(item.title)}>
                        <a className="btn">
                            <span>
                                <span>
                                <span>
                                    <h1>{getTranslation('project')} &nbsp; {item.value}</h1>
                                </span>
                                </span>
                            </span>
                        </a>
                    </div>
            })
        }
        </Carousel>
        </Col>
        <Col md={8} xs={24} className='about-us'>
            <h1>{getTranslation("about-us")}</h1>

            <h5>{getTranslation("about-us-title")}</h5>
            <p>{getTranslation("about-us-content")}</p>
        </Col>
    </Row>
  </section>
  )
}
