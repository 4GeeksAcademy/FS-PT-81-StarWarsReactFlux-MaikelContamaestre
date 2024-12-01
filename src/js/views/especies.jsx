import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const TarEspecie = () => {
    const { store, actions } = useContext(Context)
    const params = useParams();

    useEffect(() => {
        actions.getOneEspecie(params.uid)
    }, [actions, params.uid])
    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="card p-4 text-white">
                    <div className="d-flex">
                        <figcaption>
                            <h3>
                                {store.especie?.properties?.name}
                            </h3>
                        </figcaption>
                    </div>
                    <img className=" mb-4 aling-content-center imagen" src={`https://starwars-visualguide.com/assets/img/species/${params.uid}.jpg`} alt={store.especie?.properties?.name} />

                    <div>
                        <p>Clasificación: {store.especie?.properties?.classification}</p>
                        <p>designación: {store.especie?.properties?.designation}</p>
                        <p>Altura promedio: {store.especie?.properties?.average_height}</p>
                        <p>Vida promedio: {store.especie?.properties?.average_lifespan}</p>
                        <p>Color de Cabello: {store.especie?.properties?.hair_colors}</p>
                        <p>Color de piel: {store.especie?.properties?.skin_colors}</p>
                        <p>Color de ojos: {store.especie?.properties?.eye_colors}</p>
                        <p>Idioma: {store.especie?.properties?.language}</p>


                    </div>
                </div>
            </div>
        </>
    )
}