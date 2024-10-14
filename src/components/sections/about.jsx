import React from 'react'
import {
    RiArrowRightUpLine,
    RiDownloadLine,
    RiFacebookCircleFill,
    RiTwitterXLine,
    RiLinkedinFill,
    RiGithubLine,
    RiGlobalFill
} from '@remixicon/react'
import profile_img from "../../assets/images/about/profile.jpg"
import pic from "../../assets/images/pic.png"

import SlideUp from '../animations/slideUp'
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={pic} alt="About Me" />
                                <h2>Yassine CHALH</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href="https://yassinechalh.notion.site/Yassine-CHALH-11202723a3b3800599c7ee9ff9a2d3ad"><i><RiGlobalFill size={20} /></i></a></li>
                                        <li><a href="https://x.com/yaashall"><i><RiTwitterXLine size={20} /></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/yassine-chalh-085867242/"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href="https://github.com/yaashall01"><i><RiGithubLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hi, I’m Yassine Chalh, a <span>Full-Stack Developer</span> passionate about the Spring
                                    ecosystem and DevOps.
                                </h2>
                                <div className="hero-btns">
                                    <a href="/CV_Yassine_CHALH_Fullstack_en.pdf" className="theme-btn">Download CV <i><RiDownloadLine size={16}/></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18}/></i> Full-Stack Development</li>
                                    <li><i><RiArrowRightUpLine size={18}/></i> Java & Spring Boot</li>
                                    <li><i><RiArrowRightUpLine size={18}/></i> Angular Development</li>
                                    <li><i><RiArrowRightUpLine size={18}/></i> DevOps Practices</li>
                                    <li><i><RiArrowRightUpLine size={18}/></i> Microservices Architecture</li>
                                    <li><i><RiArrowRightUpLine size={18}/></i> SQL & NoSQL Databases</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About