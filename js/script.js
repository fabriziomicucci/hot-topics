const container = document.querySelector('.container');
const links = document.querySelectorAll('.link');
let url = './partials/home.html';


function page(e){
    e.preventDefault();
    let clickedLink = e.target;
    url = clickedLink.href;
    loadContent();
};

function loadContent(){
    fetch(url)
        .then(function(rsp){
        return rsp.text();
    }).then(function (data){
        container.innerHTML = data;
    });
};
for(let link of links){
    link.addEventListener("click", page);
};
loadContent();


