document.addEventListener('DOMContentLoaded', function() {
    
    var headerH = document.querySelector('.parallax-header').offsetHeight;
    var logo = document.querySelector('.parallax-header__logo').style;
    var choco = document.querySelector('.parallax-header__choco').style;
    var toppers = document.querySelector('.parallax-header__toppers').style;
    
    function parallaxFx () {
        var yOffset = window.pageYOffset;
        
        if (yOffset <= headerH) {
            var transparency = 1 - (yOffset/headerH)*1.2; // Desaparación de los elementos acelerada en un 20%
            logo.transform = 'translateY(' + yOffset/1.5 + 'px)';
            
            choco.transform = 'translateY(' + yOffset/30 + 'px)';
            choco.opacity = transparency;
            toppers.transform = 'translateY(' + yOffset/30 + 'px)';
            toppers.opacity = transparency;
        }
    };
    
    window.addEventListener('scroll', parallaxFx);
})