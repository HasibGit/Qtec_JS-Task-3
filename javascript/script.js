
var products = [
  {
    name: "Orange tshirt",
    src: "images/shirt.png",
    price: 3000
  },

  {
    name: "Red tshirt",
    src: "images/shirt2.png",
    price: 3000
  },

  {
    name: "Black tshirt",
    src: "images/shirt3.png",
    price: 3000
  },

  {
    name: "Blue tshirt",
    src: "images/shirt4.png",
    price: 3000
  },

  {
    name: "Green tshirt",
    src: "images/shirt5.png",
    price: 3000
  },

];


function updateTotal(){

  var total = 0;
  var prices = document.getElementsByClassName('cartItemPrice');

  for(var i = 0; i < prices.length;i++){
    var price = prices[i].innerText;
    price = price.replace('BDT:','');

    price = parseFloat(price);
    total = total + price;
  }



  var subtotal = document.getElementsByClassName('subtotal')[0];

  var str = "BDT " + total + '.00';

  subtotal.innerText = str;

  var totalPrice = document.getElementsByClassName('total')[0];
  var paymentbtn = document.getElementsByClassName('paymentbtn')[0];


  totalPrice.innerText = str;
  paymentbtn.innerText = "Pay " + str;

}


var items = document.getElementsByClassName('item');

for(var i = 0;i < items.length;i++){
  var item = items[i];

  item.addEventListener('click', addItem);
}

function addItem(event){
  var addButton = event.target;
  var cardBody = addButton.parentNode;

  var name = cardBody.getElementsByClassName('itemName')[0].innerText;
  var price = cardBody.getElementsByClassName('itemPrice')[0].innerText;

  var imageURL = cardBody.parentNode.getElementsByClassName('itemImage')[0].src;

  addToCart(name, price, imageURL);
}

function addToCart(name, price, imageURL){
  var newItem = document.createElement('div');

  var contents = `
                <div class="row">
                   <div class="col-md-3">
                     <img src="${imageURL}" alt="" style="width: 30px; height: 30px">
                   </div>
                   <div class="col-md-3">
                     <p>${name}</p>
                   </div>
                   <div class="col-md-3">
                     <p class="cartItemPrice">BDT:${price}</p>
                   </div>
                   <div class="col-md-3">
                     <a type="button" name="button" class="delete"><i class="fas fa-trash"></i></a>
                   </div>
                </div>
  `;
  newItem.innerHTML = contents;

  checkoutList = document.getElementsByClassName('checkoutColumn')[0];

  checkoutList.append(newItem);

  updateTotal();

  var deleteButtons = document.getElementsByClassName("delete");

  for(var i = 0; i < deleteButtons.length; i++){
    var button = deleteButtons[i];

    button.addEventListener('click', removeItem);
  }

}




var deleteButtons = document.getElementsByClassName("delete");

for(var i = 0; i < deleteButtons.length; i++){
  var button = deleteButtons[i];

  button.addEventListener('click', removeItem);
}


function removeItem(event){
  var clickedButton = event.target;
  clickedButton.parentNode.parentNode.parentNode.remove();

  updateTotal();
}
