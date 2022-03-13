///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart
    .reduce((a, c) => a + c.price, 0)

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = final(function(cartTotal, couponValue, tax){

    return cartTotal / percentToGet
})


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    //// Name <<< We will need a name property to identify who the order is for
    //// Address <<< We need an address property to alert our delivery drivers where the customer is located
    //// Pickup / Delivery? <<< A pickup or delivery inquery to alert us if they are going to come to our store or if we will need to dispatch a driver
    //// Items <<< We will need to know what food and drinks the customer ordered so we can prepare whatever they may have ordered
    //// Total <<< A total price property so we know what to charge the customer on checkout
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = [
{
    name: 'jeff',
    address: '123 Whatever St',
    pOrD: 'delivery',
    items: 'carneasada burrito, large diet coke',
    total: 10.00
},
] 