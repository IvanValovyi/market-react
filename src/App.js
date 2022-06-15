import React from "react"

import { Link } from "react-router-dom"

import sprite from './assets/sprite.svg'

function App(){
    return(
        <div className="home_page">
        <h2 className="title">Quality Closes</h2>

        <div className="what_is_this">
            <h3 className="subtitle">What Is Quality Closes ?</h3>

            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea enim soluta neque quia, dolor est quos quod reiciendis facilis ex placeat molestiae modi voluptatum natus culpa ipsum vero eveniet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates nisi consequatur ipsam accusamus blanditiis, nihil odit repudiandae illum cum aliquid error accusantium dolorum illo sint voluptatibus animi, soluta est.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae laudantium, dolores illo quae voluptas aliquid dolore possimus temporibus necessitatibus quaerat voluptatum facilis nemo eveniet quisquam optio saepe consequatur harum fugiat?</p>
            </div>
        </div>

        <div className="why_quality_closes">
            <h3 className="subtitle">Why Quality Closes ?</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sit pariatur quibusdam ullam alias odit nihil voluptatibus amet, perspiciatis possimus placeat ratione, magni doloremque sunt repellendus! Tempore dicta sunt unde.</p>

            <div className="preferance">
                <h4>Main Preferance</h4>
            
                <ul className="list">
                    <li>
                        <svg>
                            <use href={`${sprite}#location`}/>
                        </svg>
                        <p>Convenient Location</p>
                    </li>
                    
                    <li>
                        <svg>
                            <use href={`${sprite}#personal`}/>
                        </svg>
                        <p>Great Staff</p>
                    </li>

                    <li>
                        <svg>
                            <use href={`${sprite}#phone`}/>
                        </svg>
                        <p>Constantly In Touch</p>
                    </li>

                    <li>
                        <svg>
                            <use href={`${sprite}#strong`}/>
                        </svg>
                        <p>We Never Fail</p>
                    </li>
                </ul>
            </div>
            
        </div>

        <div className="why_people_like_this">
            <h3 className="subtitle">Why People Like This ?</h3>

            <div className="like_list">
                <div className="item reverse">
                    <img src={require('./assets/images/design.jpg')} alt=""/>

                    <div className="text">
                        <h4>Unsurpassed Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rem minus ipsum. Fugit, quaerat suscipit nostrum ullam ex labore quae voluptate dicta ducimus deserunt eum, tenetur porro accusantium autem sunt?</p>
                    </div>
                </div>

                <div className="item">
                    <img src={require('./assets/images/quality.jpg')} alt=""/>
                    
                    <div className="text">
                        <h4>Very High Quality</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quia autem quibusdam, perferendis voluptatem optio deleniti ullam hic commodi quis beatae, impedit voluptatum nam odio recusandae officiis? Similique, quam reiciendis.</p>
                    </div>
                </div>

                <div className="item reverse">
                    <img src={require('./assets/images/personal.jpg')} alt=""/>
                    
                    <div className="text">
                        <h4>Great Staff</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto rem accusantium necessitatibus amet laudantium magni similique, consectetur eius vel a cupiditate pariatur libero quos nihil sed sapiente fuga quam ratione?</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="links">
            <Link to='/shop'>Go To Shop</Link>
            <Link to='/about'>About Quality Closes</Link>
        </div>
    </div>
    )
}

export default App