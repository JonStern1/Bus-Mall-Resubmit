console.log('Holo. I need to post the darn images');

var twentyfiveClicks = 0;
var tenClicks = 0;
var timesDisplayed = 0;
var imageObjectArray = [];

function ImageDataConstructor (image, filePath){
  this.image = image;
  this.filePath = filePath;
  this.numberImageAppearance = 0;
  this.numberClicks = 0;
}
ImageDataConstructor.prototype.createImageEl = function(){
  var imgEl = document.createElement('img');
  imgEl.setAttribute('image', this.image);
  imgEl.setAttribute('filePath', this.filePath);
  imgEl.addEventListener('click', eventHandler); this.numberImageAppearance++;
  timesDisplayed++;
  this.numberClicks++;
  return imgEl;

};

var bag = new ImageDataConstructor('bag', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/bag.jpg', 0, 0);
var banana = new ImageDataConstructor('banana', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/banana.jpg', 0, 0);
var bathroom = new ImageDataConstructor('bathroom', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/bathroom.jpg', 0, 0);
var boots = new ImageDataConstructor('boots', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/boots.jpg', 0, 0);
var breakfast = new ImageDataConstructor('breakfast', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/breakfast.jpg', 0, 0);
var bubblegum = new ImageDataConstructor('bubblegum', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/bubblegum.jpg');
var chair = new ImageDataConstructor('chair', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/chair.jpg');
var cthulhu = new ImageDataConstructor('cthulhu', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/cthulhu.jpg');
var dogDuck = new ImageDataConstructor('dogDuck', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/dog-duck.jpg');
var dragon = new ImageDataConstructor('dragon', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/dragon.jpg');
var pen = new ImageDataConstructor('pen', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/pen.jpg');
var petSweep = new ImageDataConstructor('petSweep', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/pet-sweep.jpg');
var scissors = new ImageDataConstructor('scissors', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/scissors.jpg');
var shark = new ImageDataConstructor('shark', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/shark.jpg');
var sweep = new ImageDataConstructor('sweep', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/sweep.png');
var tauntaun = new ImageDataConstructor('tauntaun', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/tauntaun.jpg');
var unicorn = new ImageDataConstructor('unicorn', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/unicorn.jpg');
var usb = new ImageDataConstructor('usb', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/usb.gif');
var waterCan = new ImageDataConstructor('waterCan', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/water-can.jpg');
var wineGlass = new ImageDataConstructor('wineGlass', '/Users/jnjstern/cf/201/localStorage-demo/ajax-demo/AttemptImagePost/img/wine-glass.jpg');
console.log('Holo. Constructor and variables okay?');

imageObjectArray.push(bag);
imageObjectArray.push(banana);
imageObjectArray.push(bathroom);
imageObjectArray.push(boots);
imageObjectArray.push(breakfast);
imageObjectArray.push(bubblegum);
imageObjectArray.push(chair);
imageObjectArray.push(cthulhu);
imageObjectArray.push(dogDuck);
imageObjectArray.push(dragon);
imageObjectArray.push(pen);
imageObjectArray.push(petSweep);
imageObjectArray.push(scissors);
imageObjectArray.push(shark);
imageObjectArray.push(sweep);
imageObjectArray.push(tauntaun);
imageObjectArray.push(unicorn);
imageObjectArray.push(usb);
imageObjectArray.push(waterCan);
imageObjectArray.push(wineGlass);

function displayImages(){
  var randomImage1 = Math.floor((Math.random() * 19) + 1);
  var randomImage2 = Math.floor((Math.random() * 19) + 1);
  var randomImage3 = Math.floor((Math.random() * 19) + 1);
  var firstImage = document.getElementById('firstRandomImage');
  var secondImage = document.getElementById('secondRandomImage');
  var thirdImage = document.getElementById('thirdRandomImage');
  var twentyfiveClicks = 0;
  firstImage.setAttribute('src', imageObjectArray[randomImage1].filePath);
  secondImage.setAttribute('src', imageObjectArray[randomImage2].filePath);
  console.log('make it to here?');
  thirdImage.setAttribute('src', imageObjectArray[randomImage3].filePath);
  for (twentyfiveClicks = 0; twentyfiveClicks < 25; twentyfiveClicks++){
  };
  //find a way to count the images
}

var imageNumberOne = document.getElementById('firstRandomImage');
var imageNumberTwo = document.getElementById('secondRandomImage');
var imageNumberThree = document.getElementById('thirdRandomImage');
var clickCounter = 0;
imageNumberOne.addEventListener('click', displayImages);
imageNumberTwo.addEventListener('click', displayImages);
imageNumberThree.addEventListener('click', displayImages);
  //find a way to count the click

displayImages();
