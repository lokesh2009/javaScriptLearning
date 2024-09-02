const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("foo");
    },300);
});

promise.then(handledfullfilA,handleRejectedA)
promise.then(handledFullfillB, handleRejectedB);

const cart = ["Shoes","Socks", "Wallet"]
// Example of call back hell

createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalace()
        });
    });
});

// To solve call back hell

createOrder(cart)
.then((orderId)=>proceedToPayment(orderId))
.then((paymentInfo)=>showOrderSummary(paymentInfo)) 
.then((paymentInfo)=> updateWalletBalace(paymentInfo));
