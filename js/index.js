
//style h2 tag 
const h2Tag = document.getElementsByTagName('h2');

for(const h2 of h2Tag){

    h2.style.color='lightblue';
}

// style backpack section 
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor='tomato';
backPack.style.padding='40px';
backPack.style.borderRadius='10px';


// card style 
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius='30px';
}

//button handler 
const buyButton = document.getElementsByClassName('buy-button');
for(const button of buyButton){
    button.addEventListener("click", function(){
        console.log('hello');
      });
}

//delete card
//it will remode only button if i click icon..because of event..if i select icon it remove the parent of it means the button

// const cardButtons = document.getElementsByClassName('card-btn');
// console.log(cardButtons);
// for(const cardBtn of cardButtons){
//    cardBtn.addEventListener('click',function(event){
//     // event.target.parentNode.parentNode.style.display='none';
//     // or 
//     event.target.parentNode.parentNode.remove();
 

//    }) ;
// }


// // remove card when click on button 
const jsBtn = document.getElementsByClassName('card-btn');
for(const btn of jsBtn){

    btn.addEventListener('click', function(){
        // btn.parentNode.parentNode.style.display = 'none';
        // or 
        btn.parentNode.parentNode.remove();
    });
}

// check email 
document.getElementById('email-input').addEventListener('keyup',function(event){
if(event.target.value=='email'){
    document.getElementById('email-btn').removeAttribute('disabled');
}
else{
    document.getElementById('email-btn').setAttribute('disabled',true);
}
});
//'images/categories/watch.png';
// change image on mouseover
const images = document.getElementsByClassName('card-image');
for(const image of images){
    const prevSrc= image.src;

    image.addEventListener('mouseenter',function(){//mouseover o use kora jay
        image.src='images/categories/shoes.png';

    
    });
    image.addEventListener('mouseleave',function(){//mouseout o use kora jay

        image.src=prevSrc;

    
    });

}

//change color on double click
document.getElementById('subscribe').addEventListener('dblclick',function(){

    document.getElementById('subscribe').style.backgroundColor='pink';

});


