let square=document.getElementById('square');
square.addEventListener('click',function(){
    square.className+="animate";
});
let moveAndChangeColor=[
    {
        transform:'translateX(0)',
        background:'#2196f3'
    },
    {
        offset:0.8,
        transform:'translateX(100px)',
        background:'#2196f3'
    },
    {
        transform:'translateX(100px)',
        background:'#ef5350'
    }
]
let crircle=document.getElementById('cricle');
crircle.addEventListener('click',function(){
    crircle.animate(moveAndChangeColor,{
        duration:400,
        fill:'forwards'
    })

});

let spinner=document.getElementById('spinner');
let spinnerAnimataion =spinner.animate([
    {
        transform:'rotate(0)'
    },
    {
        transform:'rotate(359deg)'
    }
],{
    duration:1000,
    iterations:Infinity
})
document.getElementById('pause').addEventListener('click',function(){
    spinnerAnimataion.pause();
})
document.getElementById('play').addEventListener('click',function(){
    spinnerAnimataion.play();
})
document.getElementById('reverse').addEventListener('click',function(){
    spinnerAnimataion.reverse();
})
document.getElementById('cancel').addEventListener('click',function(){
    spinnerAnimataion.cancel();
})

document.getElementById('half').addEventListener('click',function(){
    spinnerAnimataion.playbackRate=0.5;
})
document.getElementById('normal').addEventListener('click',function(){
    spinnerAnimataion.playbackRate=1;
})
document.getElementById('double').addEventListener('click',function(){
    spinnerAnimataion.playbackRate=2;
})
document.getElementById('triple').addEventListener('click',function(){
    spinnerAnimataion.playbackRate=3;
})