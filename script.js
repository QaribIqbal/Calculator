let string="";
console.log("Java imbeded successfully!");
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="=")
        {
            string=eval(string);
            document.getElementById("screen").value=string;
        }
     else if( e.target.innerHTML=="C"){
            string="";
            document.getElementById("screen").value=string;
        }
        else{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.getElementById("screen").value=string;
        }
    })
});