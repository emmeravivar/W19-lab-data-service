export const helperApi =  () => {

//Metodo que será mi petición Fetch con las configuraciones
const customFetch = (endpoint, options) => {

    // Por defecto configuramos nuestras peticiones en formato JSON
    const defaultHeader = {
        accept: "aplication/json"
    }

    //AbortControler <= nos ayuda con las respuestas infinitas o bien con las cancelaciones por parte del usuario
    const controller = new AbortController();
    // en la opciones hacemos uso de la propiedad signal en las options
    options.signal = controller.signal;

    //si el usuario no trae el método por defecto utilizamos el get
    options.method = options.method || "GET"

    //si el usuario expecificó alguna cabeceras (tipo stripe que necesita almacenar datos de seguridad)
    // entonces creamos un nuevo objeto con las cabeceras por defecto más las que trae el header
    // si no se queda las cabeceras simples.
    options.header = options.header? { 
        ...defaultHeader,
        ...options.header
        } : 
        defaultHeader


    //cuando hay una propiedad que van a enviar datos, es necesario enviar el body en formato JSON
    //Cuando recibas datos es posible que no esté el body por lo que si no está lo igual a falso
    options.body = JSON.stringify(options.body) || false
    // Y si éste es falso lo elimine
    if(!options.body) delete options.body // <= nunca se puede enviar el false en body

    // console.log(options)
    // console.log(options)
    //simulando la comunicación con el servidor
    setTimeout(() => controller.abort, 2000);

    //controlando errores y consumiendo la promesa
    return fetch(endpoint,options)
            .then( res => 
                    res.ok 
                    ? res.json()
                    : Promise.reject({
                        err: true,
                        status: res.status || "00",
                        statusText: res.statusText || "Ocurrió un error"
                })
            )
            .catch(err => err)
}

// Método GET Obtener los datos
const methodGet = (url,  options = {}) => customFetch(url, options)

//Método POST Para Crear datos
const methodPost = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options)

}

//Método PUT actulizar datos
const methodPut = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options)
}

//Método DEL eliminar datos
const methodDel = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options)
}

    return {
        methodGet,
        methodPost,
        methodPut,
        methodDel
    }

}