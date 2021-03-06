const tableOfContentsLinks = document.querySelectorAll(".AsideContainer a");

for (let i = 0; i < tableOfContentsLinks.length; i++) {
	tableOfContentsLinks[i].addEventListener("click", function () {
		window.addEventListener("scroll", offsetScroll);
	});
}

function offsetScroll() {
	window.scrollTo(window.scrollX, window.scrollY - 75);
	window.removeEventListener("scroll", offsetScroll);
}

const sections = document.querySelectorAll(".Section");
const tableOfContents = document.querySelector(".AsideContainer ul").children;

let options = {
	threshold: 1.0
}

function compareNumbers(a, b) {
	return a - b;
}

let indexInView = -1;
let indices = [];

let callback = (entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			for (let k = 0; k < tableOfContents.length; k++) {
				var id = tableOfContents[k].firstElementChild.getAttribute("href");
				if (id.length > 0) {
					if (id.substring(1) === entry.target.getAttribute("id")) {
						indices.push(k);
						indexInView = k;
					}
				}
			}
		}
		else {
			for (let k = 0; k < tableOfContents.length; k++) {
				var id = tableOfContents[k].firstElementChild.getAttribute("href");
				if (id.length > 0) {
					if (id.substring(1) === entry.target.getAttribute("id")) {
						//we check to see if this index is in the indicies array and if so remove it
						//keeping this array persistant allows for proper sorting when two elements are both on the screen
						let index = indices.indexOf(k);
						if (index > -1) {
							indices.splice(index, 1);
						}
						if (indexInView === k) {
							indexInView = -1;
                        }
					}
				}
			}
        }
	})

	for (let k = 0; k < tableOfContents.length; k++) {
		if (k != indexInView) {
			tableOfContents[k].style.color = "blue";
			tableOfContents[k].firstElementChild.style.color = "blue";
        	}
	}

	if (indices.length > 0) {
		indices = indices.sort(compareNumbers);

		tableOfContents[indices[0]].style.color = "green";
		tableOfContents[indices[0]].firstElementChild.style.color = "green";
	}
	else if(indexInView < 0) {
		let distances = [];

		for (let i = 0; i < sections.length; i++) {
			let windowPos = window.pageYOffset;
			let sectionPos = sections[i].offsetTop;

			distances.push(windowPos - sectionPos);
		}

		let index = -1;
		let smallestDist = Number.MAX_VALUE;

		for (let i = 0; i < distances.length; i++) {
			if (distances[i] <= smallestDist && distances[i] >= 0) {
				index = i;
				smallestDist = distances[i]
            }
		}

		if (index >= 0) {
			tableOfContents[index].style.color = "green";
			tableOfContents[index].firstElementChild.style.color = "green";
        }
    }
}

var observer = new IntersectionObserver(callback, options);

for (let i = 0; i < sections.length; i++) {
	observer.observe(sections[i]);
}

