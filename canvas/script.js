let ctx = canvas.getContext("2d");

ctx.fillStyle = "brown"; //building part1
ctx.fillRect(400, 200, 250, 200);

ctx.fillStyle = "darkOrange"; //door
ctx.fillRect(500, 285, 55, 110);

ctx.fillStyle = "yellow"; //window1
ctx.fillRect(430, 255, 40, 65);

ctx.fillStyle = "yellow"; //window2
ctx.fillRect(580, 255, 40, 65);

// roof
ctx.fillStyle = "darkRed";
ctx.beginPath();
ctx.moveTo(525, 80);
ctx.lineTo(680, 200);
ctx.lineTo(370, 200);
ctx.fill();

//tree1part1
ctx.fillStyle = "darkGreen";
ctx.beginPath();
ctx.moveTo(900, 400);
ctx.lineTo(750, 400);
ctx.lineTo(815, 330);
ctx.lineTo(835, 330);
ctx.fill();

//tree1part2
ctx.fillStyle = "darkGreen";
ctx.beginPath();
ctx.moveTo(880, 350);
ctx.lineTo(770, 350);
ctx.lineTo(817, 300);
ctx.lineTo(832, 300);
ctx.fill();

//tree1part3
ctx.fillStyle = "darkGreen";
ctx.beginPath();
ctx.moveTo(850, 300);
ctx.lineTo(800, 300);
ctx.lineTo(825, 270);
ctx.fill();

//ground
ctx.fillStyle = "darkGreen";
ctx.moveTo(0, 400);
ctx.lineTo(1100, 400);
ctx.lineTo(1100, 500);
ctx.lineTo(0, 500);
ctx.fill();

ctx.fillStyle = "rgb(219, 213, 161)";
ctx.beginPath();
ctx.arc(200, 75, 50, 0, Math.PI * 2, true);
ctx.fill();