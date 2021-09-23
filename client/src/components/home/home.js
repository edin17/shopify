import Header from "../header/header";
import "./home.css";

export default function Home(){
    let arr=[1,1,1,1,1,1,1,2,2,2,2];
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
                    <p id="sizes">Available sizes:</p>
                    <p id="colors">Available colors:</p>
                    <p id="price">000$</p>
                </div>
                })}

            </section>
            <section className="all-items">
            {arr.map(item=>{
                return  <div className="top-item item">
                    <div className="image-container">
                        <img src="/redshirt.jpg" alt="item"/>
                    </div>

                    <h5>Name of product</h5>
                    <p id="price">000$</p>
                </div>
            })}

            </section>
        </main>
    </div>
}