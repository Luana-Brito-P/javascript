function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1;c--){
        fat *= c                
    }
    return fat
}
console.log(fatorial(5))
//5! = 5 x 4 x 3 x 2 x 1 = 120

/*
 fatorial vai ser c(5) multiplicado por fat(1); ou seja agr fat = 5; dps acontecera o msm pocesso denovo
 fat = c(4)*fat(5) == 20 ...
*/