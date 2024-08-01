export default class productResDto{
    constructor(prod){
        this.name = prod.name;
        this.brand = prod.brand;
        this.algorithms = prod.algorithms;
        this.price = prod.price;
        this.fechaDeConsulta = new Date().toLocaleDateString();
    }
}