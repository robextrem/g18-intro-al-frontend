import { Component } from "react";
import axios from 'axios';

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
        <ul>
        {
            this.state.pokemones.map(pokemon => {
                return (<li key={pokemon.id}><img src={pokemon.ThumbnailImage}/>{pokemon.name} - {pokemon.number}</li>)
            })   
        }
        </ul>)
    }

}

export default List;