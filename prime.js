function prime(num){
let counter=0;
    for (let i=1;i<=num;i++){
        if(num%i==0){
          counter++; 
            
        }
    }
    if(counter==2){
       return true
    }
      return false

}

let ans=prime(7);
if (ans==true){
 console.log("Prime");
}
else{
   console.log("Not Prime")
}