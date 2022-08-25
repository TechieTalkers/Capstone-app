import React  from "react"
import Image from "../components/Image"
import {getClass} from "../utils/utils.js"
import {Context} from "../Context"
import "../Style.css"


function Photos(){
    const  {allPhotos}=React.useContext(Context)
const imageElements=allPhotos.map((img, i)=>(
<Image key={img.id} img={img} className={getClass(i)}/>
))
    return(
       <main className="photos">
        {imageElements}
        </main>
    )
}

export default Photos;
