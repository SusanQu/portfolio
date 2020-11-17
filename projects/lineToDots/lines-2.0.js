//name of the module: linesanddots
var lines = function(lines) {
	
	lines.Stroke = function(thickness, height, color, damping){

		console.log("hi from stroke"); // change appName to the name of your app

		// damping changes the fluidity of the lines, it should be between 0 and 1, the smaller the number the fluid the line becomes
		if(!thickness) thickness = 0.1;
		if(!height) height = 100;
		if(!color) color = "red";
		if(!damping) damping = 0.1;


		var that = this;
		this.enabled = true;
			
		//need registration point of the circle
		var circle = new createjs.Shape(); 
			circle.graphics.beginFill("blue");
			circle.graphics.drawCircle(0, 0, 10); 
			circle.x = 0;  
			circle.y = 0;
			circle.alpha = 0;
			stage.addChild(circle);

		var string = new createjs.Shape();
	
		circle.lastX = circle.x;
		circle.lastY = circle.y;

		createjs.Ticker.on("tick", animate);	
		createjs.Ticker.setFPS(60);

		function animate() {
			
			if(!that.enabled) return;

			var desiredX = stage.mouseX;
			var desiredY = stage.mouseY;

			var diffX = desiredX - circle.lastX;
			var diffY = desiredY - height - circle.lastY;

			circle.x = circle.lastX + diffX * damping;
			circle.y = circle.lastY + diffY * damping;

			circle.lastX = circle.x;
			circle.lastY = circle.y;

		////String follow
			string.graphics.beginStroke(color)
			.setStrokeStyle(thickness)
			.mt(desiredX, desiredY)
			.lt(circle.x, circle.y); 
			stage.addChild(string);

			stage.update();	
		}

	} //lines.Stroke

	return lines;

}(lines || {});


var shape = function(shape){

		shape.Dot = function (size, color, opacity){
			console.log("hi from Shape");

			//sets default values
			if(!size) size = randomBetween(5, 20);
			if(!color) color = "blue";
			if(!opacity) opacity = 0.5;  

			var circle = new createjs.Shape(); 
				circle.graphics.beginFill(color);
				circle.graphics.drawCircle(0, 0, size); 
				circle.x = stage.mouseX;  
				circle.y = stage.mouseY;
				circle.alpha = opacity;
				stage.addChild(circle);

			stage.update();	

			function randomBetween(min, max){
				rand = min + Math.random()*(max-min);
				return rand;
			}

		}

	

	return shape;

}(shape || {});





