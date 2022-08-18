import { useState } from "react";

export const AddCharacter=({addCharacter})=>{
    const [character, setCharacter] = useState("");

    const onChangeInput=(event)=>{
        setCharacter(event.target.value);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        const nameCharacter=firstCapitalize(character.trim());
        if(nameCharacter.length<2) return;
        addCharacter(nameCharacter);
        setCharacter("");
    }

    const firstCapitalize=(word="")=>{
        // Separa el string por espacios y pone cada primer letra en mayuscula
        const newWord=word.split(" ").map(el=>{
            return el.charAt(0).toUpperCase() + el.slice(1);
        }).join(" ");
        return newWord;
    }

    return(
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Ingresa el nombre del personaje"
            onChange={onChangeInput}
            value={character}
            />
        </form>
    );
}