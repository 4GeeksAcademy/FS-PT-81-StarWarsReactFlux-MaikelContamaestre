import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { TarjetaPersona } from "../component/cardPersona.jsx";
import { TarjetaPlaneta } from "../component/cardPlaneta.jsx";
import { TarjetaEspecie } from "../component/cardEspecie.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context)

	return (

		<div className="container">
			<div className="accordion accordion-flush" id="accordionFlushExample">
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
							Personas
						</button>
					</h2>
					<div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
						<div className="accordion-body text-center">
							<section>
								<div className="row">
									{
										store.people?.map(elem => <TarjetaPersona key={elem.uid} name={elem.name} uid={elem.uid} img={`https://starwars-visualguide.com/assets/img/characters/${elem.uid}.jpg`} />)
									}
								</div>
							</section>
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
							Planetas
						</button>
					</h2>
					<div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
						<div className="accordion-body text-center">
							<section>
								<div className="row ">
									{
										store.planets?.map(elem => <TarjetaPlaneta key={elem.uid} name={elem.name} uid={elem.uid} img={`https://starwars-visualguide.com/assets/img/planets/${elem.uid}.jpg`} />)
									}
								</div>
							</section>
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
							Especies
						</button>
					</h2>
					<div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
						<div className="accordion-body text-center">
							<section>
								<div className="row ">
									{
										store.species?.map(elem => <TarjetaEspecie key={elem.uid} name={elem.name} uid={elem.uid} img={`https://starwars-visualguide.com/assets/img/species/${elem.uid}.jpg`} />)
									}
								</div>
							</section>

						</div>
					</div>
				</div>
			</div>

		</div>
	);


}
