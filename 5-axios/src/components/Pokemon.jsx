import { Component } from "react";

class Pokemon extends Component{
    
    render(){
        console.log(this.props);
        return(
            <div className="column is-3">
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img src={this.props.image}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        {this.props.name}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pokemon;