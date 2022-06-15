let display = document.getElementById("curStr");


let buttons = Array.from(document.getElementsByTagName("button"));

buttons.map(button => button.addEventListener('click',(e)=>{
    switch(e.target.innerText){
        case "AC":
        if(display.innerText)
            display.innerText = "";
            break;
        case "DEL":
         if(display.innerText)
            display.innerText = display.innerText.slice(0,-1);
            break;
        case "=":
            try{
            display.innerText = eval(display.innerText);
            }
            catch{
                display.innerText = "enter a valid exp..."
            }
            
            break;
        default:
            display.innerText += e.target.innerText;
    }
}))



