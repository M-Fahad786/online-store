import { React } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./home.css"
import Image from "../img/Grocery.png"
import Image3 from "../img/Cart icon.png"
import Image4 from "../img/Rectangle 1.png"
import Image5 from "../img/Rectangle 6.png"
import Image6 from "../img/Rectangle 7.png"
import Image7 from "../img/Rectangle 16.png"
import Image8 from "../img/Rectangle 17.png"
import Image9 from "../img/Rectangle 20.png"
import Image10 from "../img/Rectangle 23.png"

const Home = () => {
    return (
        <div className="container">
            <h1 className="header">SAYLANI WELFARE</h1>
            <img src={Image3} alt="cart" className="cart-img" />
            <p className="sub_para">DISCOUNT STORE</p>
            <img src={Image} alt="grocery" className="grocery-img" />
            <input placeholder="Search by product name" type="text" className="input" />
            <p className="para">Shop by Category</p>
            <div className="middle-content">
                <img src={Image4} alt="grocery" className="images-food1" />
                <img src={Image5} alt="image1" className="images-food2" />
                <img src={Image6} alt="image2" className="images-food3" />
                <img src={Image7} alt="image3" className="images-food4" />
            </div>
            <div className="items">
                <div>
                    <img src={Image8} alt="image8" className="images-foods" />
                    <p>Meat</p>
                    <h4>800kg</h4>
                </div>
                <div>
                    <img src={Image9} alt="image9" className="images-foods" />
                    <p>Chicken</p>
                    <h4>600kg</h4>
                </div>
                <div>
                    <img src={Image10} alt="image10" className="images-foods" />
                    <p>Lantins</p>
                    <h4>80kg</h4>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Home