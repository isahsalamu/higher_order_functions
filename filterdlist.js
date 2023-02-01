const  numsarray = [1,2,3,4,5,6,7,8,9,10];

function filterOdd(numsarray) {

    const filterdArray = [];

    for (let i = 0; i < numsarray.length; i ++){
        if(numsarray[i] % 2 !== 0){

            filterdArray.push(numsarray[i]);

        }
    }

    return filterdArray;

}

console.log(filterOdd(numsarray));


