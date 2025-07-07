export const saludar = (nombre: string) => {
    console.log(`Hola ${nombre}`);
};

export function greet(name: string) {
    return `Hola, ${name}`;
}

saludar("Turborepo 2");
