export const CardCharacter=({infoCharacter})=>{
    return (
        <div className="card">
            <div className="img">
                <img src={infoCharacter.image} alt={infoCharacter.name} />
            </div>
            <div className="infoCard">
                <h1>{infoCharacter.name}</h1>
                <p><span>Rol:</span> {infoCharacter.role} </p>
                <p><span>Especie:</span> {infoCharacter.specie}</p>
                <p><span>Estado:</span> {infoCharacter.status}</p>
                <p><span>Universo:</span> {infoCharacter.universe}</p>
            </div>
        </div>
    );
}