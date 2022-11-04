const shareButtonElement = document.getElementById('share-button');
const shareContainerElement = document.getElementById('share-container');
const bodyElement = document.querySelector('body');
let shareContainerIsVisible = false;

shareButtonElement.addEventListener('click', toggleShareContainer);

function toggleShareContainer() {
  if (!shareContainerIsVisible) {
    showShareContainer();
    turnButtonDarker();
  } else {
    hideShareContainer();
    turnButtonLighter();
  }
}

function showShareContainer() {
  shareContainerElement.classList.add('visible');
  shareContainerIsVisible = true;
}

function hideShareContainer() {
  shareContainerElement.classList.remove('visible');
  shareContainerIsVisible = false;
}

function turnButtonDarker() {
  shareButtonElement.classList.add('opened');
}

function turnButtonLighter() {
  shareButtonElement.classList.remove('opened');
}
