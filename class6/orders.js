function orderSupplies(item, callback){
    var warehouse; //undefined
    var deliveryTime = Math.random()*3000;

    new Promise(function(resolve, reject){
        setTimeout(function(){
            warehouse = {
                paint: {
                    product: 'Neon Green Paint',
                    directions: function() { return 'mix it'}
                },
                brush: {
                    product: 'Paintbrush',
                    directions: function() { return 'start painting'}
                },
                tarp:{
                    product:'A Large Tarp',
                    directions: function() { return 'cover the floor'}
                }
            };

            if(warehouse[item]){
                resolve(warehouse[item]);
            }else{
                reject(new Error(`item ${item} is not in stock`));
            }
        }, deliveryTime);
         });
}
   
// orderSupplies('paint', function(item){
//    // console.log(`${item.product} was received, no we ${item.directions()}`);
//    receivedItem(item);
// })

// orderSupplies('tarp', receivedItem);//how to make this code to run in the order with paint first and then brush
// setTimeout(function(){
//     orderSupplies('paint', receivedItem);
//     setTimeout(function(){
//         orderSupplies('brush', receivedItem);
//     },3000);
// }, 3000); //callback pyramid - need to simplify

// var havePaint = false; //to handle asu=ynchronous issue

// orderSupplies('brush', function(item){
//     if(havePaint){//truthy make sure have paint, then get the brush
//         receivedItem(item);
//     }
//     else{//if no paint, then wait to get the paint before allowing brush to be received
//         var timer = setInterval(function(){//will run until 
//             if(havePaint){
//                 receivedItem(item);
//                 clearInterval(timer);
//             }
//         }, 500);

//     }
// });

// var havePaint = false;
// var haveBrush = false;

// orderSupplies('brush', function(item){
//     if(havePaint){//log the brush only if have the paint
//         return receivedItem(item);
//     }
//     haveBrush = item;//changing data type of haveBrush - you have the brush
// });
// orderSupplies('paint', function(item){
//     receivedItem(item);
//     //got brush first
//     if(haveBrush){
//         return receivedItem(haveBrush);//
//     }
//     havePaint = item;
// });

// const paint = new Promise(function(resolve, reject){//resolve and reject are both functions
//     orderSupplies('paint', resolve);
// });//Promise is a constructor function takes a callback
// const brush = new Promise(function(resolve, reject){//created Promise named brush
//     orderSupplies('brush', resolve);
// });
// const tarp = new Promise(function(resolve, reject){
//     orderSupplies('tarp', resolve);
// });

// tarp.then(function(item){
//     receivedItem(item);
//     return brush.then(receivedItem);//if return the brush promise, can reuse the catch below
//     })//success scenario
//     .then(function(){
//        return brush.then(receivedItem); 
//     })
//     .catch(function(error){
//         console.log(error);
//     });//fail scenario
// // orderSupplies('paint', function(item){ 
//     havePaint = true;
//     receivedItem(item);
// });

const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const tarp = orderSupplies('tarp');

tarp.then(function(item){
    receivedItem(item);
    return brush.then(receivedItem);
    paint.then(function(item){
        received
    })
})



console.log(paint);

function receivedItem(item){
    console.log(`${item.product} has arrived, let's ${item.directions()}`);
}
