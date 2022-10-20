
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

//demo
/*
entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://www.youtube.com/watch?v=s3HqWhtc0c8&ab_channel=jeffbartman");
link.setAttribute("title", "Link to youtube video showing demo renderer");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/RecentPosts/ScreenShotFromDemo.jpg";

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
*/

//Do the first link

entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://github.com/FeralPug/VectorSwizzle");
link.setAttribute("title", "Link to the tool github");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/Tools/VectorSwizzle.png";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of example code");
link.appendChild(pic);

list.appendChild(entry);

//2nd
entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://youtu.be/Xmy504dTwoY");
link.setAttribute("title", "Link to video demo of Render Feature");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/RecentPosts/Pixilation_Moment.jpg";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of the render feature");
link.appendChild(pic);

list.appendChild(entry);

//3rd
entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://youtu.be/6uKpv0GHE4Q");
link.setAttribute("title", "Link to video demo of Render Feature");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/RecentPosts/Outlines_Moment.jpg";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of the render feature");
link.appendChild(pic);

list.appendChild(entry);

//4th
entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://youtu.be/P1TR0eXNIUY");
link.setAttribute("title", "Link to video demo of VFX");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/RecentPosts/WapEffect_Moment.jpg";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of the VFX");
link.appendChild(pic);

list.appendChild(entry);

//5th
entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://youtu.be/hOIUUHDHCEg");
link.setAttribute("title", "Link to video demo of the shader");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/RecentPosts/LiquidShader_Moment.jpg";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of the shader");
link.appendChild(pic);

list.appendChild(entry);

//6th
entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://youtu.be/aoDp3kHo4TM");
link.setAttribute("title", "Link to video demo of the shader");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/RecentPosts/Cyclone2_Moment.jpg";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of the shader");
link.appendChild(pic);

list.appendChild(entry);

//7th
entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://youtu.be/dzWn9SbzVnM");
link.setAttribute("title", "Link to video demo of the Render Feature");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/RecentPosts/SobelEdgeDetection_Moment.jpg";

if (relDir !== 0) {
    for (var i = 0; i < relDir; i++) {
        src = "../" + src;
    }
}

pic = document.createElement("img");
pic.setAttribute("src", src);
pic.setAttribute("alt", "Screenshot of the Render Feature");
link.appendChild(pic);

list.appendChild(entry);


//8th

entry = document.createElement("li");

link = document.createElement("a");
link.setAttribute("href", "https://www.youtube.com/watch?v=s3HqWhtc0c8&ab_channel=jeffbartman");
link.setAttribute("title", "Link to youtube video showing demo renderer");
link.setAttribute("target", "_blank");
entry.appendChild(link);

src = "Media/RecentPosts/ScreenShotFromDemo.jpg";

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

//make the seven

/*
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
*/

