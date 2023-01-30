const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');
const mediaQueryList = window.matchMedia('(min-width: 769px)');
// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})


function screenTest(e) {
   if (e.matches) {
     /* la ventana gráfica tiene más de 769 píxeles de ancho */
    sideMenu.style.display = "block";
  } else {
     /* la ventana gráfica tiene 769 píxeles de ancho o menos */
    sideMenu.style.display = "none";
  }
 }

 mediaQueryList.addListener(screenTest);

// close sidebar
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
    if(themeToggler.querySelector('span:nth-child(1)').classList.contains('active')){
        themeToggler.querySelector('span:nth-child(1)').classList.remove('active')
        themeToggler.querySelector('span:nth-child(2)').classList.add('active')
    }else if(themeToggler.querySelector('span:nth-child(2)').classList.contains('active')){
        themeToggler.querySelector('span:nth-child(2)').classList.remove('active')
        themeToggler.querySelector('span:nth-child(1)').classList.add('active')
    }
})

// fill orders in table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                <td class="primary">Details</td>
                `;
    tr.innerHTML = trContent;

    document.querySelector('table tbody').appendChild(tr);
});