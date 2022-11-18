const count = 0;

class Figure {

	count = this.count

	constructor(tegId, positionX, positionY, container = "container",) {
		this.tegId = tegId;
		this.container = container;
		this.positionX = positionX;
		this.positionY = positionY;
		this.moveUp = false;
		this.moveLeft = false;
	}

	getElement() {
		return document.getElementById(this.tegId)
	}

	getContainer() {
		return document.getElementById(this.container)
	}

	static collision_map = [];
	static count = 0;
	static countBool = false

	static Computer(figures) {

		let figureMap = figures.map((item, index) => {
			return figures.map((item_q, index_q) => {
				if (index_q !== index) {
					const item1 = item.getElement().getBoundingClientRect();
					const item_q1 = item_q.getElement().getBoundingClientRect();

					switch (
					item1.top + item1.height > item_q1.top &&
					item1.left + item1.width > item_q1.left &&
					item1.bottom - item1.height < item_q1.bottom &&
					item1.right - item1.width < item_q1.right
						) {
						case true:
							return this.countBool = true;

						case false:
							return this.countBool = false;
					}
				}
			});

		});


		if (this.collision_map.length) {
			for (let i = 0; i < figureMap.length; i++) {
				for (let j = i; j < figureMap[i].length; j++) {

					if (this.collision_map[i][j] !== figureMap[i][j]) {

						if (this.collision_map[i][j]) {
							this.count++;
						}
						this.collision_map[i][j] = figureMap[i][j];
					}
				}
			}
		} else {
			this.collision_map = figureMap;
		}

		console.log(this.count)
	}



	move() {
		switch (this.positionX) {
			case this.getContainer().clientWidth - 100:
				this.moveLeft = true;
				break;
			case 0:
				this.moveLeft = false;
				break;
		}

		switch (this.positionY) {
			case this.getContainer().clientHeight - 100:
				this.moveUp = true;
				break;
			case -50:
				this.moveUp = false;
				break;
		}

		(this.moveLeft) ? this.positionX -= 1 : this.positionX += 1;
		(this.moveUp) ? this.positionY -= 1 : this.positionY += 1;

		this.getElement().style.left = this.positionX + 'px';
		this.getElement().style.top = this.positionY + 'px';
	}
}

class Circle extends Figure {
	move() {
		super.move();

		switch (this.positionY) {
			case this.getContainer().clientHeight - 100:
				this.moveUp = true;
				break;
			case 0:
				this.moveUp = false;
				break;
		}
	}
}

class Square extends Figure {
	move() {
		super.move();

		switch (this.positionY) {
			case this.getContainer().clientHeight - 100:
				this.moveUp = true;
				break;
			case 0:
				this.moveUp = false;
				break;
		}
	}
}



const triangle = new Figure("triangle", 0, 0);
const circle = new Circle("circle", 100, 200);
const square = new Square("square", 50, 0)
const figures = [triangle, circle, square]

setInterval(
	() => {
		// triangle.move();
		// circle.move();
		// square.move();

		// Figure.Computer(figures)

		// let counter = document.getElementById("table");
		// counter.innerHTML = '';
		// counter.innerHTML = `Всего столкновений ${Figure.count}`;

	}, 1)





