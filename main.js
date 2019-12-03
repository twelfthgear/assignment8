for(let i = 0; i < 1024; i++) {
    document.querySelector(".paintApp").innerHTML += '<div></div>';
}
document.body.addEventListener('click', event => {
    event.target.style.backgroundColor = '#fff';
    event.target.style.border = '1px solid #000';
})
document.addEventListener('keydown', event => {
    if(event.key === 'z'){
        document.querySelector(".paintApp").style.backgroundColor = '#f00';}
    if(event.key === 'x'){
        document.querySelector(".paintApp").style.backgroundColor = '#0f0';}
    if(event.key === 'c'){
        document.querySelector(".paintApp").style.backgroundColor = '#00f';}
    if(event.key === 'v'){
        document.querySelector(".paintApp").style.backgroundColor = '#000';}
    if(event.key === 'b'){
        document.querySelector(".paintApp").style.backgroundColor = '#fff';}
})
document.querySelector('.clear').addEventListener('click', event =>{
    window.location = window.location;
})
document.body.addEventListener('click', event => {
    if(event.ctrlKey){
        event.target.innerText = document.querySelector('#text').Value;
        let red = document.querySelector('.red').value;
        event.target.style.backgroundColor='rgb(' + red + ', 0, 0)';
    }
    if(event.shiftKey){
        let green = document.querySelector('.green').value;
        event.target.style.backgroundColor='rgb( 0,' + green + ', 0)';
    }
    if(event.altKey){
        let blue = document.querySelector('.blue').value;
        event.target.style.backgroundColor='rgb( 0, 0,' + blue + ')';
    }
})