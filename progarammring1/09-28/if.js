if (true) {
    console.log('true')
}

if (false) {
    console.log('false')
}
if (true)
    console.log('false')
let istrue = true;
if (isture) {
    console.log('istrue')
}
console.log('------------------------------------------------------------')
console.log('||or')

if(true||false){
    console.log('true||false')
}

if(false||true){
    console.log('false||true')
}
if(true||true){
    console.log('true||true')
}
if(false||false){
    console.log('faslse||false')
}


if(true && false){
    console.log('true && false')
}

if(false && true){
    console.log('false && true')
}
if(true && true){
    console.log('true && true')
}
if(false && false){
    console.log('faslse && false')
}
 let name = 'nemat'
if (name === 'aram' || name === 'christoffer') {
    console.log('Evaluation success');
}else{
    console.log('Evaluation failed');
    console.log('nothing is ture');
}

let name = 'nemat'
if (name.toLowerCase() === 'aram'.toLowerCase() ||
    name === 'christoffer'.toLowerCase()) {
    console.log('Evaluation success with .toLowerCase');
}else{
    console.log('Evaluation failed');
    console.log('nothing is ture');
}