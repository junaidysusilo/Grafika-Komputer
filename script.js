  
document.addEventListener('DOMContentLoaded', ()=>{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 700;
    canvas.height = 1000;
    ctx.fillStyle = 'cornflowerblue';
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 2;
    ctx.textAlign = 'start';
    ctx.font = 'normal 30px Arial';
    

    

      
    let x = 100;
    let y = 100;

    //text
    ctx.fillText('Aksi 1',112,150);

//Aksi1
    //Badan
    //Kotak
    ctx.save();
    ctx.beginPath();
    ctx.translate(100, 200);
    ctx.rect(0,0,100,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(100, 200);
    ctx.rotate(Math.PI*-11/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();


    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(125, 225)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Mata Kanan
    ctx.save();
    ctx.beginPath();
    ctx.translate(175, 225)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

//Aksi2
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 280);
    ctx.rect(0,0,100,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 280);
    ctx.rotate(Math.PI*-9/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();


    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(525, 305)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Mata Kanan
    ctx.save();
    ctx.beginPath();
    ctx.translate(575, 305)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    
//Aksi3
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(100, 760);
    ctx.rect(0,0,100,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(100, 760);
    ctx.rotate(Math.PI*-7/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(125, 785)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Mata Kanan
    ctx.save();
    ctx.beginPath();
    ctx.translate(175, 785)
    ctx.scale(1,1)
    ctx.arc(0, 0, 15, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();    
});

