function irA(id) { //para poder redirigir cuando se haga click al Id(que pertenece )
    var target = document.getElementById(id);
    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }
}