/*animacao suave de efeito ancora*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  /*executar a animacao apos carregar todo o css (evitar bug)*/

  window.addEventListener('load', () => {
    let title1 = document.querySelector('.h-header h1')
    let title2 = document.querySelector('.h-header h2')
    title1.style.display = 'block';
    title2.style.display = 'block';
});