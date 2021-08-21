export function escape(target, propertKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log(`@escape em ação na clase ${this.constructor.name} para o método ${propertKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
    };
    return descriptor;
}
