import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const TarjetaPlaneta = (props) => {
const {store,actions} = useContext(Context);

const handleFavorite=()=>{
    const fav = {...props}
    actions.addFavRemo(fav)
}


    return (
        <>
            <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" >
                <div className="card text-white mb-3">
                    <figure>
                        <img className="card-img-top imagen" src={props.img} alt={props.name} />
                        <figcaption className="m-2">{props.name}</figcaption>
                        <div className="d-flex justify-content-between">
                            <Link to={'/planeta/' + props.uid}>
                                <button className="btn btn-primary mx-3">Aprende más</button>
                            </Link>
                            <button className="btn btn-outline-warning me-3" onClick={handleFavorite}>
                                <i className="fa-solid fa-heart"></i>
                            </button>
                        </div>
                    </figure>

                </div>
            </div>

        </>

    )

}