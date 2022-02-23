
var path = location.pathname;

var directories = path.split("/");
var relDir = 0;

var local = path.includes(":");

if (local) {
    var foundRoot = false;
    for (var i = 0; i < directories.length; i++) {
        if (foundRoot) {
            relDir++;
        }
        if (directories[i] === "Feral_PugCodes") {
            foundRoot = true;
        }      
    }
    relDir -= 1;
}
else {
    var foundRoot = false;
    relDir = directories.length - 1;
}

var recentPosts = document.getElementById("Recent");

recentPosts.innerHTML = "";

var aside = document.createElement("aside");

recentPosts.appendChild(aside);

var header = document.createElement("h2");

header.textContent = "Recent Posts";

aside.appendChild(header);

var list = document.createElement("ul");

aside.appendChild(list);

//Then make all of the elements 1 by 1
//first li

var entry = document.createElement("li");

var link = document.createElement("a");
link.setAttribute("href", "https://github.com/FeralPug/GradientMakerTool");
link.setAttribute("title", "Link to the tool github");
link.setAttribute("target", "_blank");
entry.appendChild(link);

var src = "Media/RecentPosts/Gradient1.png";

if(relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }   
}

var pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of the tool UI");
link.appendChild(pic);

list.appendChild(entry);

//make the two

entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://feralpug.github.io/OtherPages/Code/Pages/TrajectoryPredictions/TrajectoryPrediction.html");
link.setAttribute("title", "Link to blog post");
entry.appendChild(link);

src = "Media/RecentPosts/TrajectoryThumb.png";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of the Trajectory Predictions");
link.appendChild(pic);

list.appendChild(entry);

//make the three

entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://feral-pug.itch.io/bayer-worlds");
link.setAttribute("title", "Link to the Bayer Worlds itch.io page");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/RecentPosts/BayerWorldsThumb.jpg";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot from the game Bayer Worlds");
link.appendChild(pic);

list.appendChild(entry);

//make the four

entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://feralpug.github.io/OtherPages/Code/Pages/ExtendingUnitySkybox/ExtendingSkybox.html");
link.setAttribute("title", "Link to the shader write up");
entry.appendChild(link);

src = "Media/RecentPosts/ExtendingSkyboxThumb.png";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of the final shader");
link.appendChild(pic);

list.appendChild(entry);

//make the fifth

entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://github.com/FeralPug/TextureArrayMakerTool");
link.setAttribute("title", "Link to the tool github");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/RecentPosts/TextureArrayMakerTool.jpg";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of the tool UI");
link.appendChild(pic);

list.appendChild(entry);

//make the six

entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://feral-pug.itch.io/hyper-flight");
link.setAttribute("title", "Link to the game hyper flight");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/RecentPosts/HyperFlightThumbnail.png";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of the game Hyper Flight");
link.appendChild(pic);

list.appendChild(entry);


