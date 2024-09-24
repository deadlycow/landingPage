
const hero = document.querySelector('.hero');
const container = document.querySelector('.container-box');

const sigInElement = document.querySelector('#signIn');
const registerElement = document.querySelector('#register');

const btnSignIn = document.getElementById('js-btn-signin');
const btnReg = document.getElementById('js-btn-register');

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const { width } = entry.contentRect;
    if (width >= 768) {
      hero.style.height = '100svh';
      if (sigInElement.style.display === 'flex' || registerElement.style.display === 'flex') {
        hero.style.width = '70svw';
      }
    }
    else if (width < 768 && sigInElement.style.display === 'flex' || registerElement.style.display === 'flex') {
      hero.style.height = '50svh';
      hero.style.width = '100svw';
    }
  }
});

resizeObserver.observe(container);

btnSignIn.addEventListener('click', () => {

  if (container.getBoundingClientRect().width > 768) {
    hero.style.width = '70svw';
    sigInElement.style.display = 'flex';
    sigInElement.style.transform = 'translateX(0svh)';
  }
  else {
    hero.style.height = '50svh';
    sigInElement.style.display = 'flex';
    sigInElement.style.transform = 'translateY(0svh)';
  }


  // if (registerElement.style.display == 'flex') {
   
  //   registerElement.style.transform = 'translateY(50svh)';

  //   registerElement.addEventListener('transitionend', () => {
  //     registerElement.style.display = 'none';
  //   }, { once: true });
  // }



});

btnReg.addEventListener('click', () => {

  if (container.getBoundingClientRect().width > 768) {
    console.log('hej');
  }

  hero.style.height = '50svh';

  if (sigInElement.style.display == 'flex') {
    sigInElement.style.transform = 'translateY(50svh)';

    sigInElement.addEventListener('transitionend', () => {
      sigInElement.style.display = 'none';
      console.log('done');
    }, { once: true });
  }

  registerElement.style.display = 'flex';
  registerElement.style.transform = 'translateY(0)';
});