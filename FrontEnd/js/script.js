const itens = [

    {
        id: 0,
        nome: 'bravecto',
        img: 'bravecto.jpg',
        quantidade: 0

    },
    {
        id: 1,
        nome: 'capstar',
        img: 'capstar.jpg',
        quantidade: 0

    },
    {
        id: 2,
        nome: 'simparic',
        img: 'simparic.jpg',
        quantidade: 0

    }

]




inicializarLoja = () => {

    console.log("Oi mundo !")
    
    let containerProdutos = document.getElementById('produtos')
    itens.map((val) => {
        containerProdutos.innerHTML += `
        
        <div class="produto-single">
        <img src="./imgs/`+val.img+`"/>
    
        </div>
        `
    })
    

}
inicializarLoja()

