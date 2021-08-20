import "./listitem.css"
import {useState} from "react";
import { PlayArrow, Add , ThumbUpAltOutlined, ThumbDownOutLined } from "@material-ui/icons"
export default function Listitem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="listitem"
             style={{left: isHovered && index * 225 -50}}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className="itemInfo">
                <PlayArrow />
                <Add />
                <ThumbUpAltOutlined />
               
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
            </div>
            <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nulla nobis enim consequatur ad! Consequatur, 
                totam odio libero ducimus delectus eius voluptatum aliquam iusto sint animi quaerat dolore ex amet!
            </div>
            <div className="genre">Action</div>

        </div>
    )
}
