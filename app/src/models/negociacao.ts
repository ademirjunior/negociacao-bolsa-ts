export class Negociacao {

    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number) { }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, valor, quantidade);
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Valor: ${this.valor},
            Quantidade: ${this.quantidade},
        `;
    }
}