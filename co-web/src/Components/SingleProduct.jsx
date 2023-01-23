import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import { BiRupee } from "react-icons/bi";
import { Rating } from "react-simple-star-rating";
// import Spinner from 'react-bootstrap/Spinner';
import Header from "./Header";
import Footer from "./Footer";
import Copyright from "./Copyright";

const SingleProduct = () => {
     const [iteam, SetIteam] = useState([]);
     const [SingleImg, SetSingleImg] = useState([]);
     const [currentImage, setCureentImage] = useState([]);
     const [condition, setcondition] = useState(false);
     // const [img1,setimg1] = useState([]);

     const { id } = useParams();

     useEffect(() => {
          axios.get(`https://dummyjson.com/products/${id}`).then((data) => {
               SetIteam(data.data);
               SetSingleImg(data.data.images);
               setCureentImage(data.data.thumbnail);
               setcondition(true);
          });
     }, []);
     if (condition) {
          return (
               <div className="bg-light">
                    <Header />
                    <Container>
                         <Row className="mt-5 s-iteam">
                              <div className="col-6">
                                   <img
                                        style={{ width: "550px", height: '400px' }}
                                        src={currentImage}
                                   ></img>
                                   <div className="d-flex">
                                        {
                                             SingleImg.map((s) => (
                                                  <div onClick={() => setCureentImage(s)}>
                                                       <img src={s} className="s-img mx-3" alt="" />
                                                  </div>
                                             ))
                                        }
                                   </div>
                                   <div className="d-flex my-3">
                                        {
                                             SingleImg.map((i) => {
                                                  <div onClick={() => setCureentImage(i)}>
                                                       <img
                                                            style={{
                                                                 width: "80px",
                                                                 height: "80px",
                                                                 margin: "5px",
                                                                 border: "1px solid black",
                                                            }}
                                                            src={i}
                                                       ></img>
                                                  </div>
                                             })
                                        }
                                   </div>
                              </div>
                              <div className="col-6">
                                   <h4>{iteam.title}</h4>
                                   <h5 style={{ fontSize: "36px" }}>{iteam.title} {iteam.description}</h5>
                                   <p style={{ color: "#007185" }}>Brand : {iteam.brand}</p>
                                   <p>
                                        <Rating
                                             initialValue={iteam.rating}
                                             readonly={true}
                                             allowFraction
                                        />
                                   </p>
                                   <p style={{ color: "red", fontWeight: "600" }}>Deal of the Day</p>
                                   <p style={{ fontSize: "35px", color: "red" }}>
                                        -{iteam.discountPercentage}%{" "}
                                        <span style={{ color: "black", fontSize: "20px" }} className="ms-3">
                                             <span style={{ fontSize: "30px" }}>Price :- </span>
                                             <span style={{ fontSize: "30px" }}>{iteam.price}</span>
                                             <span style={{ fontSize: "30px" }}>.00</span>
                                             {/* <BiRupee style={{ fontSize: "30px" }}/> */}
                                             <span style={{ fontSize: "30px" }}>$</span>
                                        </span>
                                   </p>
                                   <p>Inclusive of all taxes</p>
                                   <button className="btn btn-warning">Add to wishlist</button>
                                   <button className="btn btn-success ms-3">Add to Cart</button>
                              </div>
                         </Row>
                    </Container>
                    <Footer />
                    <Copyright/>
               </div>
          )
     }
     else {
          return (
               <>

                    <div class="text-center spinner">
                         <div class="spinner-border" role="status">
                              <span class="sr-only"></span>
                         </div>
                         <h1>Loding.....</h1>
                    </div>
               </>
          )

     }
}

export default SingleProduct;