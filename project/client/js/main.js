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
getLocation()
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

    let elems = document.querySelectorAll('.collapsible');
    let instances = M.Collapsible.init(elems, {
        accordion: true });

async function getForcast(lat, lon){
    let req = await fetch("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&lang=pt&APPID=c144ba4eaa5f0aebc01c661169701dc7")
    let resposta = await req.json()
    console.log(resposta)
        const li = document.createElement('li')
        collection.insertBefore(li,collection.querySelector('li'))
        const header = document.createElement('div')
        header.classList = 'collapsible-header'
        li.appendChild(header)
        const span =  document.createElement('span')
        span.classList = 'badge'
        const icon = document.createElement('h5')
        icon.classList = 'material-icons'
        icon.innerText = 'filter_drama'
        icon.innerText = 'Previsão do Tempo'
        header.appendChild(icon)
        const body = document.createElement('div')
        body.classList = 'collapsible-body'
        li.appendChild(body)
        const p = document.createElement('p')
        body.appendChild(p)
        header.appendChild(span)
        p.innerText += "Cidade: " + resposta.name + "\n" + "Temperatura mínima: " +  resposta.main.temp_min + "C°" + "\n" + "Temperatura Máxima: " + resposta.main.temp_max + "C°" 

}   

function getLocation(){
    navigator.geolocation.getCurrentPosition(coordenadas =>{
        console.log(coordenadas)
        let latitude = coordenadas.coords.latitude;
        let longitude = coordenadas.coords.longitude;
        getForcast(latitude, longitude);
    });
}
