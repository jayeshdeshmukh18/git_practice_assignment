function prime(num){
    let factors=0;
    for (let i=1;i<=num;i++){
        if(num%i==0){
            factors++;
        }
    }
    if(factors==2){
        return true;
    }
    return false;
}

let answer=prime(7);
if(answer==true){
    console.log("prime")
}else{
    console.log("Not prime")
}