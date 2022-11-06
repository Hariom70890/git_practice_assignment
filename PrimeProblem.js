let num = 12;
let cont=0;
for(let i=1;i<=12;i++){
if(num%i==0){
cont++
}
}
if(cont===2){
console.log("prime");
}
else{
console.log("Not prime");
}