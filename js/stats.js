var stats = {
	score: 0,
	fps: 50,
	key_time: 0,
	changed_to_fixed: false,
	update_fps: function() {
		// Calculate FPS
		let fps_now = Number(engine.getFps());
		if(settings.fpsmeter == "on") {
		$("#fpsmeter").html("FPS: " + fps_now.toFixed(1));
		} else {
			$("#fpsmeter").html("");
		}
		this.fps += 0.1;
		if (this.fps > fps_now) this.fps = fps_now;

		// For 144 fps monitors
		if (!this.changed_to_fixed) {
			if (this.fps > 70) {
				console.log("AUTO FIX");
				this.changed_to_fixed = true;
				update.set_fixed();
				sync.set("frameRate", "fixed");
			}
		}
	},
	zeroPad: function (n) { // borrowed from a fitbit clockface of all things
		if (n < 10) {
			n = "0" + n;
		}
		return n;
	},
	timecode: function(n) {
		var fps = engine.getFps();
		return this.zeroPad((Math.floor(n / (60 * fps))) % 60) + ":" + this.zeroPad((Math.floor(n / fps)) % 60) + ":" + this.zeroPad(Math.floor(((n % fps) * 1000 / fps) / 10));
	}
}