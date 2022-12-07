import assert from 'assert'
import chai from 'chai'
import Calculadora from './src/Calculadora.js'
const expert = chai.expect

describe('Testes de soma',() => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expert(resultado).to.be.eq(9)
    })
    it('Deve somar - 4 e 5 resultando em 1',() => {
            let resultado = Calculadora.soma(-4, 5)
            expert(resultado).to.be.eq(1)
        })
        it('Deve somar 5 e 15 e o resultando deve ser diferente de 10',() => {
            let resultado = Calculadora.soma(5, 15)
            expert(resultado).to.not.equals(10)
        })
        it('Deve somar 500 e 900 e o resultando deve ser diferente de 14 ',() => {
            let resultado = Calculadora.soma(500, 900)
            expert(resultado).to.not.equals(14)
            //O not.equals espera um resultdo diferente
        })
})
describe('Testes de subtração',() => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.subtração(4, 5)
        expert(resultado).to.be.eq(-1)
    })
    it('Deve subtrair -40 e 10 resultando em -50', () => {
        let resultado = Calculadora.subtração(-40, 10)
        expert(resultado).to.be.eq(-50)
    })
    it('Deve subtrair 30 e 20 resultando em 10', () => {
        let resultado = Calculadora.subtração(30, 20)
        expert(resultado).to.be.eq(10)
    })
    it('Deve subtrair 200 e 100 resultando em 100', () => {
        let resultado = Calculadora.subtração(200, 100)
        expert(resultado).to.be.eq(100)
    })
})
describe('Testes de divisão',() => {
    it('Deve dividir 4 e 5 resultando em 0,8', () => {
        let resultado = Calculadora.divisão(4, 5)
        expert(resultado).to.be.eq(0.8)
    })
    it('Deve dividir -40 e 10 resultando em -4', () => {
        let resultado = Calculadora.divisão(-40, 10)
        expert(resultado).to.be.eq(-4)
    })
    it('Deve dividir 30 e 20 resultando em 1,5', () => {
        let resultado = Calculadora.divisão(30, 20)
        expert(resultado).to.be.eq(1.5)
    })
    it('Deve dividir 200 e 100 resultando em 2', () => {
        let resultado = Calculadora.divisão(200, 100)
        expert(resultado).to.be.eq(2)
    })
})
describe('Testes de multiplicação',() => {
    it('Deve multiplicar 4 e 5 resultando em 20', () => {
        let resultado = Calculadora.mutiplicação(4, 5)
        expert(resultado).to.be.eq(20)
    })
    it('Deve multiplicar -40 e 10 resultando em -400', () => {
        let resultado = Calculadora.mutiplicação(-40, 10)
        expert(resultado).to.be.eq(-400)
    })
    it('Deve multiplicar 30 e 20 resultando em 600', () => {
        let resultado = Calculadora.mutiplicação(30, 20)
        expert(resultado).to.be.eq(600)
    })
    it('Deve multiplicar 200 e 100 resultando em 20,000', () => {
        let resultado = Calculadora.mutiplicação(200, 100)
        expert(resultado).to.be.eq(20000)
    })
})
describe('Testes de igualdade',() => {
    it('O números 5 e 5 devem ser iguais', () => {
        let resultado = Calculadora.igualdade(5, 5)
        expert(resultado).to.be.eq(true)
    })
    it('Os números 10 e 10 devem ser iguais', () => {
        let resultado = Calculadora.igualdade(10, 10)
        expert(resultado).to.be.eq(true)
    })
    it('Os números 30 e 30 devem ser iguais', () => {
        let resultado = Calculadora.igualdade(30, 30)
        expert(resultado).to.be.eq(true)
    })
    it('Os números 100 e 10 devem ser diferentes', () => {
        let resultado = Calculadora.igualdade(100, 10)
        expert(resultado).to.not.equals(true)
        //not.equals muda o sentido
    })
})
describe('Testes de desigualdade',() => {
    it('O números 5 e 6 devem ser diferentes', () => {
        let resultado = Calculadora.diferente(5, 6)
        expert(resultado).to.be.eq(true)
    })
    it('Os números 10 e 11 devem ser diferentes', () => {
        let resultado = Calculadora.diferente(10, 11)
        expert(resultado).to.be.eq(true)
    })
    it('Os números 30 e 31 devem ser diferentes', () => {
        let resultado = Calculadora.diferente(30, 31)
        expert(resultado).to.be.eq(true)
    })
    it('Os números 100 e 10 devem ser diferentes', () => {
        let resultado = Calculadora.diferente(100, 100)
        expert(resultado).to.not.equals(true)
        //not.equals muda o sentido
    })
})

