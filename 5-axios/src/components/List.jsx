import { Component } from "react";
import axios from 'axios';
import Pokemon from "./Pokemon";

class List extends Component{

    state = {
        pokemones: []
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

    render(){
        return(
            
        <div className="container">
            <div className="columns is-multiline">
                {
                    this.state.pokemones.map(pokemon => {
                        return (<Pokemon key={pokemon.id} image={pokemon.ThumbnailImage} name={pokemon.name}></Pokemon>)
                    })   
                }
            </div>
        </div>)
    }

}

export default List;