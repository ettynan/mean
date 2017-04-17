// var MyObjConstructor = function(name){
//     var myPrivateVar = "Hello";
//     this.name = name;
//     this.method = function(){
//         console.log( "I am a method");
//     };
// }
// var obj1 = new MyObjConstructor("object1");
// var obj2 = new MyObjConstructor("object2");
// console.log(obj1);
// obj1.newProperty = "newProperty!";
// obj1.__proto__.anotherProperty = "anotherProperty!";
// console.log(obj1.newProperty);
// console.log(obj1.__proto__.anotherProperty);

// console.log(obj2.newProperty);
// console.log(obj2.__proto__.anotherProperty);

// function Cat(cat_name){
//     var name = cat_name;
//     this.getName = function(){
//         return name;
//     };
// }
// //add cat method to the cat prototype
// Cat.prototype.sayHi = function(){
//     console.log("meow");
// };
// //add properties to the cat prototype
// Cat.prototype.numLegs = 4;
// var muffin = new Cat("muffin");
// var biscuit = new Cat("biscuit");
// console.log(muffin, biscuit);

// //access prototype properties same way as would access 'own' properties
// muffin.sayHi();
// biscuit.sayHi();
// console.log(muffin.numLegs);

//build a node for a singlylinked list
var Node = function(val){
    this.val = val;
    this.next = null;
}

Node.prototype.passThis = function(custom_return){
    console.log(this, "this");
    console.log(this.self, "self");
    consol.log(custom_return, "My return");
    return custom_return;
}

// make SSL class
var SingleList = function(){
    this.head = null;
}
SingleList.prototype.add = function(val){
    //check to see if actually has a head - looks to see by value where to set the new node to the head. So adding nodes to front of list
    if(this.head){
        this.head = new Node(val);
        return this;
    }
    //moving through the list
    var current = this.head;
    while(current.next){
        current = current.next;
    }
    current.next = new Node(val);
    return this;
};
SingleList.prototype.dequeue = function(callback){
    var eliminatedNode = this.head;
    this.head = this.head.next;
    eliminatedNode.next = null;
    if(typeof(callback)=="function"){
        callback(eliminatedNode);
    }
    console.log(this.head);
    return this;
};

sList = new SingleList();
sList.add(1).add(2).add(3).add(4).head.next.passThis(sList).dequeue(
    function callback(myNode){
        console.log(myNode.val, "CHAINING INSANITY!");
})
.dequeue(
    function anotherCallback(myNode){
        console.log("************");
        console.log("Stop!", myNode);
    });