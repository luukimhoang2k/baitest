/* eslint-disable */
import React, { Component } from 'react'
import './App.css';
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
                    <i className="ti-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </i>
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
                <a href=""><i className="ti-shopping-cart-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></i></a>
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
                            <h1>$11.99 <span className="content-span">$129.99</span></h1>      
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
                            <h1>$11.99 <span className="content-span">$129.99</span></h1>      
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
                    <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
</svg>
                    </i>
                    <a>
                        English
                    </a>
                    <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
</svg>
                    </i>
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

