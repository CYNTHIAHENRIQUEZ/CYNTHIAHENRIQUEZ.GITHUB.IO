
class Player {
	constructor() {
		this.x = 10;
		this.y = 10;
		this.xVelocity = 4;
		this.yVelocity = 4;
		this.side = 10;
	}

	up() {
		this.yVelocity = -4;
	}

	left() {
		this.xVelocity = -4;
	}

	stay() {
		this.xVelocity = 0;
		this.yVelocity = 0;
	}

	right() {
		this.xVelocity = 4;
	}

	down() {
		this.yVelocity = 4;
	}
}

//main canvas variables 
var screen = document.getElementById("screen");
var ctx = canvas.getContext("2d");
var p = new Player();

//rendering recursive loop
function draw() {
	if (p.x > 0 && p.x < screen.width - 10 && p.y > 0 && p.y < screen.height - 10) {
		p.x += p.xVelocity;
		p.y += p.yVelocity;
	} else {
		if (Math.abs(p.x) < 350 && Math.abs(p.y) < 200) {
			p.x += -2 * p.xVelocity;
			p.y += -2 * p.yVelocity;
		} else {
			p.x = screen.width / 2;
			p.x = screen.height / 2;
		}
	}
	ctx.fillStyle = "green";
	ctx.fillRect(p.x, p.y, p.side, p.side);
	setTimeout(draw2, 50);
}

function draw2() {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, screen.width, screen.height);
	draw();
}

