//função recursiva; função que chama ela mesma; RECURSIVIDADE
function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n *  fatorial(n-1)   //return n * (n-1) vai devolver 20, ele precisa voltar no começo e refazer por isso fatoria(n-1)
    }
}

console.log(fatorial(5))
/*

5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4!

n! = n x (n - 1)!
1! = 1

 RECURSIVIDADE
A função vai fazendo isso:

fatorial(5) → 5 * fatorial(4) (volta pra função mas usando 4)

fatorial(4) → 4 * fatorial(3)

fatorial(3) → 3 * fatorial(2)

fatorial(2) → 2 * fatorial(1)

fatorial(1) → 1 (caso base) (chegou aqui, agr ele vai responder)

Depois, as chamadas "voltam", resolvendo:

fatorial(2) → 2 * 1 = 2 (fatorial(1)= 1) (fatorial(2)=2)

fatorial(3) → 3 * 2 = 6 (fatorial(3)= 6)

fatorial(4) → 4 * 6 = 24 (fatorial(4)= 4 * 6= 24)

fatorial(5) → 5 * 24 = 120 fatorial(5)= 5 * 24 = 120)
*/