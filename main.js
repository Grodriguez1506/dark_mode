window.addEventListener('load',function(){
    var containerSwitch = this.document.querySelector('.container_switch');
    var darkModeSwitch = this.document.querySelector('.dark_switch');
    var body = this.document.querySelector('body')

    function activarDarkMode(){
        darkModeSwitch.classList.remove('restablecer_switch');
        darkModeSwitch.classList.add('desplazar_switch');
        body.classList.add('dark_mode');
    };
    
    function activarLightMode(){
        darkModeSwitch.classList.remove('desplazar_switch');
        darkModeSwitch.classList.add('restablecer_switch');
        body.classList.remove('dark_mode');
    };

    containerSwitch.addEventListener('click', function(){
        if(body.className == ''){
            activarDarkMode();
        }else{
            activarLightMode();
        };
    });
});