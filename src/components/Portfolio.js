import React from 'react';
import { Link } from 'react-router-dom'
import tsunami from '../assets/imgs/Tsunami.png'
import elitedesigns from '../assets/imgs/Elite.png'
import kibanda from '../assets/imgs/kibanda.png'
import lynkImg from '../assets/imgs/lynk.png';
const Portfolio = ()=> {
    setTimeout(()=>{document.getElementsByClassName('App')[0].classList.remove('hidden')}, 0);
    return (
    	<div className="main-section portfolio-section">
        	<h1 className="main-title">Portfolio</h1>
            <p>See my works below. Unless explicitly stated otherwise, <strong>all their back-end and front-end parts were completely done by me. </strong>
            </p>
            <div className="timeline portfolio-timeline">
                <ul>
                    <li className="timeline_element timeline_element--now project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">Now</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <div className="project-description">
                                    <strong>Currently open to co-operation on new and existing projects.</strong><br></br>
                                        Looking for a freelancer or part/full time full-stack dev willing to join your team?<br></br>
                                    <Link to="/contact">Contact me</Link>. I will answer you in ~24 hours.
                                 </div>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2018-2019</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="https://lynk.co.ke" className="project-link">
                                    <div className="project-title">High speed search engine</div>
                                        <div className="project-subtitle">Experience a lifetime adventure. Save up on your holiday</div>
                                </a>
                                <div className="project-description"><p><strong>Tripsomnia is a web platform
                                        that allows to book and sell local tours and tourist attractions
                                    all over the world. It serves both as:</strong></p>

                                    <ul>
                                          <li>a SaaS platform for tour operators and activity providers, to
                                              manage their offers, customers, orders, and agents
                                              cooperation,</li>
                                            <li>a marketplace for end-customers to book the local tours and
                                                activities while or before the travelling.</li>
                                    </ul>
                                </div>
                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="http://rubyonrails.org/" rel="nofollow" rel="noopener" target="_blank">Ruby on Rails</a></li>
                                            <li><a href="https://reactjs.org/" rel="nofollow" rel="noopener" target="_blank">React</a></li>
                                            <li><a href="https://redux.js.org/" rel="nofollow" rel="noopener" target="_blank">Redux</a></li>
                                            <li><a href="http://elasticsearch.org/" rel="nofollow" rel="noopener" target="_blank">ElasticSearch</a></li>
                                            <li><a href="http://redis.io/" rel="nofollow" rel="noopener" target="_blank">Redis</a></li>
                                            <li><a href="https://www.ansible.com/" rel="nofollow" rel="noopener" target="_blank">Ansible</a></li>                                                                          
                                    	</ul>
                                  	</div>
                            	</div>
                            	<div className="project-image"> <a href="lynk.co.ke">
                                	<img src={lynkImg} alt=""/>
                              	</a>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2016-2017</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="#" className="project-link">
                                    <div className="project-title">Elite designs</div>
                                        <div className="project-subtitle">Interior designs</div>
                                </a>
                                <div
                                    className="project-description"><p><strong>
                                        demonstration of properly structured
                                        site for better SEO & UI/UX.
                                        Web platform Interior design agancy:</strong></p>
                                    <ul>
                                          <li>
                                                Responsive web application
                                                (jQuery, fundation zurb)
                                          </li>
                                            <li>a platform for end-customers to
                                                book festival tickets and
                                                learn about the various activities while or before the travelling.</li>
                                    </ul>
                                </div>
                                <a href="lynk.co.ke"
                                   className="project-readmore button button-red"
                                   rel="noopener" target="_blank">view details</a>

                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="https://foundation.zurb.com/" rel="nofollow" rel="noopener" target="_blank">Foundation zurb</a></li>
                                            <li><a href="https://jquery.com/" rel="nofollow" rel="noopener" target="_blank">jQuery</a></li>
                                    </ul>
                                  </div>
                            </div>
                            <div className="project-image">
                                <a href="https://yvonnendutaw.github.io/Elite-Designs/" rel="noopener" target="_blank">
                                    <img src={elitedesigns} alt="N/A"/>
                                </a>
                            </div>
                        </div>
                    </li>

                      <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2016-2017</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="#" className="project-link">
                                    <div className="project-title">Kibanda</div>
                                        <div className="project-subtitle">Mobile app for finding nearby mini-resturants</div>
                                </a>
                                <div
                                    className="project-description"><p><strong>
                                        demonstration of properly structured
                                        site for better SEO & UI/UX.
                                        Web platform Interior design agancy:</strong></p>
                                    <ul>
                                          <li>
                                                Responsive web application
                                                (jQuery, fundation zurb)
                                          </li>
                                            <li>a platform for end-customers to
                                                book festival tickets and
                                                learn about the various activities while or before the travelling.</li>
                                    </ul>
                                </div>
                                <a href="lynk.co.ke"
                                   className="project-readmore button button-red"
                                   rel="noopener" target="_blank">view details</a>

                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="https://foundation.zurb.com/" rel="nofollow" rel="noopener" target="_blank">Foundation zurb</a></li>
                                            <li><a href="https://jquery.com/" rel="nofollow" rel="noopener" target="_blank">jQuery</a></li>
                                    </ul>
                                  </div>
                            </div>
                            <div className="project-image">
                                <a href="https://yvonnendutaw.github.io/Elite-Designs/" rel="noopener" target="_blank">
                                    <img src={kibanda} alt="N/A"/>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2016-2017</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="#" className="project-link">
                                    <div className="project-title">Tsunami</div>
                                        <div className="project-subtitle">Music & art festival</div>
                                </a>
                                <div
                                    className="project-description"><p><strong>
                                        demonstration of properly structured
                                        site for better SEO & UI/UX.
                                        Web platform for booking festival tickets:</strong></p>
                                    <ul>
                                          <li>
                                                Responsive web application
                                                (jQuery, fundation zurb)
                                          </li>
                                            <li>a platform for end-customers to
                                                book festival tickets and
                                                learn about the various activities while or before the travelling.</li>
                                    </ul>
                                </div>
                                <a href="lynk.co.ke"
                                   className="project-readmore button button-red"
                                   rel="noopener" target="_blank">view details</a>

                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="https://foundation.zurb.com/" rel="nofollow" rel="noopener" target="_blank">Foundation zurb</a></li>
                                            <li><a href="https://jquery.com/" rel="nofollow" rel="noopener" target="_blank">jQuery</a></li>
                                    </ul>
                                  </div>
                            </div>
                            <div className="project-image">
                                <a href="http://syntaxsizer.github.io/tsunami">
                                    <img src={tsunami} alt="http://syntaxsizer.github.io/tsunami"/>
                                </a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

    )
}

export default Portfolio
