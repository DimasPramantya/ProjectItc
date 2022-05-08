const galeri = document.querySelectorAll(".container-galeri ul li img");

galeri.forEach(function(e){
    e.addEventListener('click',function(){
        let source = e.src;
        document.querySelector('.popup-img').style.display = "block"
        document.querySelector('.popup-img img').src = source;
    })
})

const close = document.querySelector(".popup-img span");
close.addEventListener('click',function(){
    document.querySelector(".popup-img").style.display = "none"
})


