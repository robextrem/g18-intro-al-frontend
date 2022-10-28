import { Component, Fragment } from "react";

class Pokemon extends Component {
  render() {
    //console.log(this.props);
    return (
      <Fragment>
        <div className="column is-3">
          <div
            className="card"
            onClick={() => this.props.getPokemon(this.props.name.toLowerCase())}
          >
            <div className="card-image">
              <figure className="image">
                <img src={this.props.image} />
              </figure>
            </div>
            <div className="card-content">{this.props.name}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Pokemon;
