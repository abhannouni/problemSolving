let n = "371";
if(typeof(n) == "string"){
    n= parseInt(n);
}
arr = n.toString().split("");
exp = arr.length
x = 0;
for(let i = 0;i<exp ; i++){
 x += Math.pow(parseInt(arr[i],10), exp);
}

console.log(x)
if(x===n){
    console.log("le nombre est amstrong")
}else{
    console.log("le nombre n'est pas amstrong")
}
