var div = document.getElementById('for-sidebaar');
var div1 = document.getElementById('for-whole-site');
var searchbar_width = document.getElementById('inpt');
var div2 = document.getElementById('whole-site-c');
var hide_8 = document.getElementById('hide-8');
var hide_7 = document.getElementById('hide-7');


div2.style.display = 'flex';
div1.style.width = '100%';
div.style.display = 'none';
var display = 1;
function hs() {
    if (display == 0) {
        div.style.display = 'none';
        div2.style.width = '100%';
        display = 1;
        console.log("dis 1")
        
    } else {
        div.style.display = 'block';
        div.style.width = '20%';
        searchbar_width.style.width = '70%';
        display = 0;
        console.log("dis 0")
    }
}

function insideclose() {

        div.style.display = 'none';
        div2.style.width = '100%';
        display = 1;
        console.log("dis 1")
}

window.addEventListener('mouseup',function(event){
    var pol = document.getElementById('for-sidebaar');
    if(event.target != pol && event.target.parentNode != pol){
        pol.style.display = 'none';
        display = 1
        console.log("dis outsider 1")
    }
});  
