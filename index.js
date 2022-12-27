const card = document.querySelectorAll('.card');
const next= document.querySelector('.next');
const before= document.querySelector('.before');
const random= document.querySelector('.random');
let number = 1;

function change(){
    before.addEventListener('click',()=>{
        if (number == 1){
            number = card.length+1;
         }
        for(let i = 0; i < card.length; i++){
            card[i].style.display = 'none' 
        }
        number--;
        card[number-1].style.display = 'flex' 
    })

    next.addEventListener('click',()=>{
        for(let i = 0; i < card.length; i++){
            card[i].style.display = 'none' 
        }
        number++
        if(number > card.length){
           number = 1
        }
        card[number-1].style.display = 'flex'
    })

    random.addEventListener('click',()=>{
        let cardRandom = Math.floor(Math.random()*card.length+1);
        for(let i = 0; i < card.length; i++){
            card[i].style.display = 'none' 
        }
        card[cardRandom-1].style.display = 'flex';
    })
}
change()







