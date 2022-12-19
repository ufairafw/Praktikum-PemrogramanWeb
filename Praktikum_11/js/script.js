document.querySelectorAll("#option a").forEach((a) => {
    // jika di klik, dia akan menjalankan sebuah function computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element hasil komputer dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // mengisi pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan komputer secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;
    
    // jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        alert("DRAW");
    }

    // jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("User WIN");
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User WIN");
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User WIN");
    }

    // jika komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Komputer WIN");
    } else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Komputer WIN");
    } else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Komputer WIN");
    }
}
