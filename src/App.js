/* eslint-disable */
import React, { Component } from 'react'
import './App.css';
// import './themify-icons/themify-icons.css';
import anh from './Image/logo.svg'
// import anh1 from './Image/slider.jpg';
import anh2 from './Image/slider1.jpg';
import anh3 from './Image/slider2.jpg';
import anh4 from './Image/slider3.jpg';
import anh5 from './Image/slider4.jpg';
import anh6 from './Image/slider5.jpg';
import anh7 from './Image/slider6.jpg';
import anh8 from './Image/slider7.jpg';
import anh9 from './Image/slider8.jpg';
import anh10 from './Image/slider9.jpg';
import anh11 from './Image/slider10.jpg';
import teacher from './Image/teacher.jpg';
import who from './Image/who.jpg';
import booking from './Image/booking-logo.svg';
import volkswagen from './Image/volkswagen-logo.svg';
import mercedes from './Image/mercedes-logo-v2.svg';
import adidas from './Image/adidas-logo.svg';
import eventbrite from './Image/eventbrite-logo.svg';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      lists:[
        {image:anh4,title:'2021 Complete Python Bootcamp From Zero to Hero in Python',content:'Jose Portilla'},
        {image:anh5,title:'Machine Learning A-Z™: Hands-On Python & R In Data Sciencemp',content:'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Support, Ligency Team'},
        {image:anh6,title:'Python for Data Science and Machine Learning Bootcamp',content:'Jose Portilla'},
        {image:anh7,title:'Learn Python Programming Masterclass',content:"'Tim Buchalka, Jean-Paul Roberts, Tim Buchalka's Learn Programming Academy'"},
        {image:anh8,title:'The Python Mega Course: Build 10 Real World Applications',content:'Ardit Sulce'}
    ],
    lists2:[
        {image:anh4,title:'2021 Complete Python Bootcamp From Zero to Hero in Python',content:'Jose Portilla'},
        {image:anh5,title:'Machine Learning A-Z™: Hands-On Python & R In Data Sciencemp',content:'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Support, Ligency Team'},
        {image:anh9,title:'The Complete 2021 Web Development Bootcamp',content:'Dr. Angela Yu'},
        {image:anh10,title:'Ultimate AWS Certified Developer Associate 2021 - NEW!',content:"Stephane Maarek | AWS Certified Solutions Architect & Developer Associate"},
        {image:anh11,title:'The Web Developer Bootcamp 2021',content:'Colt Steele'}
    ],
    lists3:[
        {image:'https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg',title:'Design'},
        {image:'https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg',title:'Development'},
        {image:'https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg',title:'Marketing'},
        {image:'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg',title:'IT and Software'},
        {image:'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg',title:'Personal Development'},
        {image:'https://s.udemycdn.com/home/top-categories/lohp-category-business.jpg',title:'Business'},
        {image:'https://s.udemycdn.com/home/top-categories/lohp-category-photography.jpg',title:'Photography'},
        {image:'https://s.udemycdn.com/home/top-categories/lohp-category-music.jpg',title:'Music'}
    ],
    development:[
        {title:'Python',content:'25,703,311 students'},
        {title:'Web Development',content:'8,688,330 students'},
        {title:'Machine Learning',content:'5,075,042 students'},
    ],
    business:[
        {title:'Financial Analysis',content:'981,195 students'},
        {title:'SQL',content:'3,955,382 students'},
        {title:'PMP',content:'1,297,531 students'},
    ],
    itandsoftware:[
        {title:'AWS Certification',content:'3,968,401 students'},
        {title:'Ethical Hacking',content:'8,107,174 students'},
        {title:'Cyber Security',content:'2,837,574 students'},
    ],
    design:[
        {title:'Photoshop',content:'8,841,155 students'},
        {title:'Graphic Design',content:'2,576,440 students'},
        {title:'Drawing',content:'1,993,414 students'},
    ],
    images:[
        booking,volkswagen,eventbrite,adidas,eventbrite
    ],
    titles:{
        array1:['Udemy for Business','Teach on Udemy','Get the app','About us','Contact us'],
        array2:['Careers','Blog','Help and Support','Affiliate'],
        array3:['Terms','Privacy policy','Sitemap','Featured courses']
    }
    }
  }
  render() {
    return (
      <>
        <div className="heading">
            <div className="items container">
                <a><img src={anh} alt="logo-heading" className="logo-heading"></img></a>
            </div>
            <div className="items container2">
                <a href=""><span>Categories</span></a>
            </div>
            <div className="items container3">
                <form action="">
                    <i className="ti-search"></i>
                    <input type="text" placeholder="Search for anything"></input>
                </form>
            </div>
            <div className="items container4">
                <a href=""><span>Udemy for Business</span></a>
            </div>
            <div className="items container5">
                <a href=""><span>Teach on Udemy</span></a>
            </div>
            <div className="items container6">
                <a href=""><i className="ti-shopping-cart-full"></i></a>
            </div>
            <div className="items container7">
                <a href="">Log in</a>
            </div>
            <div className="items container8">
                <a href="">Sign up</a>
            </div>
        </div>
        <div className="main">
            <div className="slider-main">
                <div className="logo-slider">
                    <img src={anh2} alt="" className="img-slider"></img>
                </div>
                <div className="div-slider">
                    <h1 className="h1-slider">The reviews are in</h1>
                    <p className="p-slider">We specialize in learning that gets results. Courses from $11.99 ends April 1.</p>
                    <form action="">
                        <input type="text" placeholder="What do you want to learn?"></input>
                        <i className="ti-search"></i>
                    </form>
                </div>
            </div>
            <div className="headline">
                <h1>The world's largest selection of courses</h1>
                <p>Choose from 130,000 online video courses with new additions published every month</p>
            </div>
            <div className="component">
                <ul className="ul-component">
                    <li className="item-li">Python</li>
                    <li className="item-li">Excel</li>
                    <li className="item-li">Web Development</li>
                    <li className="item-li">JavaScript</li>
                    <li className="item-li">Data Science</li>
                    <li className="item-li">AWS Certification</li>
                    <li className="item-li">Drawing</li>
                </ul>
            </div>
            <div className="component-slider">
                <div className="content-slider">
                    <h2 className="h2-content">Expand your career opportunities with Python</h2>
                    <p className="p-content">
                        Whether you work in machine learning or finance, or are pursuing a career in web development or data science, 
                        Python is one of the most important skills you can learn. 
                        Python's simple syntax is especially suited for desktop, web, and business applications.
                        Python's design philosophy emphasizes readability and usability. Python was developed upon
                        the premise that there should be only one way (and preferably one obvious way) to do things,
                        a philosophy that has resulted in a strict level of code standardization. The core programming language
                        is quite small and the standard library is also large. In fact, Python's large library is one of its greatest 
                        benefits, providing a variety of different tools for programmers suited for many different tasks.
                    </p>
                    <span className="span-content">Exlore Python </span>
                </div>
                <div className="content-anh">
                    <img src={anh3} alt="" className="anh2-slider"></img>
                </div>
            </div>
            <div className="container-group">
                {this.state.lists.map(item=>(
                    <div class="items-list">
                        <div class="anh-items">
                            <img src={item.image} alt=""></img>
                        </div>
                        <div class="content-items">
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>      
                        </div>
                    </div>
                ))}
            </div>
            <div className="container-group1">
                <div className="c-group1">
                    <h2>Students are viewing</h2>
                </div>
                <div className="c-group1-2">  
                    {this.state.lists2.map(item=>(
                        <div class="items-list">
                            <div class="anh-items">
                                <img src={item.image} alt=""></img>
                            </div>
                            <div class="content-items">
                                <h1>{item.title}</h1>
                                <p>{item.content}</p>      
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container-group2">
                <div className="c-group2">
                    <h3>Get personal learning recommendations</h3>
                    <p>Answer a few questions for your top picks</p>
                    <a>Get started</a>
                </div>
            </div>
            <div className="container-group3">
                <div className="c-group3">
                    <h3>Top categories</h3>
                </div>
                <div className="c-group3-1">
                    {this.state.lists3.map(item=>(
                        <div className="c-group3-1-a">
                            <img src={item.image}></img>
                            <div className="c-group3-1-b">
                            <span>{item.title}</span>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <div className="container-group4">
                <div className="c-group4">
                    <h3>Featured topics by category</h3>
                </div>
                <div className="c-group4-1">
                    <div className="c-group4-2">
                        <div className="c-group4-2-1">
                            <h2>Development</h2>
                        </div>
                        {this.state.development.map(item=>(
                            <div className="c-group4-2-a">
                                <a>{item.title}</a>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="c-group4-2">
                        <div className="c-group4-2-1">
                            <h2>Business</h2>
                        </div>
                        {this.state.business.map(item=>(
                            <div className="c-group4-2-a">
                                <a>{item.title}</a>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="c-group4-2">
                        <div className="c-group4-2-1">
                            <h2>It And Software</h2>
                        </div>
                        {this.state.itandsoftware.map(item=>(
                            <div className="c-group4-2-a">
                                <a>{item.title}</a>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="c-group4-2">
                        <div className="c-group4-2-1">
                            <h2>Design</h2>
                        </div>
                        {this.state.design.map(item=>(
                            <div className="c-group4-2-a">
                                <a>{item.title}</a>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className="c-group4-3">
                    <a>Explore more</a>
                </div>
                
            </div>
            <div className="container-group5">
                <div className="c-group5">
                    <div className="c-group5-1">
                        <img src={teacher}></img>
                    </div>
                    <div className="c-group5-2">
                        <h1>Become an instructor</h1>
                        <p>
                            Top instructors from around the 
                            world teach millions of students 
                            on Udemy. We provide the tools 
                            and skill to teach what you love.
                        </p>
                        <a>Start teaching today</a>
                    </div>
                </div>
            </div>
            <div className="container-group6">
                <div className="c-group6">
                    <h3>Trusted by companies of all sizes</h3>
                </div>
                <div className="c-group6-1">
                    {this.state.images.map(item=>(
                        <div>
                            <img src={item}></img>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container-group7">
                <div className="c-group7">
                    <div className="c-group7-2">
                        <h1>Udemy for Business</h1>
                        <p>
                            Get unlimited access to 5,500+ 
                            of Udemy’s top courses for your team.
                        </p>
                        <a>Get Udemy for Business</a>
                    </div>
                    <div className="c-group7-1">
                        <img src={who}></img>
                    </div>  
                </div>
            </div>
            <div className="container-group8">
                    <div className="c-group8">
                        <div className="c-group8-1">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QFIhEmOd6No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="c-group8-2">
                            <h1>Transform your life through education</h1>
                            <p> Mohamad Alaloush launched a new career 
                                in software development by taking courses
                                on Udemy. What will you be able to do?
                            </p>
                        </div>
                    </div>
            </div>
        </div>
        <div className="footer">
            <div className="footer-container">
                <ul className="ul-footer">
                        {this.state.titles.array1.map(item=>(
                            <li>
                                {item}
                            </li>
                        ))}
                </ul>
                <ul className="ul-footer">
                        {this.state.titles.array2.map(item=>(
                            <li>
                                {item}
                            </li>
                        ))}
                </ul>
                <ul className="ul-footer">
                        {this.state.titles.array3.map(item=>(
                            <li>
                                {item}
                            </li>
                        ))}
                </ul>
                <div className="div-footer">
                    <i>1</i>
                    <a>
                        English
                    </a>
                    <i>2</i>
                </div>
            </div>
            <div className="footer-container1">
                <img src={anh}></img>
                <p>© 2021 Udemy, Inc.</p>
            </div>
        </div>
      </>
    )
  }
};
export default App;

