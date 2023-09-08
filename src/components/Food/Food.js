import React, { useState } from "react";
import "./Food.css";
import demoData from "../../demoData";
import FoodCategory from "../FoodCategory/FoodCategory";
import { Card } from "react-bootstrap";
/**
 * Food component to find foods according to category
 */
const Food = () => {
  const data = demoData;
  const [foods, setFoods] = useState(data);
  const [category, setCategory] = useState("lunch");
  const selectCategory = foods.filter((cat) => cat.catagories === category);
  /**
   * {selectCategory} to filter food accord to category from {category}
   */
  return (
    <div className="container food-header py-5">
        {/* nav {onClick} to select food cards accord to category */}
      <nav>
        <a>Men </a>
        <a>Women</a>
        
      </nav>
      <div className="container py-5">
        <div className="row">
          {foods.map((x,i) => (
            <div className="col-md-4 py-3">
              <Card>
             <Card.Body>
               <Card.Img variant="top w-50 py-3" src={x.img} />
               <Card.Title>
                 {x.title}
               </Card.Title>
               <Card.Text>{x.subtitle}</Card.Text>
               <Card.Text>Type : {x.catagories}</Card.Text>
               <Card.Text>${x.price}</Card.Text>
             </Card.Body>
           </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
