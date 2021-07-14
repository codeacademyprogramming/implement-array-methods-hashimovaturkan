//filter
let array=[
    1,2,3,4,5,6
];
const myFilter = function(array, myFunc){
    let newArray=[];
    
    for(let i=0;i<array.length;i++){
        if(myFunc(array[i],i,array)===true){
            newArray.push(array[i]);
        }
    }
    return newArray;

};


let resultArrayFilter = myFilter(array,(value,index)=>value>3 && index<4);
console.log(resultArrayFilter);

//map
let array2=[
    1,2,3,4,5,6
];

const myMap = function(array,myFunc){

    let newArray=[];
    for(let i=0;i<array.length;i++){
        let a = myFunc(array[i],i,array);
        newArray.push(a);
    }
    return newArray;
}

let resultArrayMap = myMap(array2,(value)=> value*3);
console.log(resultArrayMap);

//forEach

let array3=[
    1,2,3,4,5,6
];

const myForEach = function(array,myFunc){

    for(let i=0;i<array.length;i++){
        a = myFunc(array[i],i,array);
    }
    
}

myForEach(array3,(value, index)=>console.log(value, index));


//some
let array4=[
    1,2,3,4,5,6
];

const mySome = function(array,myFunc){

    for(let i=0;i<array.length;i++){
        if(myFunc(array[i],i,array)===true)
        return true;
    }
    return false;
    
}

console.log(mySome(array4,(value)=>value>12));


//every

let array5=[
    1,2,3,4,5,6
];

const myEvery = function(array,myFunc){

    for(let i=0;i<array.length;i++){
        if(myFunc(array[i],i,array)===false)
        return false;
    }
    return true;
    
}

console.log(myEvery(array5,(value)=>value>0));


//reverse
let array6=[
    1,2,3,4,5,6
];

function reverse(array) {
    const result = [];
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
    }
    console.log(result)
}

reverse(array6);