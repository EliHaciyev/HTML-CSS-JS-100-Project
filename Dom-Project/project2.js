let openBtn = document.querySelector('#open-btn');
let modalContainer = document.querySelector('#model-container');
let closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', function(){
  modalContainer.style.cssText = `display:block;`;
});

closeBtn.addEventListener('click', function(){
  modalContainer.style.cssText = `display:none;`;
});

window.addEventListener('click', function(e){
  if(e.target === modalContainer){
    modalContainer.style.cssText = `display:none;`;
  }
});

