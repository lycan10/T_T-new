import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import TopDeals from "../../components/topdeals/TopDeals";
import "./products.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import banner from "../../assets/contact.jpg";
import Slider from "react-slick";
import { RxHamburgerMenu } from "react-icons/rx";
import BestSellerCards from "../../constant/bestSellerCards/BestSellerCards";
// import Cards from "../../constant/cards/Cards";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";

import ad1 from "../../assets/ad12.jpeg";
import ad2 from "../../assets/ad6.jpeg";
import ad3 from "../../assets/ad6.jpeg";
import ad4 from "../../assets/ad4.jpeg";
import filter from "../../assets/filter.png";

import Modal from "react-bootstrap/Modal";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import banner2 from "../../assets/5off.png";
import Reviews from "../../components/reviews/Reviews";
import Newsletter from "../../components/newsletter/Newsletter";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import useFetch from "../../hooks/useFetch";
import { STRAPI_SERVER } from "../../functions/strapi";
import Bestseller from "../../components/bestsellers/Bestseller";

import grid from "../../assets/squares-four.svg";
import list from "../../assets/list-bullets.svg";

import ListCard from "../../constant/listCard/ListCard";
import strapi from "../../functions/strapi";

import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import { useStrapi } from "../../hooks/useStrapi";
import Loader from "../../components/loader/Loader";

const Products = () => {
  const [selectedSubcategory, setSelectedSubcategory] =
    useState("All Categories");
  const { subcategory } = useParams();

  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  const { loading, data, error } = useStrapi("products", {
    // "fields[0]": "category",
    // "fields[1]": "subCategory",
    "populate": "*",
    "pagination[start]": 0,
    "pagination[limit]": 999999,
  });

  const [activeModal, setActiveModal] = useState(null);
  const [value, setValue] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleCloseOffCanvas = () => setShowOffCanvas(false);
  const handleShowOffCanvas = () => setShowOffCanvas(true);

  const [displaySection, setDisplaySection] = useState("main");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4); // Large screen
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3); // Medium screen
      } else {
        setSlidesToShow(2); // Small screen
      }
    };

    // Initial setup
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (data) {
      const filteredProducts = subcategory
        ? data.data.filter((product) => product.subCategory === subcategory)
        : data.data;
      setFilteredData(filteredProducts || []); // Ensure filteredData is an array
    }
  }, [data, subcategory]);

  if (loading) return <Loader fullscreen />;
  if (error) return <p>ERROR....</p>;

  if (!data || data === null) {
    return <p>No data available.</p>;
  }

  const goodData = data.data.map((item) => ({
    ...item.attributes,
    id: item.id,
  }));

  const uniqueCategories = [
    ...new Set(goodData.map((product) => product.category)),
  ];
  const uniqueSubcategories = [];

  goodData.forEach((product) => {
    const category = product.category;
    const subCategory = product.subCategory;

    if (!uniqueSubcategories[category]) {
      uniqueSubcategories[category] = [...new Set()];
    }

    if (!uniqueSubcategories[category].includes(subCategory)) {
      uniqueSubcategories[category].push(subCategory);
    }
  });

  const filteredProducts = subcategory
    ? goodData.filter((product) => product.subCategory === subcategory)
    : goodData;

  const handleClose = () => {
    ReactGA.event({
      category: "Button Click",
      action: "Clicked close modal",
      label: "Product Page",
    });
    setActiveModal(null);
  };

  const handleShowModal = (modalId) => {
    ReactGA.event({
      category: "Button Click",
      action: "Clicked on open modal",
      label: "Product Page",
    });
    setActiveModal(modalId);
  };

  const handleIncrease = () => {
    ReactGA.event({
      category: "Button Click",
      action: "Clicked on quantity increase",
      label: "Product Page",
    });
    setValue(value + 1);
  };
  const handleDecrease = () => {
    ReactGA.event({
      category: "Button Click",
      action: "Clicked on quantity decrease",
      label: "Product Page",
    });
    if (value > 1) {
      setValue(value - 1);
    } else {
      setValue(1);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {};

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const navigateToCatalogue = (subCategory) => {
    // Use the URL of the page you want to navigate to
    const newUrl = `/catalogue/${subCategory}`;
    // Redirect to the new page
    window.location.href = newUrl;
  };

  const handlePriceFilter = () => {
    ReactGA.event({
      category: "Button Click",
      action: "Clicked on price filter",
      label: "Product Page",
    });
    // Ensure filteredProducts is an array
    const productsArray = Array.isArray(filteredProducts)
      ? filteredProducts
      : [];

    // Perform filtering based on the selected price range
    const filteredByPrice = productsArray.filter((product) => {
      const productPrice = product.price;

      if (minPrice !== "" || maxPrice !== "") {
        return (
          (!minPrice || productPrice >= parseInt(minPrice)) &&
          (!maxPrice || productPrice <= parseInt(maxPrice))
        );
      }

      return true; // If no price range is selected, show all products
    });

    setFilteredData(filteredByPrice);
  };

  const handleRemovePriceFilter = () => {
    ReactGA.event({
      category: "Button Click",
      action: "Clicked on remove price filter",
      label: "Product Page",
    });

    setMinPrice("");
    setMaxPrice("");
    // Reset filteredData to the original data
    setFilteredData(goodData || []);
  };

  const getData = async (subCategory) => {
    try {
      // Ensure filteredProducts is an array
      const newArray = Array.isArray(filteredProducts) ? filteredProducts : [];

      const filteredBySubcategory = newArray.filter((product) => {
        return product.subCategory === subCategory;
      });

      // You can update the state with the filtered data
      setFilteredData(filteredBySubcategory);
    } catch (error) {
      // Handle any errors that might occur during filtering
      console.error("Error filtering data:", error);
    }
  };

  const toggleSection = (subCategory, event) => {
    ReactGA.event({
      category: "Button Click",
      action: "Clicked on toggle",
      label: "Product Page",
    });
    if (displaySection === "main" || displaySection === "subs") {
      setDisplaySection("subs");
      setSelectedSubcategory(subCategory);

      // Call the getData function with selectedCategory as a parameter
      getData(subCategory);
      handleCloseOffCanvas();
    }

    // Optionally, you can include other logic here
    // const newUrl = `/products/${subCategory}`;
    // window.location.href = newUrl;
  };

  const filteredBrandData = subcategory
    ? goodData.filter((product) => product.subCategory === subcategory)
    : goodData;

  const uniqueBrand = [
    ...new Set(filteredBrandData.map((product) => product.brand)),
  ];

  return (
    <div className="products" id="product">
      <Navbar />
      <div className="product-container">
        {/* <div className="contact-header-image">
          <div className="banner-opacity"></div>
          <img src={banner} alt="" />
          <div className="contact-header-text">
            <h1>Products</h1>
          </div>
        </div> */}
        <div className="products-main-container">
          <div className="products-left">
            <div className="product-left-filter">
              <div className="product-filter-title">
                <RxHamburgerMenu className="product-filter-title-icon" />
                <h1>ALL CATEGORIES</h1>
              </div>
            </div>

            <div className="product-left-categories">
              {uniqueCategories.map((category, index) => (
                <div key={index} className="product-left-categories-container">
                  <Accordion>
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>
                        <h1>{category}</h1>
                      </Accordion.Header>
                      <Accordion.Body>
                        {uniqueSubcategories[category].map(
                          (subcategory, subIndex) => (
                            <div key={subIndex} className="categoryLists">
                              <p
                                onClick={(event) =>
                                  toggleSection(subcategory, event)
                                }
                              >
                                {subcategory}
                              </p>
                            </div>
                          )
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              ))}
            </div>
            <div className="catalogue-left-categories">
              <div className="catalogue-left-categories-container">
                <h1>PRICE</h1>
                <div className="catalogue-price-input">
                  <p>$</p>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    placeholder="Min Price"
                  />
                  <p> - </p>
                  <p> $ </p>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    placeholder="Max Price"
                  />
                </div>
                <div className="product-price-input-submit-container">
                  <div className="product-price-input-submit">
                    <button onClick={handlePriceFilter}>Apply Filter</button>
                  </div>
                  <div className="product-price-input-submit">
                    <button onClick={handleRemovePriceFilter}>
                      Remove Filter
                    </button>
                  </div>
                </div>
              </div>
              <div className="catalogue-left-categories-container">
                <h1>MANUFACTURER</h1>

                <div className="catalogue-manufacturers-input">
                  {uniqueBrand.map((brand, index) => {
                    // Count the occurrences of the brand in the filtered data
                    const brandCount = filteredData.reduce(
                      (count, product) =>
                        product.brand === brand ? count + 1 : count,
                      0
                    );

                    return (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <div className="catalogue-manufacturers-left">
                          <p>{brand}</p>
                        </div>
                        <div className="catalogue-manufacturers-right">
                          <p>({brandCount})</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="product-left-reviews">
              <Reviews />
            </div>
            <div className="product-left-newsletter">
              <Newsletter />
            </div>
          </div>
          <div className="products-right-mains">
            <div
              className="products-filter"
              onClick={() => handleShowOffCanvas()}
            >
              <img src={filter} alt="" />
              <h1>Filter Categories</h1>
            </div>

            {displaySection === "main" && (
              
              <div className="product-right-container">
                  <div className="products-right-bestseller tops">
                  <Bestseller noPad />
                </div>
                <div className="products-right-bestseller tops">
                  <TopDeals noPad />
                </div>
                <div className="products-right">
                  <img src={ad1} alt="" />
                </div>
                <div className="products-right-offers">
                  <div className="products-right-offers1">
                    <img src={ad4} alt="" />
                  </div>
                  <div className="products-right-offers2">
                    <img src={ad2} alt="" />
                  </div>
                </div>
               
                <div className="products-right-deals">
                  <div className="bestsellers product-width"></div>
                </div>
              </div>
            )}
            {displaySection === "subs" && (
              <div className="product-right-container">
                <div className="catalogue-title">
                  <h1>{selectedSubcategory}</h1>
                </div>

                <div className="catalogue-top-filter">
                  <div className="catalogue-top-filter-left">
                    <div className="catalogue-top-filter-options">
                      <div
                        className={`catalogue-top-filter-options-grid ${
                          viewMode === "grid" ? "active" : ""
                        }`}
                        onClick={() => setViewMode("grid")}
                      >
                        <img src={grid} alt="" />
                      </div>
                      <div
                        className={`catalogue-top-filter-options-list ${
                          viewMode === "list" ? "active" : ""
                        }`}
                        onClick={() => setViewMode("list")}
                      >
                        <img src={list} alt="" />
                      </div>
                    </div>
                    <p>Item 1 - 10 0f 13</p>
                  </div>
                </div>
                <div
                  className={
                    viewMode === "grid"
                      ? "bestseller-bottom catalogue-grid"
                      : "catalogue-list"
                  }
                >
                  {filteredData.map((product) => {
                    return (
                      <div key={product.id}>
                        {viewMode === "grid" ? (
                          <BestSellerCards key={product.id} {...product} />
                        ) : (
                          <div className="catalogue-list">
                            <div>
                              <ListCard key={product.id} {...product} />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Offcanvas show={showOffCanvas} onHide={handleCloseOffCanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="products-left show-canva">
            <div className="product-left-filter">
              <div className="product-filter-title">
                <RxHamburgerMenu className="product-filter-title-icon" />
                <h1>ALL CATEGORIES</h1>
              </div>
            </div>

            <div className="product-left-categories">
              {uniqueCategories.map((category, index) => (
                <div key={index} className="product-left-categories-container">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>
                        <h1>{category}</h1>
                      </Accordion.Header>
                      <Accordion.Body>
                        {uniqueSubcategories[category].map(
                          (subcategory, subIndex) => (
                            <div key={subIndex} className="categoryLists">
                              <p
                                onClick={(event) =>
                                  toggleSection(subcategory, event)
                                }
                              >
                                {subcategory}
                              </p>
                            </div>
                          )
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              ))}
            </div>
            <div className="catalogue-left-categories">
              <div className="catalogue-left-categories-container">
                <h1>PRICE</h1>
                <div className="catalogue-price-input">
                  <p>$</p>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    placeholder="Min Price"
                  />
                  <p> - </p>
                  <p> $ </p>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    placeholder="Max Price"
                  />
                </div>
                <div className="product-price-input-submit-container">
                  <div className="product-price-input-submit">
                    <button onClick={handlePriceFilter}>Apply Filter</button>
                  </div>
                  <div className="product-price-input-submit">
                    <button onClick={handleRemovePriceFilter}>
                      Remove Filter
                    </button>
                  </div>
                </div>
              </div>
              <div className="catalogue-left-categories-container">
                <h1>MANUFACTURER</h1>

                <div className="catalogue-manufacturers-input">
                  {uniqueBrand.map((brand, index) => {
                    // Count the occurrences of the brand in the filtered data
                    const brandCount = filteredData.reduce(
                      (count, product) =>
                        product.brand === brand ? count + 1 : count,
                      0
                    );

                    return (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <div className="catalogue-manufacturers-left">
                          <p>{brand}</p>
                        </div>
                        <div className="catalogue-manufacturers-right">
                          <p>({brandCount})</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="product-left-reviews">
              <Reviews />
            </div>
            <div className="product-left-newsletter">
              <Newsletter />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Footer />
    </div>
  );
};

export default Products;
