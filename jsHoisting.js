//1:
console.log(hello);
var hello = 'world'; // output: undefined

//2:
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle); // Output: magnet
}

//3:
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan); // Output: nothing 
}
console.log(brendan); // Outputs: super cool

//4:
var food = 'chicken';
console.log(food); // Output: chicken
eat(); // Output: half-chicken
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//5:
 mean(); // Output: error
 console.log(food);  
 var mean = function () {
     food = "chicken";
     console.log(food);
     var food = "fish";
     console.log(food);
 }
 console.log(food);

//6:
console.log(genre); // Output: undefined
var genre = "disco";
rewind(); // Output: rock, r&b
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); // Output: disco

//7:
dojo = "san jose"; 
console.log(dojo); // Output: san jose
learn(); // Output: seattle, burbank
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); // Output: san jose