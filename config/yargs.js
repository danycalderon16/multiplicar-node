const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime es consola la tabla de multiplicar', { opciones })
    .command('crear', 'Genera una lista de una tabla de multiplicar', { opciones })
    .help()
    .argv;

module.exports = {
    argv
}