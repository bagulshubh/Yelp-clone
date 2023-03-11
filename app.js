let tags = document.querySelectorAll('.cate-tags');
let lines = document.querySelectorAll('.red-line');


for(let i = 0;i<tags.length;i++){

    tags[i].addEventListener('mouseover',function(){
        lines[i].style.cssText=`        
      display:block;
      transition-duration: 200ms;
      opacity:1;
     `
    });

    tags[i].addEventListener('mouseout',function(){
        lines[i].style.cssText=`
        opacity:0;
     `
    });

}