import { useState } from "react";
import { AddCharacter } from "./components/AddCharacter";
import { GridCharacter } from "./components/GridCharacter";
import { FaSortAlphaDown,FaSortAlphaUp } from 'react-icons/fa';

export const DBS=()=>{
    const [character, setCharacter] = useState(["Gohan"]);

    const onAddCharacter=(name)=>{
        if(character.includes(name))return;
        setCharacter([name, ...character]);
    }
    
    return(
        <>
            <header>
                <nav className="navbar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Dragon_Ball_Super.png" alt="dbs imagen"/>
                </nav>
                <AddCharacter addCharacter={onAddCharacter}/>
            </header>
            <div className="container-cards" >
                {
                    character.map(item=>{
                        return(
                            <GridCharacter key={item} name={item}/>
                        );
                    })
                }
            </div>
        </>
    );
}