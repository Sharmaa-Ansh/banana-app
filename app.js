var btntranslate = document.querySelector("#btn-translate");
var outputbar= document.querySelector("#output-bar")
var searchbox= document.querySelector("#search-bar")
function clickHandler(){
    console.log('click');
    console.log('input', searchbox.value);
    outputbar.innerText = searchbox.value
}


btntranslate.addEventListener("click",  clickHandler);






