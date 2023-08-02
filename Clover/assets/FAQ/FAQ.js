

setTimeout(function(){
    $('.loader_bg').fadeToggle();
  }, 1500);

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})