console.log('Online')

axios.get('https://digimon-api.herokuapp.com/api/digimon/')
.then(function (response){
    console.log(response);

    for (var digiOne of response.data){
        renderDigimon(digiOne);
    }
})
.catch(function (error){
    console.log(error);
});

function renderDigimon(obj){
    //DIV
    var boxElement = document.createElement('div');
    var aux = document.querySelectorAll('body div').length + 1;
    boxElement.setAttribute('id', 'Digi' + aux);
    boxElement.setAttribute('class', 'boxContent');

    //NAME
    var digiNameElement = document.createElement('p');
    var digiName = document.createTextNode(obj.name);
    digiNameElement.setAttribute('class', 'digiName');
    digiNameElement.appendChild(digiName);

    
    //IMAGEM
    var digiImg = document.createElement('img');
    digiImg.setAttribute('src', obj.img)
    digiImg.setAttribute('class', 'digiImg');

    //LEVEL
    var digiLevelElement = document.createElement('p');
    var digiLevel = document.createTextNode(obj.level);
    digiLevelElement.setAttribute('class', 'digiLevel');
    digiLevelElement.appendChild(digiLevel);


    //ADD ELEMENTS INTO DIV
    boxElement.appendChild(digiNameElement);
    boxElement.appendChild(digiImg);
    boxElement.appendChild(digiLevelElement);
    document.querySelector('body').appendChild(boxElement);
}