export const peticion = async (name)=>{
    const url = `https://dragon-ball-super-api.herokuapp.com/api/characters`;
    const peticion = await fetch(url);
    const data = await peticion.json();

    // Extraemos los personajes que coincidan con la busqueda y sacamos solo la informacion necesaria

    const result = data.filter(item=>new RegExp(name).test(item.name))
    .map(item=>({
        name: item.name,
        specie: item.specie,
        role: item.role,
        universe: item.universe,
        status: item.status,
        image:item.imageUrl
    }));

    // Se retorna la info
    return result;
}