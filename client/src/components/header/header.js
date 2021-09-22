import "./header.css";
import {IoShirt} from "react-icons/io5";
export default function Header(){

    return <header>
        <IoShirt size="32px"/>
        <h1>ED SHOP</h1>
        <nav>
            <a href="http://localhost:3000/">Home</a>
            <a href="http://localhost:3000/order">Order</a>
            <a>Contact</a>   
        </nav>
    </header>
}