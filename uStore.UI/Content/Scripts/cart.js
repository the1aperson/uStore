
//using JSON (JavaScript Object Notaion) to store book items and information

var books = [
    {
        id: 1,
        title: "Shirtless Bear-Fighter! TP",
        author: "Jody Leheup & Sebastian Girner",
        price: 9.99
    },
    {
        id: 2,
        title: "Royal City Vol. 1: Next of Kin TP",
        author: "Jeff Lemire",
        price: 9.99
    },
    {
        id: 3,
        title: "Low Book One HC",
        author: "Rick Remender",
        price: 49.99
    },
    {
        id: 4,
        title: "I Hate Fairland Vol. 3: Good Girl TP",
        author: "Skottie Young",
        price: 16.99
    },
    {
        id: 5,
        title: "Saga: Book Two Deluxe HC",
        author: "Brian K. Vaughan",
        price: 49.99
    },
    {
        id: 6,
        title: "East of West Vol. 1: The Promise TP",
        author: "Jonathan Hickman",
        price: 9.99
    }
];

//Create a JS array to store the user's cart info
var cart = [];

//Add items to cart -- wired to ur <a> tags in HTML
function addToCart(id) {
    //if they have not added any titles yet, set the quantity to 1 and add the book to our array
    //otherwise add 1 to the quantity
    var bookObj = books[id - 1];
    if (typeof bookObj.qty === 'undefined') {
        bookObj.qty = 1;
        cart.push(bookObj);
    }
    else {
        bookObj.qty = bookObj.qty + 1;
    }//end if else

    //for testing purposes
    console.clear();
    var arrayLength = cart.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(cart[i])
    }

    //get cart notification
    document.getElementById('cart-notification').style.display = 'block';

    //total number of books in the cart
    var cartQty = 0;
    for (var i = 0; i < arrayLength; i++) {
        cartQty += cart[i].qty;
    }

    //this is the coolest part
    document.getElementById('cart-notification').innerHTML = cartQty;

    document.getElementById('cart-contents').innerHTML = getCartContents();



};//end of addToCart()

function getCartContents() {
    //create two variables, one to store the actual string of contents
    //and one to hold the total price of the books
    var cartContent = '';
    var cartTotal = 0;
    //MINI LAB
    //display the title, author, quantity, price, and Total Price of all cart contents

    for (i = 0; i < cart.length; i++) {
        cartContent += cart[i].title + '<br/>By: ' + cart[i].author + "<br/>Qty: " + cart[i].qty + " at " + cart[i].price + " each<br/><br />";
        cartTotal += cart[i].qty * cart[i].price;
    }
    cartContent += "Cart Total: $" + cartTotal.toFixed(2);


    return cartContent;
};