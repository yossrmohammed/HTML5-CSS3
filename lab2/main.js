const canvas= document.getElementById('canvas')
const ctx= canvas.getContext('2d');
const mybtn= document.getElementById('mybtn');
const input = document.getElementById('mycolor');
mybtn.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const color = input.value
    const numCircles= 100
    for(let i =0; i<numCircles;i++){
        const x= Math.floor(Math.random()* canvas.width)
        const y= Math.floor(Math.random()* canvas.height)
        const r= 30
        ctx.beginPath() 
        ctx.strokeStyle=color
        ctx.arc(x,y,r,0,2*Math.PI)
        ctx.fillStyle='white';
        ctx.stroke();

        ctx.fill()

    }
})