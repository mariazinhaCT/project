let ul = document.querySelector('header ul')
let collection = document.querySelector('div.collection ul')
async function getCategoria(){
    let req = await fetch('http://127.0.0.1/api/categoria/read.php')
    let resposta = await req.json()
    for (let i=0; i<resposta.length; i++) {
        let categoria = resposta[i]
        let li = document.createElement('li')
        li.dataset.id = categoria.id
        li.addEventListener('click', ev=> {
            getPost( li.dataset.id)
        })
        let a = document.createElement('a')
        a.classList = 'cat'
        li.appendChild(a)
        a.innerText = categoria.nome
        ul.appendChild(li)
    }
}
getCategoria()

async function getPost(id=null){
    let req
    if(id==null){
        req = await fetch('http://127.0.0.1/api/post/read.php')
    }else{
        req = await fetch('http://127.0.0.1/api/post/read.php?id='+id)
    }
     let resposta = await req.json()
     collection.innerHTML = ""
     for (let i=0; i<resposta.length; i++){
        let post = resposta[i]
        const li = document.createElement('li')
        collection.appendChild(li)
        const header = document.createElement('div')
        header.classList = 'collapsible-header'
        li.appendChild(header)
        const span =  document.createElement('span')
        span.classList = 'badge'
        span.innerText = post.dt_criacao.substring(0,10).replace(/-/g,'/').replace(/(\d+)\/(\d+)\/(\d+)/g, '$3/$2/$1')
        const icon = document.createElement('i')
        icon.classList = 'material-icons'
        icon.innerText = 'filter_drama'
        header.appendChild(icon)
        header.innerText = post.titulo
        const body = document.createElement('div')
        body.classList = 'collapsible-body'
        li.appendChild(body)
        const h3 =  document.createElement('h3')
        body.appendChild(h3)
        h3.innerText = post.autor
        const p = document.createElement('p')
        body.appendChild(p)
        p.innerText = post.texto
        header.appendChild(span)

     }


    let elems = document.querySelectorAll('.collapsible');
    let instances = M.Collapsible.init(elems, {
        accordion: true });

}
 getPost()

// <ul class="collapsible">
//   <li>
//     <div class="collapsible-header">
//       <i class="material-icons">filter_drama</i>
//       First
//     </div>
//     <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
//   </li>
//   <li>
//     <div class="collapsible-header">
//       <i class="material-icons">place</i>
//       Second
//     </div>
//     <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
//   </li>
// </ul>


    let elems = document.querySelectorAll('.collapsible');
    let instances = M.Collapsible.init(elems, {
        accordion: true });