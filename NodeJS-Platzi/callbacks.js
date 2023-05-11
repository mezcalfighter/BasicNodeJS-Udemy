function hola(nombre, miCallback){
    setTimeout(()=>{
        console.log(`Hola ${nombre}`);
        miCallback();
    },1000);
}

function adios(nombre, otroCallback){
    setTimeout(()=>{
        console.log(`Adios ${nombre}`);
        otroCallback();
    },1000);
}

console.log("Iniciando Proceso");
hola("Emanuel",function(){
    adios("Emanuel",()=>{
        console.log("Terminando Proceso");
    })
});