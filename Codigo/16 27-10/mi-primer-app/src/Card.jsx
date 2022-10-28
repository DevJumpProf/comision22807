



function Card ({nombre,fechaNacimiento,clubes,cromo}){

    return(
        <div>
            <h1>{nombre}</h1>
            <p>{fechaNacimiento}</p>
            <p>{clubes}</p>
            <small style={{backgroundColor:"blue"}}>
                {cromo?"esta figu es cromo 🌟": " No es cromo 😒​"}
                </small>
        </div>
    )

}

export default Card