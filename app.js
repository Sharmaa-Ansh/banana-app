var btntranslate = document.querySelector("#btn-translate");
var searchbox= document.querySelector("#search-bar")
function clickHandler(){
    console.log('click');
    console.log('input', searchbox.value);
}


btntranslate.addEventListener("click",  clickHandler);






