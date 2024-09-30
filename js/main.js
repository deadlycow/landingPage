
const hero = document.querySelector('.hero');
const container = document.querySelector('.container-box');

const sigInElement = document.querySelector('#signIn');
const registerElement = document.querySelector('#register');
const closeSignIn = document.querySelector('#closeSignIn');
const closeRegister = document.querySelector('#closeRegister');

const btnSignIn = document.getElementById('js-btn-signin');
const btnReg = document.getElementById('js-btn-register');

if (sigInElement.style.transform === 'translateY(0svh)' || registerElement.style.transform === 'translateY(0svh)') {
  hero.style.width = '70svw';
}

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const { width } = entry.contentRect;
    if (width >= 767) {
      hero.style.height = '100svh';

      if (sigInElement.style.transform === 'translateY(0svh)' || sigInElement.style.transform === 'translateX(0svw)' || registerElement.style.transform === 'translateY(0svh)' || registerElement.style.transform === 'translateX(0svw)') {
        hero.style.width = '70svw';
      }
    }
    else if (width < 767) {
      hero.style.width = '100svw';

      if (sigInElement.style.transform === 'translateY(0svh)' || sigInElement.style.transform === 'translateX(0svw)' || registerElement.style.transform === 'translateY(0svh)' || registerElement.style.transform === 'translateX(0svw)') {
        hero.style.height = '50svh';
      }
    }
  }
});

resizeObserver.observe(container);

closeSignIn.addEventListener('click', () => {
  if (container.getBoundingClientRect().width < 767) {
    sigInElement.style.transform = 'translateY(50svh)';
    hero.style.height = '100svh';
  }
  else {
    sigInElement.style.transform = 'translateX(30svw)';
    hero.style.width = '100svw';
  }
})

closeRegister.addEventListener('click', () => {
  registerElement.style.transform = 'translateY(50svh)';
  hero.style.height = '100svh';
})

btnSignIn.addEventListener('click', () => {

  if (container.getBoundingClientRect().width > 767) {
    hero.style.width = '70svw';
    if (registerElement.style.transform === 'translateX(0svw)') {
      registerElement.style.transform = 'translateX(30svw)';
    }
    sigInElement.style.transform = 'translateX(0svw)';
  }
  else {
    if (registerElement.style.transform === 'translateY(0svh)') {
      registerElement.style.transform = 'translateY(50svh)';
    }
    hero.style.height = '50svh';
    sigInElement.style.transform = 'translateY(0svh)';
  }
});

btnReg.addEventListener('click', () => {

  if (container.getBoundingClientRect().width > 767) {
    hero.style.width = '70svw';
    if (sigInElement.style.transform === 'translateX(0svw)') {
      sigInElement.style.transform = 'translateX(30svw)';
    }
    registerElement.style.transform = 'translateX(0svw)';
  }
  else {
    if (sigInElement.style.transform === 'translateY(0svh)') {
      sigInElement.style.transform = 'translateY(50svh)';
    }
    hero.style.height = '50svh';
    registerElement.style.transform = 'translateY(0svh)';
  }
});