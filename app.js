var btntranslate = document.querySelector("#btn-translate");
var outputbar= document.querySelector("#output-bar")
var searchbox= document.querySelector("#search-bar")



var serverURl= "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURl + "?" + "text=" + text
}



function clickHandler(){
    var text = searchbox.value
    fetch(getTranslationURL(text))
    .then(response=> response.json())
    .then(json=> {
        var translatedtext= json.contents.translated
        outputbar.innerText = translatedtext
    })
};


btntranslate.addEventListener("click",  clickHandler);






