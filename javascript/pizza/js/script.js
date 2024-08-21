let modalKey = 0;
let cart = [];
let modalQty = 1;
const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);

pizzaJson.map((item, index) => {
  let pizzaItem = qs('.models .pizza-item').cloneNode(true);

  pizzaItem.setAttribute('data-key', index);
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${Number(item.price).toFixed(2)}`;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('[data-js="addPizza"]').addEventListener('click', (event) => {
    event.preventDefault();
    let key = event.target.closest('.pizza-item').getAttribute('data-key');

    modalQty = 1;
    modalKey = key;

    qs('.pizzaBig img').src = pizzaJson[key].img;
    qs('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    qs('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    qs('.pizzaInfo--actualPrice').innerHTML = `R$ ${Number(pizzaJson[key].price).toFixed(2)}`;
    qs('.pizzaInfo--size.selected').classList.remove('selected');
    qsa('.pizzaInfo--size').forEach((size, sizeIndex) => {
      if(sizeIndex === 2){
        size.classList.add('selected');
      }
      size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    qs('.pizzaInfo--qty').innerHTML = modalQty;


    
    qs('.pizzaWindowArea').style.opacity = 0;
    qs('.pizzaWindowArea').style.display = 'flex';

    setTimeout(() => {
      qs('.pizzaWindowArea').style.opacity = 1;
    }, 150);
  });

  qs('.pizza-area').append(pizzaItem);
});

function closeModal(){
  qs('.pizzaWindowArea').style.opacity = 0;
  
  setTimeout(() => {
    qs('.pizzaWindowArea').style.display = 'none';
  }, 150);
}

qsa('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
  item.addEventListener('click', closeModal);
});

qs('.pizzaInfo--qtymenos').addEventListener('click', ()=> {
  if(modalQty > 1){
    modalQty--;
    qs('.pizzaInfo--qty').innerHTML = modalQty;
  }
});

qs('.pizzaInfo--qtymais').addEventListener('click', ()=> {
  modalQty++;
  qs('.pizzaInfo--qty').innerHTML = modalQty;
});

qsa('.pizzaInfo--size').forEach((size, sizeIndex) => {
  size.addEventListener('click', (event) => {
    qs('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');
  });
});

qs('.pizzaInfo--addButton').addEventListener('click', () => {
  let size = parseInt(qs('.pizzaInfo--size.selected').getAttribute('data-key'));
  let identifier = pizzaJson[modalKey].id+'@'+size;
  let key = cart.findIndex((item) => item.identifier === identifier);

  if(key > -1){
    cart[key].qty += modalQty;
  } else {
    cart.push({
      identifier,
      id: pizzaJson[modalKey].id,
      size,
      qty: modalQty
    });
  }

  updateCart();
  closeModal();
});

qs('.menu-openner span').addEventListener('click', () => {
  if(cart.length > 0){
    qs('aside').style.left = '0';
  }
});

qs('.menu-closer').addEventListener('click', () => {
  qs('aside').style.left = '100vw';
});

function updateCart(){
  qs('.menu-openner span').innerHTML = cart.length;

  if(cart.length > 0){
    qs('aside').classList.add('show');
    qs('.cart').innerHTML = '';

    let subtotal = 0;
    let desconto = 0;
    let total = 0;
    
    for(let i in cart){
      let pizzaItem = pizzaJson.find((item) => item.id === cart[i].id);
      subtotal += pizzaItem.price * cart[i].qty;
      
      let cartItem = qs('.models .cart--item').cloneNode(true);

      let pizzaSizeName;
      switch(cart[i].size){
        case 0:
          pizzaSizeName = 'P';
          break;
        case 1:
          pizzaSizeName = 'M';
          break;
        case 2:
          pizzaSizeName = 'G';
          break;
      }
      let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

      cartItem.querySelector('img').src = pizzaItem.img;
      cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
      cartItem.querySelector('.cart--item--qty').innerHTML = cart[i].qty;
      cartItem.querySelector('.cart--item-qtymenos').addEventListener('click', () => {
        if(cart[i].qty > 1){
          cart[i].qty--;
        } else {
          cart.splice(i, 1);
        }
        updateCart();
      });

      cartItem.querySelector('.cart--item-qtymais').addEventListener('click', () => {
        cart[i].qty++;
        updateCart();
      });

      qs('.cart').append(cartItem);
    }

    desconto = subtotal * 0.1;
    total = subtotal - desconto;

    qs('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
    qs('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
    qs('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

  } else {
    qs('aside').classList.remove('show');
    qs('aside').style.left = '100vw';
  }
}
