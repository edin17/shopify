import Header from "../header/header";
import "./home.css";

export default function Home(){
    let arr=[1,1,1,1,1,1,1];
    return <div className="home">
        <Header/>
        <main>
            <section className="top-items">
                {arr.map(el=>{
                    return <div className="top-item">
                    <div className="image-container">
                        <img src="/redshirt.jpg" alt="item"/>
                    </div>

                    <h3>Name of product</h3>
                    <p id="sizes">Aviable sizes:</p>
                    <p id="colors">Aviable colors:</p>
                    <p id="price">000$</p>
                </div>
                })}

            </section>
            <section className="all-items">
 
            </section>
        </main>
    </div>
}