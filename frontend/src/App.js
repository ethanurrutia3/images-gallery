import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import {Container, Row, Col} from 'react-bootstrap'; 

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const handSearchSubmit = (e) => {
    e.preventDefault();
    
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{...data, title: word},...images,]) //add new imaage to the beginning of the array and adding a title attribute to the end of the json data for our new entry
        
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handSearchSubmit} />
      {/* {images.length>0 && <ImageCard image={images[0]} />} */}
      <Container className="mt-4"> 
        <Row xs = {1} md = {2} lg = {3}>
          {images.map((image, i) => {
            return(
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage = {handDeleteImage} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
