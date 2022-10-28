import { Component } from "react";
import axios from 'axios';
import Pokemon from "./Pokemon";

class List extends Component{

    state = {
        pokemones: [],
    }

    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.buscar = this.buscar.bind(this);
    }

    componentDidMount(){        
        axios.get('https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json')
        .then((response)=>{
            this.setState({pokemones:response.data});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    buscar(event){
        let q = event.currentTarget.value;

        let resultado = this.state.pokemones.filter((pokemon)=>{
            return pokemon.name.toLowerCase().includes(q.toLowerCase());
        });
        this.setState({
            pokemones: resultado
        })
    }

    render(){
        return(
            <div className="container">
               <div class="mb-5">
                    <input onChange={this.buscar} type="text" placeholder="Buscar..." className="input"></input>
               </div>
                <div className="columns is-multiline">
                    {
                        this.state.pokemones.map(pokemon => {
                            return (<Pokemon key={pokemon.id} image={pokemon.ThumbnailImage} name={pokemon.name}></Pokemon>)
                        })   
                    }
                </div>
            </div>
        )
    }

}

export default List;