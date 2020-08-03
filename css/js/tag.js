const colors = {/*conectado ao arquivo seletores.html e classeTag.html */
    p: '#388e3c',//cores de cada um em hexadecimal
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao//se existir retorna this.tag e caso não exista retorna this.padrão a cor
    }
}

document.querySelectorAll('.tag').forEach(elemento => {//seleciona todos elemnentos com foreach cada um renomeia para elemento
    const tagName = elemento.tagName.toLowerCase()//tagname recebe elemento,toLowerCase:sempre letras minusculas

    elemento.style.borderColor = colors.get(tagName)//recebendo cor acima de linha1.const colors conectado tag

    if (!elemento.classList.contains('nolabel')) {//se elemento não! tiver 'nolabel' coloca nas caixas..
        const label = document.createElement('label')//se não tiver nolabel ai cria uma label
        label.style.backgroundColor = colors.get(tagName)//recebendo a cor corlors
        label.innerHTML = tagName//coloca a tagname no innerHTML: q define ou obtém a sintaxe HTML descrevendo os elementos descendentes.
        elemento.insertBefore(label, elemento.childNodes[0])//inserir no primeiro 'elemento' ou seja p ul ol div... no site
    }
})