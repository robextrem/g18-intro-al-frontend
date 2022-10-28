import { Component } from "react";
import axios from 'axios';
import Pokemon from "./Pokemon";

class List extends Component{

    state = {
        pokemones: [],
        resultados:[]
    }

    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.buscar = this.buscar.bind(this);
        this.agua = this.agua.bind(this);
    }

    componentDidMount(){        
        axios.get('https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json')
        .then((response)=>{
            this.setState({pokemones:response.data, resultados:response.data});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    buscar(event){
        let q = event.currentTarget.value.toLowerCase();
        let filtrados = this.state.pokemones.filter((pokemon) =>{
            return pokemon.name.toLowerCase().includes(q);
        });
        this.setState({resultados: filtrados});
        //console.log(resultados);
    }

    agua(event){
        let filtrados = this.state.pokemones.filter((pokemon) =>{
            return pokemon.type.includes("water");
        });
        this.setState({resultados: filtrados});
        //console.log(resultados);
    }


    render(){
        return(
            <div className="container">
               <div className="mb-5">
                    <input onKeyUp={this.buscar} type="text" placeholder="Buscar..." className="input"></input>
               </div>
               <button onClick={this.agua} className="button is-link">Ver pokemones AGUA</button>
                <div className="columns is-multiline">
                    {
                        this.state.resultados.map(pokemon => {
                            return (<Pokemon key={pokemon.id} image={pokemon.ThumbnailImage} name={pokemon.name}></Pokemon>)
                        })   
                    }
                </div>
            </div>
        )
    }

}

export default List;