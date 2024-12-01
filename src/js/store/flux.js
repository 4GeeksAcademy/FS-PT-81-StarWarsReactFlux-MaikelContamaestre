const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL: "https://www.swapi.tech/api",
			people:[],
			persona:{},
			planets: [],
			planeta:{},
			species:[],
			specie:{},
			favorito:[],
			datosCombi: []
		},
		actions: {
		
			getPeople: async () =>{
				try {
					const response = await fetch(getStore().URL+'/people')
					if(!response.ok) throw new Error("error obteniendo personas");
					const data = await response.json()
					setStore({people: data.results})
				} catch (error) {
					console.error(error);
				}
				},
				getOnePerson: async (id) =>{
					try {
						const response = await fetch(getStore().URL + '/people/' + id)
						if(!response.ok) throw new Error("error obteniendo a la persona");
						const data = await response.json()
						setStore({persona: data.result})
					} catch (error) {
						console.error(error);
					}
				},
				getPlanets: async () =>{
					try {
						const response = await fetch(getStore().URL+'/planets')
						if(!response.ok) throw new Error("error obteniendo planetas");
						const data = await response.json()
						setStore({planets: data.results})
					} catch (error) {
						console.error(error);
					}
					},
				getOnePlanet: async (id) =>{
						try {
							const response = await fetch(getStore().URL + '/planets/' + id)
							if(!response.ok) throw new Error("error obteniendo al planeta");
							const data = await response.json()
							setStore({planeta: data.result})
						} catch (error) {
							console.error(error);
						}
					},
					getEspecies: async () =>{
						try {
							const response = await fetch(getStore().URL+'/species')
							if(!response.ok) throw new Error("error obteniendo planetas");
							const data = await response.json()
							setStore({species: data.results})
						} catch (error) {
							console.error(error);
						}
						},
					getOneEspecie: async (id) =>{
							try {
								const response = await fetch(getStore().URL + '/species/' + id)
								if(!response.ok) throw new Error("error obteniendo al planeta");
								const data = await response.json()
								setStore({especie: data.result})
							} catch (error) {
								console.error(error);
							}
						},
					addFavRemo: (fav)=>{
						const store = getStore();
						const isFavorito = store.favorito.some(elem=>elem.uid ===fav.uid && elem.name === fav.name)
						if(isFavorito){
							setStore({
								favorito:store.favorito.filter(elem=>!(elem.uid ===fav.uid && elem.name === fav.name))
							})
						}else{
							setStore({favorito: [...store.favorito, fav]})

						}
					},
					combinadoData: () =>{
						const{people,planets,species}= getStore();
						const datosCombi = [
							...people.map(elem => ({ ...elem, category: "personas" })),
							...planets.map(elem => ({ ...elem, category: "planeta" })),
							...species.map(elem => ({ ...elem, category: "especies" }))
						];
						setStore({datosCombi: datosCombi})
						console.log('datos',datosCombi);
						
					}

		}
};
}
export default getState;
