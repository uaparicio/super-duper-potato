
/**document.getElementById('button').onclick = function() {
    console.log("capture the element click");
    document.getElementById("demo").innerHTML = "this is a first testing event in JS"
}
document.addEventListener('click', function() {
    console.log("Hello World from the EventListener");
    document.getElementById("demo").innerHTML = "this is a first testing event in JS"

});*/

document.getElementById('button').addEventListener('click', function() {
    console.log("Hello World from the EventListener");
    document.getElementById("demo").innerHTML = "this is a first testing event in JS"

});

document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor =  '#FF0000';
    
});

document.getElementById('defaultButton').addEventListener('click', function() {
    document.body.style.backgroundColor =  'beige';
    
});

document.getElementById('hideButton').addEventListener('click', function() {
    document.getElementById('demo').style.display =  'none';

});

const collection = document.getElementsByClassName('test');
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "green";
    
}
{

}
