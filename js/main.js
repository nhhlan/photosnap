const toggle = document.querySelector('a.toggle');
const nav = document.querySelector('nav');
const switchToggle = document.querySelector('.pricing__switch--toggle');
const monthly = document.querySelector('.pricing__switch p:nth-of-type(1)');
const yearly = document.querySelector('.pricing__switch p:nth-of-type(2)');
const prices = document.querySelectorAll('.pricing__prices p:nth-of-type(1)');

toggle.addEventListener('click', (e) => {
    if(e.target.className === 'ham'){
        toggle.innerHTML = `<img class="close" src="assets/shared/mobile/close.svg" alt="toggle menu">`;
        nav.classList.remove('nav--hidden');
    } else {
        toggle.innerHTML = `<img class="ham" src="assets/shared/mobile/menu.svg" alt="toggle menu">`;
        nav.classList.add('nav--hidden');
    }
})


switchToggle.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
    
    if(switchToggle.classList.contains('active')){
        monthly.style.opacity = '0.5';
        yearly.style.opacity = '1.0';
        prices.forEach(price => {
            price.innerHTML = `$${(parseInt(price.innerText.slice(1, 3)) * 10).toFixed(2)}`;
        })  
    } else {
        monthly.style.opacity = '1.0';
        yearly.style.opacity = '0.5';
        prices.forEach(price => {
            price.innerHTML = `$${(parseInt(price.innerText.slice(1, 4)) / 10).toFixed(2)}`;
        })  
    }
})




