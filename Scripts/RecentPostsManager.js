
var hostName = location.hostname;

if (hostName !== "") {
    var recentPosts = document.getElementById("Recent");

    recentPosts.firstChild.remove();

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
    link.setAttribute("href", "https://feralpug.github.io/OtherPages/Code/Pages/TrajectoryPredictions/TrajectoryPrediction.html");
    link.setAttribute("title", "Link to the shader write up");
    entry.appendChild(link);

    var pic = document.createElement("img");
    pic.setAttribute("src", hostName + "/Media/RecentPosts/TrajectoryThumb.png");
    pic.setAttribute("alt", "Screenshot of the Trajectory Predictions");
    link.appendChild(pic);

//make the next one
}



