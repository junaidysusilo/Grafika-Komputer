  
document.addEventListener('DOMContentLoaded', ()=>{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 700;
    canvas.height = 1000;
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 2;
    ctx.textAlign = 'start';
    ctx.font = 'normal 30px Arial';
      
    let x = 100;
    let y = 100;

    //text
    ctx.fillText('Aksi 1',112,90);
    ctx.fillText('Aksi 2',512,90);
    ctx.fillText('Aksi 3',112,440);
    ctx.fillText('Aksi 4',512,440);

//Aksi1
    //Badan
    //Kotak
    ctx.save();
    ctx.beginPath();
    ctx.translate(75, 200);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(75, 200);
    ctx.rotate(Math.PI*-11/8);        //3.14 radians 180 deg
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();


    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 250)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

//Aksi2
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 200);
    ctx.rect(0,0,100,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 200);
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
    ctx.translate(550, 250)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    
//Aksi3
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(100, 560);
    ctx.rect(0,0,100,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(100, 560);
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
    ctx.translate(150, 610)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore(); 
    
//Aksi4
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 560);
    ctx.rect(0,0,100,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 540);
    ctx.rotate(Math.PI*16/8);        //3.14 radians 180 deg
    ctx.rect(0,0,100,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(550, 610)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();  
});

