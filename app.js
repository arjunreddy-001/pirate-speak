btnTranslate = document.querySelector('#btn-translate');
inputTranslate = document.querySelector('#translate-input');
divTranslateOutput = document.querySelector('.translate-output');

var apiUrl = "https://api.funtranslations.com/translate/pirate.json";

btnTranslate.addEventListener('click', () => {
    translate(inputTranslate.value);
});

function errorHandler(error) {
    console.log(error);
}

function translate(inputText) {
    var api = apiUrl + "?text=" + inputText;

    fetch(api)
        .then(response => response.json())
        .then(json => {
            divTranslateOutput.innerText = json.contents.translated;
        })
        .catch(errorHandler);
}

