export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método ${propertyKey}`);
        console.log(`------ Parâmetros ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map