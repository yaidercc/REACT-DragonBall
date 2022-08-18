import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { CardCharacter } from "./CardCharacter";

export const GridCharacter=({name})=>{
    const {characters, isLoading}= useFetchCharacters(name);

    return (
        <>
            {isLoading && 
                (
                    <div className="loading">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Dragon_Ball_Super.png" alt="dbs imagen"/>
                    </div>
                )
            }
            {
            characters.map(item=>{
                return(
                    <CardCharacter key={item.name} infoCharacter={item}/>
                );
            })
            }
        </>
    );
}