function mesinha(n) { 
    let tabela = [];
    if (n > 16){
        alert("Favor inserir um numero menor que 16")
    }
    for (let a = 0; a <= n; a++) {
        tabela.push([a])

        for(let b = 0; b <= n; b ++){
            tabela[a][b] = a * b
        }
    }
    console.table(tabela)
}
mesinha(5)