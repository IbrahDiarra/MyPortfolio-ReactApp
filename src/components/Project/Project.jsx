import React from 'react';

import './Project.css';

const project = () => {
    
  return (
    <section className="blogs project-container">
        <h5>Projets</h5>
        <div className="box-container">
             <div class="box">
                <div className='boxs'>
                    <div class="image">
                        
                        <img src="./assets/images/blog-1.jpeg" alt=""/>
                    </div>
                    <div class="content">
                        <div class="tags">
                            <span><i class="fas fa-tag"></i> food</span>
                            <span><i class="fas fa-tag"></i> burgger</span>
                            <span><i class="fas fa-tag"></i> pizza</span>
                        </div>

                        <h3>blog title goes here ..</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, quam voluptatibus! Numquam architecto necessitatibus</p>
                       
                    </div>
                </div>
            </div>
            <div class="box">
                <div className='boxs'>
                    <div class="image">
                        
                        <img src="./assets/images/blog-2.jpeg" alt=""/>
                    </div>
                    <div class="content">
                        <div class="tags">
                            <span><i class="fas fa-tag"></i> food</span>
                            <span><i class="fas fa-tag"></i> burgger</span>
                            <span><i class="fas fa-tag"></i> pizza</span>
                        </div>

                        <h3>blog title goes here ..</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, quam voluptatibus! Numquam architecto necessitatibus</p>
                     
                    </div>
                </div>
            </div>

            <div class="box">
                <div className='boxs'>
                    <div class="image">
                        
                        <img src="./assets/images/blog-3.jpeg" alt=""/>
                    </div>
                    <div class="content">
                        <div class="tags">
                            <span><i class="fas fa-tag"></i> food</span>
                            <span><i class="fas fa-tag"></i> burgger</span>
                            <span><i class="fas fa-tag"></i> pizza</span>
                        </div>

                        <h3>blog title goes here ..</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, quam voluptatibus! Numquam architecto necessitatibus</p>
                       
                    </div>
                </div>
            </div>

           
        </div>

    </section>
  )
}

export default project