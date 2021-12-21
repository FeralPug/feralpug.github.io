//this makes the jumps slightly offset so that the nav bar doesn't cover the section header
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});

const sections = document.querySelectorAll(".Section");
const tableOfContents = document.querySelector(".AsideContainer ul").children;

let options = {
	threshold: 1.0
}

function compareNumbers(a, b) {
	return a - b;
}



let callback = (entries) => {
	let indices = [];
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			console.log(entry.intersectionRatio);
			for (let k = 0; k < tableOfContents.length; k++) {
				var id = tableOfContents[k].firstElementChild.getAttribute("href");
				if (id.length > 0) {
					if (id.substring(1) === entry.target.getAttribute("id")) {
						//tableOfContents[k].style.color = "green";
						indices.push(k);
					}
					else {
						//tableOfContents[k].style.color = "blue";

					}
					tableOfContents[k].style.color = "blue";
				}
			}
        }
	})

	if (indices.length > 0) {
		indices = indices.sort(compareNumbers);

		tableOfContents[indices[0]].style.color = "green";
	}
}

var observer = new IntersectionObserver(callback, options);

for (let i = 0; i < sections.length; i++) {
	observer.observe(sections[i]);
}

