const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// إعداد الجسيمات الذهبية
let particles = [];
for(let i=0; i<100; i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*3+1,
    d: Math.random()*1
  });
}

// إعداد الضباب
let fog = [];
for(let i=0; i<50; i++){
  fog.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    alpha: Math.random()*0.2+0.05,
    radius: Math.random()*200+100,
    speed: Math.random()*0.2+0.05
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // رسم الجسيمات الذهبية
  for(let i=0;i<particles.length;i++){
    let p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2,false);
    ctx.fillStyle = "rgba(255,215,0,0.7)";
    ctx.fill();
    p.y += p.d;
    if(p.y > canvas.height) p.y = 0;
  }

  // رسم الضباب
  for(let i=0;i<fog.length;i++){
    let f = fog[i];
    ctx.beginPath();
    ctx.arc(f.x,f.y,f.radius,0,Math.PI*2,false);
    ctx.fillStyle = `rgba(200,200,200,${f.alpha})`;
    ctx.fill();
    f.x += f.speed;
    if(f.x - f.radius > canvas.width) f.x = -f.radius;
  }

  requestAnimationFrame(draw);
}

draw();
