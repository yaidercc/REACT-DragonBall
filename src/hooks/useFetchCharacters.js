import {
    useEffect,
    useState
} from "react"
import {
    peticion
} from "../helpers/getCharacter";


export const useFetchCharacters = (name) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getInfoCharacter = async () => {
        const character = await peticion(name);
        setLoading(false);
        if (character.length==0) return;
        setCharacters(character);
    }

    useEffect(() => {
        getInfoCharacter();
    }, [])


    return {
        characters,
        isLoading
    }
}