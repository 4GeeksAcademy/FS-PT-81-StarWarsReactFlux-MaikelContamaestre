import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Busqueda = ({show,handleClose}) =>{
    const { store, actions } = useContext(Context)
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e) => {
		e.preventDefault()
		actions.combinadoData();
		const filteredData = store.datosCombi.filter(item =>
			(item.name || item.title).toLowerCase().includes(searchTerm.toLowerCase())
		);
	e
	}

    return(
<div className="modal-dialog modal-dialog-centered" >
  <div className={`modal fade ${show ? "show d-block" : "d-none"}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title text-white fs-5" id="staticBackdropLabel">Busqueda</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
        </div>
        <div className="modal-body text-white my-3">
          <form className="d-flex flex-column" role="search" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="btn btn-outline-secondary my-3" type="submit">Search</button>
            <ul className="mt-3 list-group overflow-auto" style={{ maxHeight: "200px" }}>
              {store.datosCombi
                .filter(item =>
                  (item.name ).toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item, index) => (
                  <li key={index}>
                    <Link to={`/${item.category}/${item.uid}`}>{item.name}</Link>
                    
                    {item.name }</li> 
                ))}
            </ul>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" onClick={handleClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
</div> 
    )
}