document.addEventListener("keydown",  (e)=>{
    console.log("Your keycode is:", e.code);
    if( e.code=="ArrowUp"){
        man=document.querySelector(".man")
        man.classList.add('animateMan')

        setTimeout(() => {
            man.classList.remove('animateMan')
        }, 700);
        
    }
    if( e.code=="ArrowRight"){
        man=document.querySelector(".man")
        manx=parseInt(window.getComputedStyle(man,null).getPropertyValue('left'));
        man.style.left=manx+112+"px";
        
        
    }
    if( e.code=="ArrowLeft"){
        man=document.querySelector(".man")
        manx=parseInt(window.getComputedStyle(man,null).getPropertyValue('left'));
       
        
        man.style.left=(manx - 112)+"px";   
        
        
    }
    
})
setInterval(() => {
    man=document.querySelector(".man")
    gameOver=document.querySelector(".gameover")
    dragon=document.querySelector(".dragon")

    mx=parseInt(window.getComputedStyle(man,null).getPropertyValue('left'));
    my=parseInt(window.getComputedStyle(man,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'));

    offsetX=Math.abs(mx-ox);
    offsetY=Math.abs(my-oy);
    console.log(offsetX);
    console.log(offsetY);
    
    if(offsetX<53 && offsetY<28){
        gameover=document.querySelector(".gameover");
        gameover.style.visibility="visible"
        dragon.classList.remove("dragonAnimation")
        
    } 
}, 100);

