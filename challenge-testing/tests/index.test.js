const{CarritoCompra}=require('./index.js')

let nuevoCarrito
let producto
let productos

beforeEach( ()=>{
nuevoCarrito = new CarritoCompra()
producto={
    nombre: 'producto 1',
    precio: 1000
}
productos =[
        {
        nombre: 'producto 1',
        precio: 1000    
        },
    {
        nombre: 'producto 2',
        precio: 2000
    },
    {
        nombre: 'producto 3',
        precio: 3000
    },
    {
        nombre: 'producto 4',
        precio: 4000
    },
    ]
})
const llenarCarrito= () =>{
    productos.forEach((product) => nuevoCarrito.agregarProducto(product))
}

describe ('Class CarritoCompra', () => {
    it ('debe existir', () => {
        expect(CarritoCompra).toBeInstanceOf(Function)
        expect(CarritoCompra).toBeDefined()
    })

    it('deberia poder instanciar objetos de CarritoCompra', ()=>{
    expect(nuevoCarrito).toBeInstanceOf(CarritoCompra)
    })

it('deberia tener los siguientes metodos: constructor, agregarProducto, calcularTotal, aplicarDescuento',() => {
       expect(CarritoCompra.prototype.constructor).toBeDefined()
       expect(CarritoCompra.prototype.agregarProducto).toBeDefined()
       expect(CarritoCompra.prototype.calcularTotal).toBeDefined()
       expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined()
})

})

describe('Constructor',() => {
    it('Inicializa el carrito como un array vacio',() => {
        expect(nuevoCarrito.carrito).toEqual([])
    })
})

describe('AgregarProducto', () => {
    it('Recibe un objeto representando un producto y lo agrega al carrito', () => {
    expect(nuevoCarrito.agregarProducto(producto)).toBe('producto agregado con exito!')
    expect(nuevoCarrito.carrito[0]).toEqual(producto)
})
    it('Recibe muchos objetos representando productos, y los agrega al carrito', () => {
    llenarCarrito()
    expect(nuevoCarrito.carrito.length).toBe(4)
    expect(nuevoCarrito.carrito[0].nombre).toBe('producto 1')
    expect(nuevoCarrito.carrito[2].precio).toBe(3000)
    expect(nuevoCarrito.carrito[3]).toEqual({
        nombre:'producto 4',
        precio: 4000
    })
})
})

describe('CalcularTotal',() =>{
    it('Calcula el total de la compra sumando los precios de todos los productos en el carrito',() => {
        llenarCarrito()
        expect(nuevoCarrito.calcularTotal()).toBe(10000)
    })
})

describe('AplicarDescuento', () => {
    it('Aplica un descuento al total de la compra según el porcentaje especificado', () => {
    llenarCarrito()
        expect(nuevoCarrito.aplicarDescuento(0)).toBe(10000)
        expect(nuevoCarrito.aplicarDescuento(10)).toBe(9000)
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(5000)
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0)
    })
})