/* Below is hack to make prism.js only load on desktop, it is from http://www.knowledgebags.com/load-external-js-desktops-not-mobile-devices/
we have to do this because prism can cause chrome to crash because it is adding so many elements to the DOM tree
This is the original way we loaded the script < script src = "../../../../Prism/prism.js" defer ></script > */


window.addEventListener("load", function () {
    if (window.innerWidth > 720) {

        var tableOfContentsController = document.createElement("script");
        tableOfContentsController.type = 'text/javascript';
        tableOfContentsController.src = "../../../../Scripts/TableOfContentsController.js";
        tableOfContentsController.setAttribute("defer", "defer");

        document.head.appendChild(tableOfContentsController);

        var prism = document.createElement('script');
        prism.type = 'text/javascript';
        prism.src = "../../../../Prism/prism.js";
        prism.setAttribute("defer", "defer");

        document.head.appendChild(prism);
    }
    else {
        var aside = this.document.querySelector(".AsideContainer");
        var asideClone = aside.cloneNode(true);
        aside.parentElement.insertBefore(asideClone, aside.parentElement.firstChild);
        console.log("HAZZUHU");
    }
});
