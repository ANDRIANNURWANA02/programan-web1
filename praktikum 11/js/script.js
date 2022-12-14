document.querySelectorAll("a").forEach((a)=>{
    //jika di klik akan menjalankan fungsi ComputerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    //pilihan user 
    let pilihanuser = element.target.innerText;

    // menangkap element pilian komputer
    let pilihanKomputer =document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock","Paper","Scissors"];

    // pilihan random untuk komputer
    pilihanKomputer.innerHTML =  choices [Math.round (Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML

    // jika pilihan user == pilihan komputer (draw)
    if(pilihanuser == pilihanKomputer){
        setTimeout(()=>alert("DRAW"), 300);
    }

    // jika pilihan user yang menang
    if(pilihanuser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN")
    }else if(pilihanuser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WINN");
    }else if(pilihanuser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER WINNN");
    }
        // jika pilihan user yang kalah
     if(pilihanuser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER LOS");
    
    }else if(pilihanuser == "Scissors" && pilihanKomputer == "Rock"){
        alert("USER LOSE");
    
    }else if(pilihanuser == "Paper" && pilihanKomputer == "Rock"){
        alert("PLAYER LOSE");
    }
        
}