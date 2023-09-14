let n=6
let str=""
for(let i=1;i<n;i++)
{
    for(let j=1;j<n;j++){
        if(i==j ||j==n-i){
            str+="* "
        }
        else{
            str+="  "
        }
    }
    str+="\n"
}
console.log(str)