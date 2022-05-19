const lista = document.querySelector(".lista");

//1 Recuperando info produtos
function criarCardVitrine(produto) {
  const id = produto.id;
  const image = produto.img;
  const nameItem = produto.nameItem;
  const description = produto.description;
  const value = produto.value;
  const addCart = produto.addCart;
  const tag = produto.tag;
  //2 Criando elementos
  const tagLi = document.createElement("li");
  const tagDiv = document.createElement("div");
  const tagImg = document.createElement("img");
  const tagDiv2 = document.createElement("div");
  const tagClassificacao = document.createElement("p");
  const tagNome = document.createElement("h3");
  const tagDescricao = document.createElement("p");
  const tagPreco = document.createElement("p");
  const tagButton = document.createElement("button");
  //3 Adicionar info nas tags criadas
  tagImg.src = `${image}`;
  tagImg.alt = nameItem;
  tagClassificacao.innerText = `${tag}`;
  tagNome.innerText = `${nameItem}`;
  tagDescricao.innerText = `${description}`;
  tagPreco.innerHTML = `R$ ${value}0`;
  tagButton.innerHTML = `${addCart}`;
  tagButton.id = id;

  //4 Montar o card
  tagDiv.appendChild(tagImg);
  tagLi.appendChild(tagDiv);
  tagLi.classList.add("cardProduto");
  tagDiv.classList.add("frame");
  tagLi.appendChild(tagDiv2);
  tagDiv2.classList.add("containerGeral");
  tagDiv2.appendChild(tagClassificacao);
  tagClassificacao.classList.add("classificacao");
  tagDiv2.appendChild(tagNome);
  tagNome.classList.add("h3");
  tagDiv2.appendChild(tagDescricao);
  tagDescricao.classList.add("descricao");
  tagDiv2.appendChild(tagPreco);
  tagPreco.classList.add("preco");
  tagDiv2.appendChild(tagButton);
  tagButton.classList.add("botaoAdicione");
  lista.appendChild(tagLi);
  tagImg.classList.add("fotos2");
  tagButton.addEventListener("click", () => {
    adicionarNoCarrinho(produto);
  });

  //5 Retornar o card
  return tagLi;
}
// const funcao = criarCardVitrine(data);

function listarProdutos(listaProdutos) {
  for (let i = 0; i < listaProdutos.length; i++) {
    const produto = listaProdutos[i];

    const funcaoCard = criarCardVitrine(produto);
    lista.appendChild(funcaoCard);
  }
}
listarProdutos(data);

function adicionarNoCarrinho(produto) {
  const functionCarrinho = document.getElementById("functionCarrinho");

  const linhacarrinho = document.createElement("div");
  linhacarrinho.innerHTML = `
  <img src="${produto.img}" alt="logo" id="fotos3" />
    <p class="produtoDoCarrinho">
    ${produto.nameItem}
    </p>
    <p class="precoDoProdutoDoCarrinho">R$${produto.value}</p>
    <button class="removerDoCarrinho" id="${produto.id}">Remover produto</button>
  `;
  functionCarrinho.prepend(linhacarrinho);
}
