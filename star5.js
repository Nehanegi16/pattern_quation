        let n=5
let str=""
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=n;j++)
    {
        if(i<=1 & j<=1){
            str+="* "
        }
        else if(i==2 & j<=3){
            str+='*  '
        }
        else if(i==3 & j%2==0){
            str+=" * "
        }
        else if(i==4 &j==i-1){
            str+="   *"
        }
        else if(i==5 & j==1 || i==5 & j==5){
            str += "*     "
        }

    }
    str+="\n"
}
console.log(str)