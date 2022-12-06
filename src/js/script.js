//PÁGINA INDEX.HTML


//SELECIONANDO A LISTA PARA ADICIONAR PRODUTOS
const produtosLista = document.querySelector(".produtosLista");
const listaProdutos = document.querySelector(".listaProdutos");

//CRIAR UMA FUNÇÃO
function criarcardProduto(produto) {

    //CRIAR TAG HTML LI
    const tagLi = document.createElement("li");

    //ADICIONAR UMA CLASSE NA TAG LI (cardProdutos)
    tagLi.classList.add("cardProduto");

    //ALIMENTAR A TAG COM OS OUTROS ELEMENTOS
    //(IMG)IMG
    //(H3)TITULO
    //(P)PRODUTO
    //(B) BOTÃO ADICIONAR CARRINHO
    //ALIMENTAR COM INFORMAÇÕES DOS PRODUTOS

    tagLi.innerHTML = `
            <img src="${produto.image}" alt=${produto.nome}>
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button type="button" id="${produto.id}">Adicionar</button>
         `

    return tagLi;

}

//LISTAR OS PRODUTOS DA BASE => ARRAY
//RECUPERAR OS PRODUTOS ARRAY(produtos)
//CRIAR UMA FUNÇÃO PARA LISTAR
function listarProdutos(listaProdutos) {

    //LOOP PARA RECUPERAR CADA PRODUTO
    for (let i = 0; i < listaProdutos.length; i++) {

        const produto = listaProdutos[i];

        //PASSAR PARA FUNÇÃO criar o Card de Produto
        const cardMontado = criarcardProduto(produto);

        //ADICIONAR NA TELA => COMO FILHO DA TAG UL
        produtosLista.appendChild(cardMontado);
    }
}

//MOSTRAR NA TELA
listarProdutos(produtos);


//CARRINHO DE COMPRAS
let carrinho = [];

//ADICIONANDO INTERCEPTADOR NA LISTA DE PRODUTOS
produtosLista.addEventListener("click", adicionarProdutoCarrrinho);

function adicionarProdutoCarrrinho(event) {

    //IDENTIFICANDO ELEMENTO CLICADO
    const botao = event.target;

    //VERIFICANDO SE É UM BOTÃO
    if (botao.tagName == "BUTTON") {

        //IDENTIFICADOR DO PRODUTO
        const idProduto = botao.id

        //PESQUISAR SE O PRODUTO EXISTE => BASE    (ARROW FUNCTION)
        const produtoFiltrado = produtos.find((produto) => produto.id == idProduto)

        //ADICIONANDO PRODUTO NO CARRINHO
        carrinho.push(produtoFiltrado)

        //LISTAR NA TELA OS PRODUTOS
        listarProdutosCarrinho()

        //ATUALIZA TOTAL CARRINHO
        atualizarTotal()

    }

}

//LISTAR PRODUTOS DO CARRINHO
function listarProdutosCarrinho() {

    //PARA O PRODUTO NÃO DUPLICAR AO ADICIONAR.
    listaProdutos.innerHTML = ""

    //PERCORREBDI PRODUTOS NO CARRINHO
    for (let i = 0; i < carrinho.length; i++) {

        //RECUPERANDO CADA PRODUTO
        const produto = carrinho[i]


        //CRIAR TEMPLATE
        const tagLi = document.createElement("li")
        tagLi.classList.add("cardProduto")
        tagLi.innerHTML = `
       
            <!--NOME/FOTO PRODUTO-->
            <div class="infoNome">
                <img src="${produto.image}" alt="${produto.nome}">
                <p>${produto.nome}</p>
            </div>
            <div class="infoPreco">
                <!--PREÇO DO PRODUTO-->
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button>
                <img src="..public/img/lixo.png" alt="lixo para remover produto">
                </button>
            </div>
                       
        `
        listaProdutos.appendChild(tagLi)

    }
}

//ATUALIZAR TOTAL CARRINHO

function atualizarTotal() {

    const infoPreco = document.querySelector(".infoPreco")

    let total = 0
    for (let i = 0; i < carrinho.length; i++) {

        const produto = carrinho[i]

        total += produto.preco

    }

    infoPreco.innerText = `Total: R$ ${total.toFixed(2)}`

}

const listaProdutosCarrinho = document.querySelector(".listaProdutos")
listaProdutosCarrinho.addEventListener("click", removerProdutoCarrinho)

function removerProdutoCarrinho(event) {

    const botaoExcluir = event.target

    if (botaoExcluir.tagName == "BUTTON") {

        //REMOVENDO APENAS NO HTML - MDN (PROCURAR NO MOZZILA DEVELOPER)
        botaoExcluir.closest("li").remove()

        //IDENTIFICADOR DO PRODUTO
        const idProduto = botaoExcluir.id

        //FILTRO COM O FIND
        const produtoFiltrado = produtos.find((produto) => produto.id == idProduto)


        //posicao numerica <= carrinho.INDEXOF
        carrinho.indexOf(produtoFiltrado, [])


        //SPLICE(posicao, 1)
        carrinho.splice(listaProdutosCarrinho, 1)

        //RETIRANDO PRODUTO NO CARRINHO
        //LISTAR NA TELA OS PRODUTOS
        listarProdutosCarrinho()

        //ATUALIZA TOTAL CARRINHO
        atualizarTotal()
    }

}

const cancelaProdutosCarrinho = document.querySelector(".listaProdutos")
cancelaProdutosCarrinho.removeEventListener("click", cancelarPedido, false)

function cancelarPedido(event) {

    const botaoCancelar = event.target

    if (botaoCancelar.tagName == "BUTTON") {

        botaoCancelar.closest("li").remove()
        
       //ATUALIZA TOTAL CARRINHO
       atualizarTotal()

    }
}