const cart = ["Sunscream","Lotion","gels"]

createOrder(cart, function(orderId){
    api.paymentToMethod(orderId)
});

const promise = createOrder(cart);

promise.then(function(orderId){
    proceedToPayment(orderId)
});

// fetch() function returns us promise
