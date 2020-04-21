  
document.addEventListener('DOMContentLoaded', ()=>{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 900;
    ctx.textAlign = 'start';
    ctx.font = 'normal 30px Arial';
      
    let x = 100;
    let y = 100;

    //text
    ctx.fillText('Aksi 1',190,90);
    ctx.fillText('Aksi 2',570,90);
    ctx.fillText('Aksi 3',190,440);
    ctx.fillText('Aksi 4',570,440);

//Aksi1
    //Kotak
    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 200);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = '#ECF0F1';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tutup
    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 200);
    ctx.rotate(Math.PI*-11/8);        //3.14 radians 180 deg
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();


    //Lingkaran
    ctx.save();
    ctx.beginPath();
    ctx.translate(225, 250)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

//Aksi2
    //Kotak
    ctx.save();
    ctx.beginPath();
    ctx.translate(540, 200);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = '#ECF0F1';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tutup
    ctx.save();
    ctx.beginPath();
    ctx.translate(540, 200);
    ctx.rotate(Math.PI*-9/8);        //3.14 radians 180 deg
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();


    //Lingkaran
    ctx.save();
    ctx.beginPath();
    ctx.translate(615, 250)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    
//Aksi3
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 560);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = '#ECF0F1';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tutup
    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 560);
    ctx.rotate(Math.PI*-7/8);        //3.14 radians 180 deg
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Lingkaran
    ctx.save();
    ctx.beginPath();
    ctx.translate(225, 610)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore(); 
    
//Aksi4
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(540, 560);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = '#ECF0F1';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tutup 
    ctx.save();
    ctx.beginPath();
    ctx.translate(540, 540);
    ctx.rotate(Math.PI*16/8);        //3.14 radians 180 deg
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Lingkaran
    ctx.save();
    ctx.beginPath();
    ctx.translate(615, 610)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();  
});

