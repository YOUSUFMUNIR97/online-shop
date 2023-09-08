import React, { useEffect, useState } from "react";
import "./Product.css";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * Food component to find foods according to category
 */
const Food = () => {
  // const data = demoData;
  const [showProduct, setShowProduct] = useState([]);

  let getdata = () => {
    axios.get(`https://fakestoreapi.com/products`)
    .then((res) =>{
      console.log(res.data)
      setShowProduct([...res.data])
    }).catch((err)=>{
        console.log(err)
    })
  }

  const navigate = useNavigate();
  let clickcard = (id) => {
    navigate(`/productdetails/${id}`)
  }
  useEffect(()=>getdata(),[])

  // const [category, setCategory] = useState("lunch");
  // const selectCategory = foods.filter((cat) => cat.catagories === category);
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
          {showProduct.map((x,i) => (
            <div className="col-md-4 py-3">
              <Card onClick={()=>clickcard(x.id)} style={{height:"400px"}}>
             <Card.Body>
               <Card.Img style={{height:"200px"}} variant="top w-50 py-3" src={x.image} />
               <Card.Title>
                 {x.title}
               </Card.Title>
               <Card.Text>Type : {x.category}</Card.Text>
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
