import React, { useEffect, useState } from "react";
import "./MedibazarHome.css";
import { Link } from "react-router-dom";
import MedibazarShop from "./MedibazarShop/MedibazarShop";
import images01 from "../../../images/shop cart/iconfinder_Shopping cart_20296.png";
import Cart from "./MedibazarShop/Cart/Cart";
import images02 from "../../../images/icon/icons8-shopping-cart.gif";
import load1 from "../../../images/icon/gif2.gif";
import load2 from "../../../images/icon/image_processing20190910-766-z53wuz.gif";

import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../../utilities/databaseManager";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import axios from "axios";
import SearchField from "react-search-field";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";
import CategoryButton from "./CategoryButton";
import Navbar from "../../Home/Navbar/Navbar";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(27),
      height: theme.spacing(16),
    },
  },
}));

const MedibazarHome = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(true);
  const [cat, setCat] = useState(false);
  //const dispatch=useDispatch();
  // const productList =useSelector(state=>state.productList);
  // console.log("sdg",productList);
  // const {loading,error,products}=productList
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("/category")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    console.log("productKeys Home", productKeys);
    if (products.length > 0) {
      const previousCart = productKeys.map((existingKey) => {
        const product = products.find((pd) => pd._id === existingKey);
        product.quantity = savedCart[existingKey];
        return product;
      });
      setCart(previousCart);
    }
  }, [products]);

  //console.log("producys",products);
  const [categoryWord, setCategoryWord] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const CcategoryButton = (category) => {
    console.log(category);
    const searchWord = category;
    if (searchWord === "ALL PRODUCTS") {
      setCat(false);
    } else {
      setCategoryWord(searchWord);
      const newFilter = products.filter((value) => {
        return value.Category.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === "") {
        setCategoryData([]);
      } else {
        setCategoryData(newFilter);
      }
      setCat(true);
    }

    console.log("sdfdfs  !", categoryData);
  };

  const handleAddProduct = (product) => {
    setShowCart(false);
    const ToBeAddedKey = product._id;
    const sameProduct = cart.find((pd) => pd._id === ToBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd._id !== ToBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    console.log("Product Added", product);
    setCart(newCart);

    addToDatabaseCart(product._id, count);
  };

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    console.log(searchWord, "  sf  ", filteredData);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center algin-item-center">
        
        </div>
      ) : (
        <>
          <Navbar></Navbar>
          <div className="row">
            <div className="col-md-2 positionSame">
              <div className="searchInputs">
                <input
                  type="text"
                  placeholder="....search"
                  value={wordEntered}
                  onChange={handleFilter}
                />
                <div className="searchIcon">
                  {filteredData.length === 0 ? (
                    <SearchIcon />
                  ) : (
                    <CloseIcon id="clearBtn" onClick={clearInput} />
                  )}
                </div>
              </div>

              <h4>Category</h4>
              <div className={classes.root}>
                <Paper
                  style={{ minHeight: "400px", margin: "2px" }}
                  variant="outlined"
                  className="text-center"
                >
                  {category.map((pro) => (
                    <CategoryButton
                      pro={pro}
                      key={pro._id}
                      showAddToCart={true}
                      CcategoryButton={CcategoryButton}
                    ></CategoryButton>
                  ))}
                </Paper>
              </div>
            </div>
            <div className="col-md-10 giituu">
              <Paper variant="outlined">
                <div>
                  {wordEntered.length > 0 ? (
                    <div>
                      <div>
                        <div className="navbar2">
                          <Link to="#" className="menu-bars">
                            <IconButton
                              className="svgicons"
                              id="menuBtn"
                              color="primary"
                              onClick={showSidebar}
                              aria-label="add to shopping cart"
                            >
                              <AddShoppingCartIcon />
                            </IconButton>

                            <StyledBadge
                              id="menuBtn2"
                              badgeContent={cart.length}
                              color="secondary"
                            ></StyledBadge>
                          </Link>
                          <h5 id="ss">View</h5>
                        </div>
                        <nav
                          className={
                            sidebar ? "pt-5 xx nav-menu active" : "nav-menu"
                          }
                        >
                          <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle">
                              <Link to="#" className="pt-3 menu-bars">
                                <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>
                              </Link>
                            </li>
                            <div>
                              <Cart cart={cart}>
                                <Link to="/orderreview">
                                  <Button variant="contained" color="primary">
                                    Review Order
                                  </Button>
                                </Link>
                              </Cart>
                            </div>
                          </ul>
                        </nav>
                      </div>

                      <div className="medibazarhome">
                        <h4 className="hh4">All Products</h4>

                        <div className="d-flex justify-content-around row ">
                          {filteredData.map((pro) => (
                            <MedibazarShop
                              pro={pro}
                              key={pro._id}
                              showAddToCart={true}
                              handleAddProduct={handleAddProduct}
                            ></MedibazarShop>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : categoryData.length > 0 && cat ? (
                    <div>
                      <div>
                        <div className="navbar2">
                          <Link to="#" className="menu-bars">
                            <IconButton
                              className="svgicons"
                              id="menuBtn"
                              color="primary"
                              onClick={showSidebar}
                              aria-label="add to shopping cart"
                            >
                              <AddShoppingCartIcon />
                            </IconButton>

                            <StyledBadge
                              id="menuBtn2"
                              badgeContent={cart.length}
                              color="secondary"
                            ></StyledBadge>
                          </Link>
                          <h5 id="ss">View</h5>
                        </div>
                        <nav
                          className={
                            sidebar ? "xx pt-5 nav-menu active" : "nav-menu"
                          }
                        >
                          <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle">
                              <Link to="#" className="pt-3 menu-bars">
                                <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>
                              </Link>
                            </li>
                            <div>
                              <Cart cart={cart}>
                                <Link to="/orderreview">
                                  <Button variant="contained" color="primary">
                                    Review Order
                                  </Button>
                                </Link>
                              </Cart>
                            </div>
                          </ul>
                        </nav>
                      </div>

                      <div className="medibazarhome">
                        <h4 className="hh4">All Products</h4>

                        <div className="d-flex justify-content-around row ">
                          {categoryData.map((pro) => (
                            <MedibazarShop
                              pro={pro}
                              key={pro._id}
                              showAddToCart={true}
                              handleAddProduct={handleAddProduct}
                            ></MedibazarShop>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : cat ? (
                    <div>
                      <Paper variant="outlined">
                        <div>
                          <div>
                            <div className="navbar2">
                              <Link to="#" className="menu-bars">
                                <IconButton
                                  className="svgicons"
                                  id="menuBtn"
                                  color="primary"
                                  onClick={showSidebar}
                                  aria-label="add to shopping cart"
                                >
                                  <AddShoppingCartIcon />
                                </IconButton>

                                <StyledBadge
                                  id="menuBtn2"
                                  badgeContent={cart.length}
                                  color="secondary"
                                ></StyledBadge>
                              </Link>
                              <h5 id="ss">View</h5>
                            </div>
                            <nav
                              className={
                                sidebar ? "pt-5 xx nav-menu active" : "nav-menu"
                              }
                            >
                              <ul
                                className="nav-menu-items"
                                onClick={showSidebar}
                              >
                                <li className="navbar-toggle">
                                  <Link to="#" className="pt-3 menu-bars">
                                    <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>
                                  </Link>
                                </li>
                                <div>
                                  <Cart orderReview={false} cart={cart}>
                                    <Link to="/orderreview">
                                      <Button
                                        variant="contained"
                                        color="primary"
                                      >
                                        Review Order
                                      </Button>
                                    </Link>
                                  </Cart>
                                </div>
                              </ul>
                            </nav>
                          </div>

                          <div className="medibazarhome">
                            <h4 className="hh4">All Products</h4>
                            <div className="d-flex justify-content-around row ">
                              <h1>Sorry Cannot Find Any Products</h1>
                            </div>
                          </div>
                        </div>
                      </Paper>
                    </div>
                  ) : (
                    <div>
                      <Paper variant="outlined">
                        <div>
                          <div>
                            <div className="navbar2">
                              <Link to="#" className="menu-bars">
                                <IconButton
                                  className="svgicons"
                                  id="menuBtn"
                                  color="primary"
                                  onClick={showSidebar}
                                  aria-label="add to shopping cart"
                                >
                                  <AddShoppingCartIcon />
                                </IconButton>

                                <StyledBadge
                                  id="menuBtn2"
                                  badgeContent={cart.length}
                                  color="secondary"
                                ></StyledBadge>
                              </Link>
                            </div>
                            <nav
                              className={
                                sidebar ? "pt-5 xx nav-menu active" : "nav-menu"
                              }
                            >
                              <ul
                                className="nav-menu-items"
                                onClick={showSidebar}
                              >
                                <li className="navbar-toggle">
                                  <Link to="#" className="pt-3 menu-bars">
                                    <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>
                                  </Link>
                                </li>
                                <div>
                                  <Cart orderReview={false} cart={cart}>
                                    <Link to="/orderreview">
                                      <Button
                                        variant="contained"
                                        color="primary"
                                      >
                                        Review Order
                                      </Button>
                                    </Link>
                                  </Cart>
                                </div>
                              </ul>
                            </nav>
                          </div>

                          <div className="medibazarhome">
                            <h4 className="hh4">All Products</h4>
                            <div className="d-flex justify-content-around row ">
                              {products.map((pro) => (
                                <MedibazarShop
                                  pro={pro}
                                  key={pro._id}
                                  showAddToCart={true}
                                  handleAddProduct={handleAddProduct}
                                ></MedibazarShop>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Paper>
                    </div>
                  )}
                </div>
              </Paper>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MedibazarHome;
