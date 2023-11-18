
var fov = {
	radius: 1,
	y_offset: 2,
	mul1: 1,
	mul2: 1,
	init: function() {
		console.log("settings.fovLevel", settings.fovLevel)
		this.set_mul1(settings.fovLevel);
		this.apply();
	},
	set_mul1: function(option) {
		if (option == "x1") {
			this.mul1 = 0.8;
			this.radius = 1;
		} else if (option == "x2") {
			this.mul1 = 1.0;
			this.radius = 0.75;
		} else if (option == "x3") {
			this.mul1 = 1.4;
			this.radius = 0.5;
		} else if (option == "x4") {
			this.mul1 = 1.8;
			this.radius = 0.25;
		} else if (option == "x5") {
			this.mul1 = 2.1;
			this.radius = 0.1;
		} else if (option == "x6") {
			this.mul1 = 2.4;
			this.radius = 0.05;
		} else if (option == "x7") {
			this.mul1 = 2.6;
			this.radius = 0.025;
		} else if (option == "x8") {
			this.mul1 = 3.0;
			this.radius = 0.01;
		} else {
			this.mul1 = 0.8;
			this.radius = 1;
		}
		this.apply();
		
		// fov		0.8		1.4
		// y		2		1.2
		// r 		1		0.4
	},
	set_mul2: function(value) {
		this.mul2 = value;
		this.apply();
	},
	apply: function() {
		var intensity = this.mul1 * this.mul2;
		camera.fov = Math.min(intensity, 2.8);
		console.log("intensity", intensity);
		console.log("radius", this.radius);
		console.log("y_offset", this.y_offset);
	}
}
