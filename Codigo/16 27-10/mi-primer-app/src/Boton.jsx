



function Boton ({numero,titulo = "default"}) {
    return (
<button  onClick = {function(){
    alert("hiciste click")
}} >{numero} - {titulo}</button>
    )
}


/* function Boton (props) {
    return (
<button>{props.numero} - {props.titulo}</button>
    )
} */

export default Boton;