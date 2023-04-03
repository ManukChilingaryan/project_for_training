
// find max num of array

function Find_max_num(arr){

let max = arr[0];

for(let i=1 ; i< arr.length ; i++){

if(max< arr[i])max = arr[i]

}
return max;
}

let arr = []

console.log(Find_max_num(arr))









