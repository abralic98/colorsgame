let nizBoja=[];
let usporedba=[];
let usporedba2=[];
function Igra(){
    let polje=document.getElementsByClassName("polje");//glavno polje igre koje se randomizira
    let polje2=document.getElementsByClassName("polje")


    
    let boje=["red","blue","yellow","green","grey,","white","skyblue","orange"];

    let red=0;
    let blue=0;
    let yellow=0;
    let green=0;
    let black=0;
    let white=0;
    let skyblue=0;
    let orange=0;
    let broj;

    for(let i=0; i<16; i++){// randomiziranje boja
        broj=Math.floor(Math.random() * 7);
        if(broj==0){
            red++
            if(red<3){
                polje[i].style.background="red";
            }else{
                if(broj<7){
                    broj++
                }else{
                    broj--
                }
                
            }
        }
        if(broj==1){
            blue++
            if(blue<3){
                polje[i].style.background="blue";
            }else{
                if(broj<7){
                    broj++
                }else{
                    broj--
                }
                
            }
        }
        if(broj==2){
            yellow++
            if(yellow<3){
                polje[i].style.background="yellow";
            }else{
                if(broj<7){
                    broj++
                }else{
                    broj--
                }
                
            }
        }
        if(broj==3){
            green++
            if(green<3){
                polje[i].style.background="green";
            }else{
                if(broj<7){
                    broj++
                }else{
                    broj--
                }
                
            }
        }
        if(broj==4){
            black++
            if(black<3){
                polje[i].style.background="grey";
            }else{
                if(broj<7){
                    broj++
                }else{
                    broj--
                }
                
            }
        }
        if(broj==5){
            white++
            if(white<3){
                polje[i].style.background="white";
            }else{
                if(broj<7){
                    broj++
                }else{
                    broj--
                }
                
            }
        }
        if(broj==6){
            skyblue++
            if(skyblue<3){
                polje[i].style.background="skyblue";
            }else{
                if(broj<7){
                    broj++
                }else{
                    broj--
                }
                
            }
        }
        if(broj==7){
            orange++
            if(orange<3){
                polje[i].style.background="orange";
            }else{
                if(broj<7){
                    broj++
                }else{
                    broj--
                }
                
            }
        }

        
    }

    for(let i=0; i<16; i++){//da stavimo svako polje redom koju boju ima
        nizBoja.push(polje[i].style.background);
    }

}

function ProvjeriPolje(brojPolja){// otvara polje na klik
    
    let polje2=document.getElementsByClassName("polje2");
    polje2[brojPolja].style.background=nizBoja[brojPolja];
    usporedba.push(nizBoja[brojPolja]);
    usporedba2.push(brojPolja);
    Failed(usporedba,usporedba2);
    
}

function Failed(usporedba,usporedba2){// provjerava jel su iste boje ako jesu konzola bravo i brise array
    console.log(usporedba[0]);
    console.log(usporedba[1]);
    console.log(usporedba.length)
    if(usporedba[0]!=usporedba[1]){
        if(usporedba.length==2){
            setTimeout(vratiCrno,500);
        }
        return;
    }else{
        console.log("bravo");
        usporedba.length=0;
        usporedba2.length=0;
        
    }
    
}

function vratiCrno(){ // planiras dodat varijablu koja gleda na bravo nesto sitices se kekk ides igrat left poz
    let polje2=document.getElementsByClassName("polje2");
    console.log(usporedba2+" xxds")
    polje2[usporedba2[0]].style.background="black";
    polje2[usporedba2[1]].style.background="black";
    usporedba.length=0;
    usporedba2.length=0;
    console.log(usporedba2+ "posle");
}