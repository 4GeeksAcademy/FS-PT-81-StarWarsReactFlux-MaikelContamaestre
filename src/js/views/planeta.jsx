import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const TarPlaneta = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions.getOnePlanet(params.uid)
    }, [actions, params.uid])
    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="card p-4 text-white">
                    <div className="d-flex">
                        <figcaption>
                            <h3>
                                {store.planeta?.properties?.name}
                            </h3>
                        </figcaption>
                    </div>
                    <img className=" mb-4 aling-content-center imagen" src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} alt={store.planeta?.properties?.name} />

                    <div>
                        <p>Diametro: {store.planeta?.properties?.diameter}</p>
                        <p>Periodo de orbita: {store.planeta?.properties?.orbital_period}</p>
                        <p>Gravedad: {store.planeta?.properties?.gravity}</p>
                        <p>Poblacion: {store.planeta?.properties?.population}</p>
                        <p>Clima: {store.planeta?.properties?.climate}</p>
                        <p>Terreno: {store.planeta?.properties?.terrain}</p>
                        <p>Superficie de agua: {store.planeta?.properties?.surface_water}</p>

                    </div>
                </div>
            </div>
        </>
    )
}