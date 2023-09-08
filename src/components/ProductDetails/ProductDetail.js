import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  let params = useParams();

  const [product, setProductDetail] = useState({});

  let getData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setProductDetail({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => getData(), [])


  return (
    <>
      <div className='row'>
        <div className='col-md-4 col-sm-12 px-5' style={{
          margin:"0px auto"
        }}>
          <p className="d-block" variant="body">
            <img src={product.image} height='400px' width='400px'/>
          </p>
        </div>

        <div className='col-md-8 col-sm-12 px-5'>
          <h2>{product.title ?? ""}</h2>

          <h6 className="d-block" >
            Description : {product.description ?? ""}
          </h6>

          <h6 className="d-block" >
            Price : ${product.price ?? ""}
          </h6>

          <h6 className="d-block" >
            Rating : {product.rating?.rate ?? ""}
          </h6>
        </div>

      </div>
    </>
  );
}