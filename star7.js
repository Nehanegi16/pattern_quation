let n=5
let str=""
for(let i=1;i<=n;i++){
    for(let j=i;j<=n;j++){
        str+=j
    }
    for(let s=1;s<i;s++){
        str+=" *"
    }
    for(let k=n;k>=i;k--){
        str+=k
    }
    str+="\n"
}
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        str+=j
    }
    for(let s=n;s>i;s--){
        str+=" *"
    }
    for(let k=1;k<=i;k++){
        str+=k
    }
    str+="\n"
}
console.log(str)
