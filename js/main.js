
const hero = document.querySelector('.hero');
const container = document.querySelector('.container-box');

const sigInElement = document.querySelector('#signIn');
const registerElement = document.querySelector('#register');
const closeSignIn = document.querySelector('#closeSignIn');
const closeRegister = document.querySelector('#closeRegister');

const btnSignIn = document.getElementById('js-btn-signin');
const btnReg = document.getElementById('js-btn-register');


const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const { width } = entry.contentRect;
    if (width >= 767) {
      hero.style.height = '100svh';

      if (sigInElement.style.transform === 'translate(0svw, 0svh)' || registerElement.style.transform === 'translate(0svw, 0svh)') {
        hero.style.width = '70svw';
        if (sigInElement.style.transform === 'translate(0svw, 0svh)') {
          registerElement.style.transform = 'translate(30svw, 0svh)';
        }
        else if (registerElement.style.transform === 'translate(0svw, 0svh)') {
          sigInElement.style.transform = 'translate(30svw, 0svh)';
        }
      }
      else {
        sigInElement.style.transform = 'translate(30svw, 0svh)';
        registerElement.style.transform = 'translate(30svw, 0svh)';
      }

    }
    else if (width < 767) {
      hero.style.width = '100svw';

      if (sigInElement.style.transform === 'translate(0svw, 0svh)' || registerElement.style.transform === 'translate(0svw, 0svh)') {
        hero.style.height = '50svh';
        if (sigInElement.style.transform === 'translate(0svw, 0svh)') {
          registerElement.style.transform = 'translate(0svw, 50svh)';
        }
        else if (registerElement.style.transform === 'translate(0svw, 0svh') {
          sigInElement.style.transform = 'translate(0svw, 50svh)';
        }
      }
      else {
        sigInElement.style.transform = 'translate(0svw, 50svh)';
        registerElement.style.transform = 'translate(0svw, 50svh)';
      }
    }
  }
});

resizeObserver.observe(container);

closeSignIn.addEventListener('click', () => {
  if (container.getBoundingClientRect().width < 767) {
    sigInElement.style.transform = 'translate(0svw, 50svh)';
    hero.style.height = '100svh';
  }
  else {
    sigInElement.style.transform = 'translate(30svw, 0svh)';
    hero.style.width = '100svw';
  }
})

closeRegister.addEventListener('click', () => {
  if (container.getBoundingClientRect().width < 767) {
    hero.style.height = '100svh';
    registerElement.style.transform = 'translate(0svw, 50svh)';

  }
  else {
    registerElement.style.transform = 'translate(30svw, 0svh)';
    hero.style.width = '100svw';
  }
})

btnSignIn.addEventListener('click', () => {

  if (container.getBoundingClientRect().width >= 767) {
    hero.style.width = '70svw';
    if (registerElement.style.transform === 'translate(0svw, 0svh)') {
      registerElement.style.transform = 'translate(30svw, 0svh)';
    }
    sigInElement.style.transform = 'translate(0svw, 0svh)';
  }
  else {
    if (registerElement.style.transform === 'translate(0svw, 0svh)') {
      registerElement.style.transform = 'translate(0svw, 50svh)';
    }
    hero.style.height = '50svh';
    sigInElement.style.transform = 'translate(0svw, 0svh)';
  }
});

btnReg.addEventListener('click', () => {

  if (container.getBoundingClientRect().width >= 767) {
    hero.style.width = '70svw';
    if (sigInElement.style.transform === 'translate(0svw, 0svh)') {
      sigInElement.style.transform = 'translate(30svw, 0svh)';
    }
    registerElement.style.transform = 'translate(0svw, 0svh)';
  }
  else {
    if (sigInElement.style.transform === 'translate(0svw, 0svh)') {
      sigInElement.style.transform = 'translate(0svw, 50svh)';
    }
    hero.style.height = '50svh';
    registerElement.style.transform = 'translate(0svw, 0svh)';
  }
});