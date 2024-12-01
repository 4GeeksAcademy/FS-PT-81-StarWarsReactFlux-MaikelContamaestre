import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Busqueda } from "./modalSearch.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	
	const [show,setShow]= useState(false)
	const handleClose= () => setShow(false)
	const handleShow= () => setShow(true)

	return (

		<>
		<nav className="navbar  navbar-expand-lg bg-body-black text-white">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand  ms-4 mb-0 "> <img src="https://img.icons8.com/color/512/star-wars.png" alt="Star Wars" width="100" height="100" /></span>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item ">
							<Link to="/" className="nav-link active text-white" aria-current="page">Home</Link>
						</li>
						<li className="nav-item dropdown">
							<Link className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Tarjetas Favoritas
							</Link>
							<ul className="dropdown-menu">
								{store.favorito?.length === 0 ? (
									<p>No tienes favoritos todavía.</p>) : (store.favorito?.map((fav, id) => (
										<li key={id}
											className="dropdown-item d-flex justify-content-between align-items-center"
										>
											{fav.name}
											<button className="btn btn-secondary fa-solid fa-trash text-black ms-4 text-center btn-sm" onClick={() => actions.addFavRemo(fav)}></button>
										</li>
									))
								)}
							</ul>
						</li>
						<li>
							<button className="btn btn-dark text-center" onClick={handleShow}> Search </button>
						</li>
					</ul>
					
				</div>
			</div>
		</nav>
		<Busqueda show={show} handleClose={handleClose}/> 
		</>

	);
};


