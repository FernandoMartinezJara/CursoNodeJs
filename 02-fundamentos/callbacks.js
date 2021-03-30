
const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout(() => {
        callback(usuario)
    }, 2000)
}

getUsuarioById(1520, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre);
});