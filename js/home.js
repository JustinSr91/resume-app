import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render(){

    return(
          <div className="wrapper">
              <div className="sidebar-wrapper">
                  <div className="profile-container">
                      <img className="profile" src="/styles/Headshot1.jpg" alt="" />
                      <h1 className="name">Justin Strayhorn</h1>
                      <h3 className="tagline">Front End Developer</h3>
                  </div>

                  <div className="contact-container container-block">
                      <ul className="list-unstyled contact-list">
                          <li className="email"><i className="fa fa-envelope"></i><a href="mailto: justin.strayhorn@hotmail.com">justin.strayhorn@hotmail.com</a></li>
                          <li className="phone"><i className="fa fa-phone"></i><a href="tel:210 763 9608">210 763 9608</a></li>
                          <li className="website"><i className="fa fa-globe"></i><a href="http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/" target="_blank">portfoliosite.com</a></li>
                          <li className="linkedin"><i className="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/justin-strayhorn-51263799" target="_blank">linkedin.com/in/justin-strayhorn-51263799</a></li>
                          <li className="github"><i className="fa fa-github"></i><a href="https://github.com/JustinSr91" target="_blank">github.com/JustinSr91</a></li>
                      </ul>
                  </div>
                  <div className="education-container container-block">
                      <h2 className="container-block-title">Education</h2>
                      <div className="item">
                          <h4 className="degree">MSc in Computer Science</h4>
                          <h5 className="meta">University of London</h5>
                          <div className="time">2011 - 2012</div>
                      </div>
                      <div className="item">
                          <h4 className="degree">BSc in Applied Mathematics</h4>
                          <h5 className="meta">Bristol University</h5>
                          <div className="time">2007 - 2011</div>
                      </div>
                  </div>

                  <div className="interests-container container-block">
                      <h2 className="container-block-title">Interests</h2>
                      <ul className="list-unstyled interests-list">
                          <li>Climbing</li>
                          <li>Snowboarding</li>
                          <li>Cooking</li>
                      </ul>
                  </div>

              </div>

              <div className="main-wrapper">

                  <section className="section summary-section">
                      <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                      <div className="summary">
                          <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
                      </div>
                  </section>

                  <section className="section projects-section">
                      <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                      <div className="intro">
                          <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                      </div>
                      <div className="item">
                          <span className="project-title"><a href="#">Velocity</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>

                      </div>
                      <div className="item">
                          <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" target="_blank">DevStudio</a></span> -
                          <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
                      </div>
                      <div className="item">
                          <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/" target="_blank">Tempo</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services and to attract users &amp; investors</span>
                      </div>
                      <div className="item">
                          <span className="project-title"><a href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/" target="_blank">Atom</a></span> - <span className="project-tagline">A comprehensive website template solution for startups/developers to market their mobile apps. </span>
                      </div>
                      <div className="item">
                          <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" target="_blank">Delta</a></span> - <span className="project-tagline">A responsive Bootstrap one page theme designed to help app developers promote their mobile apps</span>
                      </div>
                  </section>

                  <section className="skills-section section">
                      <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                      <div className="skillset">
                          <div className="item">
                              <h3 className="level-title">Python &amp; Django</h3>
                              <div className="level-bar">
                                  <div className="level-bar-inner" data-level="98%">
                                  </div>
                              </div>
                          </div>

                          <div className="item">
                              <h3 className="level-title">Javascript &amp; jQuery</h3>
                              <div className="level-bar">
                                  <div className="level-bar-inner" data-level="98%">
                                  </div>
                              </div>
                          </div>

                          <div className="item">
                              <h3 className="level-title">Angular</h3>
                              <div className="level-bar">
                                  <div className="level-bar-inner" data-level="98%">
                                  </div>
                              </div>
                          </div>

                          <div className="item">
                              <h3 className="level-title">HTML5 &amp; CSS</h3>
                              <div className="level-bar">
                                  <div className="level-bar-inner" data-level="95%">
                                  </div>
                              </div>
                          </div>

                          <div className="item">
                              <h3 className="level-title">Ruby on Rails</h3>
                              <div className="level-bar">
                                  <div className="level-bar-inner" data-level="85%">
                                  </div>
                              </div>
                          </div>

                          <div className="item">
                              <h3 className="level-title">Sketch &amp; Photoshop</h3>
                              <div className="level-bar">
                                  <div className="level-bar-inner" data-level="60%">
                                  </div>
                              </div>
                          </div>

                      </div>
                  </section>

              </div>
          </div>
    )
    }
  })
