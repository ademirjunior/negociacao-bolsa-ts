export function domInjector(selector: string) {

    return function (target: any, propertyKey: string) {
        console.log(`Modificando prototype ${target.constructor.name} e adiconando getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement;
        
        const getter = function () {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(selector);
                console.log(`buscando elemento do DOM com o seletor ${selector} para injetar em ${propertyKey}`);
            }
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}