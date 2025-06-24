class CarritoCompra{
    constructor(){
         this.carrito=[]
    }
    agregarProducto(item){
        this.carrito.push(item) 
        return 'producto agregado con exito!'
    }
    calcularTotal(){
        const sumatoria = this.carrito.reduce((sum, item) => {
        sum = sum + item.precio
        return sum
        },0)
        return sumatoria
    }
    aplicarDescuento(desc){
       const compraTotal = this.calcularTotal()
       precioFinal = compraTotal - (compraTotal*desc) / 100
       return precioFinal
    }
}



module.exports = {
    CarritoCompra
}
