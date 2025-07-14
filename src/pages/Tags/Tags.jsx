import React from "react";
import "./tags.css";
import Navbar from "../../components/Navbar";

const tags = [
  { name: "Apple", power: 5 },
  { name: "React.js", power: 4 },
  { name: "AI", power: 1 },
  { name: "Personal Projects", power: 5 },
  { name: "JavaScript", power: 8 },
  { name: "Python", power: 7 },
  { name: "C++", power: 3 },
  { name: "Data Science", power: 6 },
  { name: "Git", power: 2 },
  { name: "Node.js", power: 2 },
  { name: "Machine Learning", power: 1 },
  { name: "GitHub", power: 3 },
  { name: "Databases", power: 4 },
  { name: "Cv", power: 4 },
  { name: "Golang", power: 4 },
  { name: "Blender", power: 4 },
  { name: "Components Library", power: 3 },
];

const Tags = () => {
  return (
    <>
      <div className="container">
        <div className="my_posts">
          <h1>Tags :</h1>
        </div>
        <div className="links-container">
        <div className="links">
          {tags.map((tag, index) => (
            <div className="tag-item" key={index}>
              <a href="#">
                {tag.name}
                <sup className="tag-power">{tag.power}</sup>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default Tags;
