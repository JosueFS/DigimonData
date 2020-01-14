"use strict";

console.log('Online');
axios.get('https://digimon-api.herokuapp.com/api/digimon/').then(function (response) {
  console.log(response);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = response.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var digiOne = _step.value;
      renderDigimon(digiOne);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
})["catch"](function (error) {
  console.log(error);
});

function renderDigimon(obj) {
  //DIV
  var boxElement = document.createElement('div');
  var aux = document.querySelectorAll('body div').length + 1;
  boxElement.setAttribute('id', 'Digi' + aux);
  boxElement.setAttribute('class', 'boxContent'); //NAME

  var digiNameElement = document.createElement('p');
  var digiName = document.createTextNode(obj.name);
  digiNameElement.setAttribute('class', 'digiName');
  digiNameElement.appendChild(digiName); //IMAGEM

  var digiImg = document.createElement('img');
  digiImg.setAttribute('src', obj.img);
  digiImg.setAttribute('class', 'digiImg'); //LEVEL

  var digiLevelElement = document.createElement('p');
  var digiLevel = document.createTextNode(obj.level);
  digiLevelElement.setAttribute('class', 'digiLevel');
  digiLevelElement.appendChild(digiLevel); //ADD ELEMENTS INTO DIV

  boxElement.appendChild(digiNameElement);
  boxElement.appendChild(digiImg);
  boxElement.appendChild(digiLevelElement);
  document.querySelector('body').appendChild(boxElement);
}
