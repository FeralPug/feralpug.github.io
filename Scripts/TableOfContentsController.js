//this makes the jumps slightly offset so that the nav bar doesn't cover the section header
//window.addEventListener("hashchange", function () {
    //window.scrollTo(window.scrollX, window.scrollY - 100);
//});

//this is better than the above because it doesn't matter if you are already at that anchor

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

let callback = (entries) => {
	let indices = [];
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
	})

	for (let k = 0; k < tableOfContents.length; k++) {
		if (k != indexInView) {
			tableOfContents[k].style.color = "blue";
        }
	}

	if (indices.length > 0) {
		indices = indices.sort(compareNumbers);

		tableOfContents[indices[0]].style.color = "green";
	}
	else if(indexInView < 0) {
		let distances = [];

		for (let i = 0; i < sections.length; i++) {
			let windowPos = window.pageYOffset;
			let sectionPos = sections[i].offsetTop;

			distances.push(Math.abs(windowPos - sectionPos));
		}

		let index = -1;
		let smallestDist = Number.MAX_VALUE;

		for (let i = 0; i < distances.length; i++) {
			if (distances[i] <= smallestDist) {
				index = i;
				smallestDist = distances[i]
            }
		}

		if (index >= 0) {
			tableOfContents[index].style.color = "green";
        }
    }
}

var observer = new IntersectionObserver(callback, options);

for (let i = 0; i < sections.length; i++) {
	observer.observe(sections[i]);
}
