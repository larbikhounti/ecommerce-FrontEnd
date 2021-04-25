import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { AddToBasket } from "../../App";
import InnerImageZoom from "react-inner-image-zoom";
function ItemInfo() {
  const cookies = new Cookies();
  let { myProductCount } = useContext(AddToBasket);
  let [quantity, setQuantity] = useState(1);
  let [color, setColor] = useState("#");
  let [size, setSize] = useState("#");
  if (cookies.get("myBag") === undefined) {
    cookies.set("myBag", [], { path: "/" });
  }
  let { slug } = useParams();
  function AddToBasketClicked(e) {
    let product = productInfo.find((x) => x.slug === slug);

    if (product !== []) {
      product.quantity = quantity;
      product.color = color;
      product.size = size;
      saveToStorage(product, cookies);
      myProductCount();
    }
  }
  function setMyQuantity(e) {
    console.log(e.target.value);
    setQuantity(e.target.value);
  }
  function setMyColor(e) {
    console.log(e.target.value);
    setColor(e.target.value);
  }
  function setMySize(e) {
    console.log(e.target.value);
    setSize(e.target.value);
  }

  let productInfo = [
    {
      slug: "product1",
      id: 0,
      title: "NMD_R1 SHOES",

      categories: ["shoes", "newarrivals", "women", "new arrivals"],
      price: 195.95,
      imageUrl:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/9c8c09c992ae488a94b1ac92009bbf49_9366/ultraboost-21-shoes.jpg",
    },
    {
      id: 1,
      slug: "product2",
      title: "NMD_R545 SHOES",
      price: 1249.95,

      categories: ["shoes", "newarrivals", "women"],
      imageUrl:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/9061a7718c7843668f17ac8a006c6b22_9366/ultraboost-21-shoes.jpg",
    },
    {
      id: 2,
      title: "NMD_R1 SHOES s4 ",
      slug: "product3",

      categories: ["shoes", "newarrivals", "men"],
      price: 1789.95,

      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/431917d3efdb46f0b72cac7c00b20241_9366/NMD_R1_Shoes_White_G55576_01_standard.jpg",
    },
    {
      id: 3,
      slug: "product4",
      title: "FMDZD_R1 SHOES s468",
      price: 1689.95,

      categories: ["shoes", "newarrivals", "women"],
      imageUrl:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/3c7a5a1783ac4716ac82ac7900c4b56c_9366/ultraboost-5.0-dna-shoes.jpg",
    },
    {
      id: 4,
      slug: "product5",
      title: "EMD_R1f5 SHOES s4",
      categories: ["shoes", "newarrivals"],
      price: 1789.95,
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0b49803254284e418fccaaf00111954c_9366/NMD_R1_Shoes_Black_FV9015_01_standard.jpg",
    },
    {
      id: 5,
      slug: "product6",
      title: "GElassic Logo Beanie",
      price: 1569.95,
      categories: ["shoes", "newarrivals"],
      imageUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
    },
    {
      id: 6,
      slug: "product7",
      title: "Classic Logo Beanie",
      price: 42.95,
      categories: ["shoes", "newarrivals"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38277b478a79419abf6da998000ab640_9366/Runfalcon_Shoes_Black_F36218_01_standard.jpg",
    },
    {
      id: 7,
      slug: "product8",
      title: "Classic Logo Beanie",
      price: 1549.95,
      categories: ["shoes", "newarrivals"],
      imageUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg",
    },
    {
      id: 8,
      slug: "product9",
      title: "Classic Logo Beanie",
      price: 1549.95,
      categories: ["shoes", "newarrivals", "women"],
      imageUrl:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/acddb039823945e0a4b9acb000e4108b_9366/ultraboost-21-shoes.jpg",
    },
    {
      id: 9,
      slug: "product10",
      title: "Classic Logo Beanie",
      price: 1549.95,
      categories: ["shoes", "newarrivals", "women"],
      imageUrl:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/88608e80bcf9413ebe39ac6f01271c8d_9366/sl-andridge-shoes.jpg",
    },
    {
      id: 10,
      slug: "product11",
      title: "TENNIS LUXE POLO SHIRT",
      price: 1549.95,
      categories: ["shoes", "newarrivals", "women", "tops"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4da715e4cd364c80a084acd700f4b0bb_9366/Tennis_Luxe_Polo_Shirt_Blue_H56471_21_model.jpg",
    },
    {
      id: 11,
      slug: "product12",
      title: "TENNIS LUXE POLO SHIRT",
      price: 40,
      categories: ["shoes", "newarrivals", "women", "tops"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f447eb65ca9e4c43ad9facd700f42548_9366/Tennis_Luxe_Polo_Shirt_Yellow_H56469_21_model.jpg",
    },
    {
      id: 12,
      slug: "product13",
      title: "TENNIS LUXE POLO SHIRT",
      price: 40,
      categories: ["shoes", "newarrivals", "women", "tops"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a4585753f21f409f8dc2ac7500e483d2_9366/LOUNGEWEAR_Adicolor_Essentials_Tee_Pink_H13877_21_model.jpg",
    },
    {
      id: 13,
      slug: "product14",
      title: "TIRO TRACK PANTS",
      price: 40,
      categories: ["pants and tights", "newarrivals", "women"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c4197b5e74b8415eb319ac9801250dc5_9366/Tiro_Track_Pants_Black_GN5492_21_model.jpg",
    },
    {
      id: 14,
      slug: "product15",
      title: "TIRO TRACK PANTS",
      price: 45,
      categories: ["pants and tights", "newarrivals", "women"],
      imageUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c36745ebf54840f1be6dacbd00eb9a19_9366/Tiro_Track_Pants_White_GN5493_21_model.jpg",
    },
  ];
  //console.log(id);
  return (
    <Container className="mt-5">
      <Link to="/">
        <Button className="w-15 border mb-2" variant="light">
          <span className="text-dark">
            <b>{"<"}</b>
          </span>{" "}
          Back
        </Button>
      </Link>
      {productInfo.map((product, index) => {
        if (slug === product.slug) {
          return (
            <Row key={product.id}>
              <Col md={6}>
                <div className="product-image w-100">
                  <InnerImageZoom
                    src={product.imageUrl}
                    zoomSrc={product.imageUrl}
                  />
                </div>
              </Col>
              <Col md={6}>
                <Form>
                  <h3>{product.title}</h3>
                  <h5>${product.price}</h5>
                  <Form.Group className="mt-5" controlId="formBasicInfo">
                    <Form.Label>Quantity</Form.Label>
                    <br />
                    <Form.Control
                      className="w-25 "
                      as="select"
                      size="md"
                      custom
                      onChange={setMyQuantity}
                    >
                      <option>1 </option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </Form.Control>
                    <br />
                    <Form.Label>Color</Form.Label>
                    <br />
                    <Form.Control
                      className="w-25 "
                      as="select"
                      size="md"
                      custom
                      onChange={setMyColor}
                    >
                      <option>#</option>
                      <option>black</option>
                      <option>blue</option>
                      <option>green</option>
                      <option>red</option>
                    </Form.Control>
                    <br />
                    <Form.Label>Size</Form.Label>
                    <br />
                    <Form.Control
                      className="w-25 "
                      as="select"
                      size="md"
                      custom
                      onChange={setMySize}
                    >
                      <option>#</option>
                      <option>s</option>
                      <option>m</option>
                      <option>lg</option>
                      <option>xl</option>
                      <option>xxl</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formBasicActions">
                    <Button
                      className="w-100"
                      variant="primary"
                      onClick={AddToBasketClicked}
                      p-index={index}
                    >
                      ADD TO CART
                    </Button>
                  </Form.Group>
                  <Form.Group controlId="formBasicActions2">
                    <Button
                      className="w-100"
                      variant="primary"
                      type="submit"
                      onClick={(e) => e.preventDefault()}
                    >
                      Buy it now
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          );
        }
      })}
    </Container>
  );
}
function saveToStorage(product, cookies) {
  let correntBag = cookies.get("myBag");
  correntBag.push(product);
  cookies.set("myBag", correntBag, { path: "/" });
  cookies.set("productCount", correntBag.length, { path: "/" });
}

export default ItemInfo;
