/**
 * Callbacks - funciones que se pasan como 
 *             parametro a otras funciones
 */

// cb -> callback
const suma = (a,b, cb) => {
    cb(a+b)
}


const imprimir = (data) => console.log(data);

suma(2,3,imprimir(resultado));


/**
 * 
 */

const getData = (cb,cbError) => {
    if(false){
        setTimeout(()=>{
            cb({
                nombre:'Emanuel',
                apellido:'Ortega',
                municipio:'Tlajomulco',
                edad:26
            })
        },3000);
    }else{
        cbError(new Error('No se pudo Obtener el mensaje'));
    }
};

const imprimirData = (data) => console.log(data);
const errorHandler = (error) => console.log(error);

getData(imprimirData, errorHandler);

