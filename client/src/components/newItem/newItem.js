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
      let [sizes,setSizes]=useState([])
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
      function upload(){

      }
     
    return <div className="newitem">
        <Header/>
        <h1 id="title">Upload new product</h1>
        <form onSubmit={()=>upload()}>
            <div>
                {!file?<button>UPLOAD</button>:""}
                {!file?<input type="file" alt="item" onChange={(e)=>openFile(e)}/>:<img alt="photo" id="output" />}
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
        </form>
    </div>
}