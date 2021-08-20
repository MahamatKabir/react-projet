import "./featured.css"
import { PlayArrow, InfoOutlined } from "@material-ui/icons"



export default function Featured({ type }) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" >
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="romance">romance</option>
                    </select>
                </div>
            )}
            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className="info">
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api"
                    alt=""
                />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque eveniet dolore quos architecto quas veniam dolorum,
                    maxime iure veritatis corporis quaerat sapiente. Assumenda
                    voluptatibus reiciendis expedita aspernatur! Fuga, voluptatibus tempore!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>

            </div>
        </div>
    )
}
