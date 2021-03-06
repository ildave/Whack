function Scene(ctx) {
	this.ctx = ctx;

	this.drawSelector = function(selected) {
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.rect(5, 455, 40, 40);
		ctx.fill();
		ctx.closePath();
		ctx.restore();

		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.rect(70, 455, 20, 40);
		ctx.fill();
		ctx.closePath();
		ctx.restore();

		if (selected == "t") {
			ctx.save();
			ctx.beginPath();
			ctx.lineWidth="3";
			ctx.strokeStyle="red";
			ctx.rect(5, 455, 40, 40); 
			ctx.stroke();
			ctx.restore();
		}
		else if (selected == "b") {
			ctx.save();
			ctx.beginPath();
			ctx.lineWidth="3";
			ctx.strokeStyle="red";
			ctx.rect(70, 455, 20, 40); 
			ctx.stroke();
			ctx.restore();
		}
	}

	this.drawEnd = function() {
		ctx.font = "25px Arial";
		var txt = "You lose!";
		var measure = ctx.measureText(txt);
		var x = (800 / 2) - (measure.width / 2);
		ctx.fillText("You lose!", x, 447);
	}

	this.drawField = function(field, deadCritters, deadTurrets, waveNumber, waveOnScreen, coins) {
		ctx.clearRect(0, 0, field.width, field.height + 100);
		for (var i = 0; i <= field.height; i = i + field.rowHeight) {
			ctx.beginPath();
			ctx.moveTo(0, i);
			ctx.lineTo(field.width, i);
			ctx.stroke();
			ctx.closePath();
		}
		ctx.beginPath();
		ctx.moveTo(field.rowHeight, 0);
		ctx.lineTo(field.rowHeight, field.height);
		ctx.stroke();
		ctx.closePath();

		ctx.font = "20px Arial";
		var tokens = ["Dead critters: ", deadCritters, " - Dead turrets: ", deadTurrets, " - Wave: ", waveNumber, " - Critters: ", waveOnScreen, " - $: ", coins];
		ctx.fillText(tokens.join(""), 10, 420);
	}

	this.drawCritters = function(critters) {
		for (var i = 0; i < critters.length; i++) {
			var c = critters[i];
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = c.color;
			ctx.arc(c.x, c.y, c.r, 0, 2*Math.PI);
			ctx.fill();
			ctx.closePath();
			ctx.restore();
		}
	}

	this.drawBullets = function(bullets) {
		for (var i = 0; i < bullets.length; i++) {
			var b = bullets[i];
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = b.color;
			ctx.arc(b.x, b.y, b.r, 0, 2*Math.PI);
			ctx.fill();
			ctx.closePath();
			ctx.restore();
		}
	}

	this.drawTurrets = function(turrets) {
		for (var i = 0; i < turrets.length; i++) {
			var t = turrets[i];
			if (!t) {
				continue;
			}
			//var x = t.field.rowHeight + 5;
			var x = t.col * t.field.rowHeight + 5
			var y = t.row * t.field.rowHeight + 5;
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = t.color;
			ctx.rect(x, y, t.width, t.width);
			ctx.fill();
			ctx.closePath();
			ctx.restore();
		}
	}	

	this.drawBlockers = function(blockers) {
		for (var i = 0; i < blockers.length; i++) {
			var b = blockers[i];
			if (!b) {
				continue;
			}
			var x = b.col * b.field.rowHeight + 15;
			var y = b.row * b.field.rowHeight + 5;
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = b.color;
			ctx.rect(x, y, b.width, b.height);
			ctx.fill();
			ctx.closePath();
			ctx.restore();
		}	
	}
}