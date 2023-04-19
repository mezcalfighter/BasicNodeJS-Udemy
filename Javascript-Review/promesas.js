/**
 * Promesas
 */
const getData = (error) => new Promise((resolve,reject) => {
        if(!error){
            setTimeout(()=>{
                resolve({
                    nombre:'Emanuel',
                    apellido:'Ortega'
                });
            },3000);
        }else{
            reject('No pudimos obtener los data');
        }
    });

    const getData2 = (error) => new Promise((resolve,reject) => {
        if(!error){
            setTimeout(()=>{
                resolve({
                    nombre:'Cristian',
                    apellido:'Camarena'
                });
            },3000);
        }else{
            reject('No pudimos obtener los data2');
        }
    });
console.log('Inicio');
getData(false)
    .then((data)=>{
        console.log(data);
        return getData2(false);
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>console.error(error));
console.log('Fin');


// Async - Await 
const getData3 = (error) => new Promise((resolve,reject) => {
    if(!error){
        setTimeout(()=>{
            resolve({
                nombre:'Cristian',
                apellido:'Camarena'
            });
        },3000);
    }else{
        reject('No pudimos obtener los data2');
    }
});

const getData4 = (error) => new Promise((resolve,reject) => {
    if(!error){
        setTimeout(()=>{
            resolve({
                nombre:'Cristian',
                apellido:'Camarena'
            });
        },3000);
    }else{
        reject('No pudimos obtener los data2');
    }
});

const main = async () => {
    try{
        let resultado = await getData3(false);
        let resultado2 = await getData4(false);
        console.log(resultado);
        console.log(resultado2);
    }catch(error){
        console.error(error);
    }
}

main();