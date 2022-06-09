async function foo(){
    var inp=document.querySelector("input").value;
    console.log(inp);
    var a=await fetch(`https://bible-api.com/${inp}`)
    var b=await a.json();
    console.log(b);
    var verse=document.querySelector(".verse");
    verse.innerText=b.text+""+b.reference;
}