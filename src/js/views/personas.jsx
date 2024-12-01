import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const TarPersona = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    
    useEffect(() => {
        actions.getOnePerson(params.uid)
    }, [actions, params.uid])
    
    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="card text-white p-4">
                    <div className="d-flex">
                        <figcaption>
                            <h3>
                                {store.persona?.properties?.name}
                            </h3>
                        </figcaption>
                    </div>
                    <img className="imagen mb-4" src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}  alt={store.persona?.properties?.name} />

                    <div>
                        <p>Altura: {store.persona?.properties?.height}</p>
                        <p>Peso: {store.persona?.properties?.mass}</p>
                        <p>Color de cabello: {store.persona?.properties?.hair_color}</p>
                        <p>Color de ojos: {store.persona?.properties?.eye_color}</p>
                        <p>Año de nacimiento: {store.persona?.properties?.birth_year}</p>
                        <p>Genero: {store.persona?.properties?.gender}</p>

                    </div>
                </div>
            </div>

        </>
    )
}