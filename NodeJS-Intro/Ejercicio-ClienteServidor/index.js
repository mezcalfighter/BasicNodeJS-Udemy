const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const main = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character');
    let {data:{results}} = response;
    let keysObject = Object.keys(results[0]);
    let usedKeysObject = keysObject.splice(0,4).join(',') + '\n';
    let chatacters = results.map((character)=>{
        return {
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species
        }
    }).map((character)=>Object.values(character).join(','))
    .join('\n');
    let chatactersWithHeaders = usedKeysObject.concat(chatacters);
    // console.log(path.join(__dirname,'data.csv'));
    await fs.writeFile(path.join(__dirname,'data.csv'),chatactersWithHeaders);
    //console.log(chatactersWithHeaders);
}

main();