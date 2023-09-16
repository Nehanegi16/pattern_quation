n=5
let str=""
let s=0
for(let i=1;i<=n;i++){
    for(let j=n;j>=i-1;j--){
      str+=" A"
    }
    for(let k=1;k<=s;k++){

        str+=" *"
    }
    for(let m=n;m>=i;m--){
        str+= " B"
    }
    
    str+="\n"
    s+=2
}
console.log(str)