function getcard(imgurl, heading, cName, views, time, duration) {

    let str
    if (views < 1000) {
        str = views
    }
    else if (views <= 100000) {
        str = (views / 1000) + "k"
    }
    else {
        str = (views / 100000 )+ "M"
    }

    let html = `<div class="card">
        <div class="img">
           <img src="${imgurl}" alt=" "></img>
           <div class="duration">${duration}</div>
        </div>
        <div class="text">
            <h3>${heading}</h3>
            <p>
                ${cName} . ${str} . ${time} months ago
            </p>
        </div>
    </div>`


    document.querySelector(".container").innerHTML += html;

}


getcard("https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q", "Your First HTML Website | Sigma Web Development Course - Tutorial #3", "CodeWithHarry", 1000000, 3, "10:12");
getcard("https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBEoDwrQoTELgI-X7BTCJYva_ekhg", "Your First HTML Website | Sigma Web Development Course - Tutorial #4", "CodeWithHarry", 1000000, 3, "10:12");





