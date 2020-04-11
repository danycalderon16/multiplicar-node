//requireds
const fs = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un número`);
            return
        }
        console.log('==============='.green);
        console.log(`  Tabla del ${base}`.green);
        console.log('==============='.green);
        let data = '';

        for (let i = 1; i <= limite; i++)
            data += (`${base} x ${i} = ${base*i} \n`.red);

        resolve(console.log(data));
    });
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un número`);
            return
        }
        let data = '';

        for (let i = 1; i <= limite; i++)
            data += (`${base} x ${i} = ${base*i} \n`);

        fs.writeFile(`tablas/tabla-${base} al -${limite}. txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base} al -${limite}. txt`)
        });
    });
};

module.exports = {
    crearArchivo,
    listar
}