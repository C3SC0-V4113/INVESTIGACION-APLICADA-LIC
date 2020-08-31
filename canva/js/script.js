console.log("Hola Mundo");
  var lienzo=document.getElementById("canvas1");
  console.log(lienzo);
  lienzo.width=window.innerWidth;
  lienzo.height=window.innerHeight;
  var c=lienzo.getContext('2d');
  console.log(c);

var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dx=4;
var dy=4;
var radius=30;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  c.beginPath();
  c.arc(x,y,radius,0,Math.PI*2,false);
  c.strokeStyle = "blue";
  c.stroke();
  c.fill();
  if (x+radius>innerWidth || x-radius<0) {
    dx=-dx;
  }
  if (y+radius>innerHeight || y-radius<0) {
    dy=-dy;
  }
  x+=dx;
  y+=dy;
}
animate();