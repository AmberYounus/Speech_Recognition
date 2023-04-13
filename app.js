const txt = document.querySelector('.txt');
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
let p = document.createElement("p")
recognition.addEventListener("result" , (e)=>{
    txt.appendChild(p)
    const text = Array.from(e.results)
    .map((result)=>result[0])
    .map((result)=>result.transcript)
    .join("")
    p.innerText = text;
    if(e.results[0].isFinal){
        if(text.includes("How are you?")){
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText ="I am fine";
            txt.appendChild(p);
        }
        if(
            text.includes("whats your name") || text.includes("what is your name")
        ){
            p = document.createElement("p");
            p.classList.add("replay")
            p.innerText="My name is Amber";
            txt.appendChild(p);

        }
        if(text.includes("open my facebook")){
            p = document.createElement("p");
            p.classList.add("replay")
            p.innerText="Opening My facebook";
            txt.appendChild(p);
            console.log("opening fb");
            window.open("https://www.facebook.com/")

        }
            p = document.createElement("p")
    }

})
recognition.addEventListener("end",()=>{
    recognition.start()
})
recognition.start()