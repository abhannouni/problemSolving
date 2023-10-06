// var PMS = new Promise((resolveCallBack,rejectCallBack)=>{
//     let a = false;
//     if(a){
//         resolveCallBack("rah dkhal l condition resolve")
//     }else{
//         rejectCallBack("dkhal reject")
//     }
// })

// console.log(PMS);

// let resolrver = (resoleValue) => console.log("lahoma barik nadi " + resoleValue); 
// let rejecter = (rejectValue) => console.log("3iayn 3iyan " + rejectValue); 



// const n = 0;
// const arr = [1, 2, 3, 4, 5, 6, 7, 8,9];
// var arr1 = [];
// if(n != 0){
//     while (arr.length > 0) {
//         var arr2 = arr.splice(0, n);
//         arr1.push(arr2);
//     }
//     console.log(arr1);
// }else {
//     console.log(arr);
// }


var str1 = "palce"
var str2 ="pce"
function check(str1, str2) {
    if(str1 === str2){
        return true;
    }
    if (str1.length == str2.length) {
        let cpt =0;
        for(let i = 0; i<str1.length ; i++){
            if(str1[i] != str2[i]){
                cpt++
                str2[i] = str1[i];
            }
        }
        console.log(str1);
        console.log(str2);
        if(cpt==1 || cpt ==0){
            return true;
        }
        return false;
    }else 
    if(str1.length - str2.length >= 1 ){
        
        str2 = checkIfAdd(str1,str2);
        return check(str1, str2);
    }else{
        console.log("bzaf");
        return false;
    }
}

function checkIfAdd(str1,str2) {
    j = str1.length;
    let index = [];
    for(let i = 0 ; i<j ; i++){
        if(str1[i] != str2[i] && str1[i+1] == str2[i]){
            index.push(i);
            console.log(`ajoute "${str1[i]}" l'indice "${i}"`);
            str2 = insertion(str2,i,str1[i]);
            // console.log(str2);
            return str2;
        }else if (str1[i] != str2[i] && str1[i+1] != str2[i]) {
            str2[i] = str1[i];
            console.log(`remplace "${str2[i]}" par "${str1[i]}" => l'indice ${i} `);
        }
    }
    return str2;
}

function insertion(arr,index,value) {
    return [...arr.slice(0, index),value,...arr.slice(index)];
}
function checkequal(str1,str2,i) {
    for(let j = i+1 ; j < str1.length ; j++){
        if(str1[i] == str2[j]){
            return 1;
        }
    }
    return 0;
}

check(str1, str2)
