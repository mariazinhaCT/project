let ul = document.querySelector('header ul')
async function getCategoria(){
    let req = await fetch('http://127.0.0.1/api/categoria/read.php')
    let resposta = await req.json()
    for (let i=0; i<resposta.length; i++) {
        let categoria = resposta[i]
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.classList = 'cat'
        li.appendChild(a)
        a.innerText = categoria.nome
        ul.appendChild(li)
    }
}
getCategoria()

function getPost(){
     let req = await fetch('http://127.0.0.1/api/post/read.php')
     let resposta = await req.json()
     for (let i=0; i<resposta.length; i++){
        let post = resposta[i]
        let a = document.createElement('a')
        a.classList = 'collection-item'
        let span = document.createElement('span')
        a.appendChild(span)
        //a.innerText = post.t

     }
}

