let n=5
let str=""
for(let i=1; i<=n; i++){
    for(let k=i; k<=n; k++){
        str +="*"
    }
    str +="\n"
}
for(let m=1; m<=n; m++){
    for(let o=1; o<=m; o++){
        str +="*"
    }
    str +="\n"
}

console.log(str)