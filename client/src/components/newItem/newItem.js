import { useState } from "react";
import Header from "../header/header";
import "./newItem.css"

export default function NewItem(){
    const [file,setFile]=useState()
    var openFile = function(file) {
        setFile(file.target.files[0]);
        var input = file.target;
    
        var reader = new FileReader();
        reader.onload = function(){
          var dataURL = reader.result;
          var output = document.getElementById('output');
          output.src = dataURL;
        };
        reader.readAsDataURL(input.files[0]);
      };
      let [sizes,setSizes]=useState([]);
      let [colors,setColors]=useState([])
      let [description,setDescription]=useState("")
      function pushSizes(val){
          console.log(val)
        let valFound=sizes.find(size=>size===val);
        if(!valFound){
            if(val!=="All"){
                setSizes([...sizes,val])
                
            }else{
                setSizes([]);
                setSizes(["All"])
            }
        }
        
      }
      function pushColors(val){
        
      let valFound=colors.find(size=>size===val);
      if(!valFound){
          if(val!=="All"){
              setColors([...colors,val])
              
          }else{
              setColors([]);
              setColors(["All"])
          }
      }
      
    }
    console.log(colors)
      function upload(){

      }
     
    return <div className="newitem">
        <Header/>
        <h1 id="title">Upload new product</h1>
        <form onSubmit={()=>upload()}>
            <div>
                {!file?<button>UPLOAD</button>:""}
                {!file?<input id="fileopen" type="file" alt="item" onChange={(e)=>openFile(e)}/>:<img alt="photo" id="output" />}
            </div>
            <input type="text" placeholder="Name of product"/>
            <select  onChange={(e)=>pushSizes(e.target.value)}>
                <option>All</option>
                <option>M</option>
                <option>S</option>
                <option>L</option>
                <option>XL</option>
                <option>2XL</option>
                <option>3XL</option>
            </select>
            <select  onChange={(e)=>pushColors(e.target.value)}>
                <option>All</option>
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Orange</option>
                <option>Pink</option>
                <option>Purple</option>
                <option>Brown</option>
            </select>
            <input type="number" placeholder="Price (200)"/>
            <textarea placeholder="Type description"></textarea>
            <button>ADD PRODUCT</button>
        </form>
    </div>
}