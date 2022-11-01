//function Personaje({image,name}){
const Personaje = ({image,name}) => {
    return(
        <div>
            <img src={image}/>
            <b>{name}</b>
        </div>
    );
}

export {Personaje};