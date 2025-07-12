import React from 'react';
import './tags.css';

const Tags = () => {
  return (
    <div className='container'>
      <div className='my_posts'>
        <h1>Tags :</h1>
      </div>
      <div className='links-container'>
        <div className="links">
          <div className="tag-item">
            <a href="#">Apple<sup className="tag-power">5</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">C++<sup className="tag-power">3</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">React.js<sup className="tag-power">4</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">Git<sup className="tag-power">2</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">Data Science<sup className="tag-power">6</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">Python<sup className="tag-power">7</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">Node.js<sup className="tag-power">2</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">Machine Learning<sup className="tag-power">1</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">GitHub<sup className="tag-power">3</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">Databases<sup className="tag-power">4</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">CV<sup className="tag-power">4</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">Golang<sup className="tag-power">4</sup></a>
          </div>
          <div className="tag-item">
            <a href="#">Blender<sup className="tag-power">4</sup></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tags;
