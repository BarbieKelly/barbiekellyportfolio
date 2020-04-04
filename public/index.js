var portfolio_section = document.getElementById("portfolio_section");
var softwareDiv = document.getElementById("softwareDevelopmentSkills");
var civilDiv = document.getElementById("CivilEngineeringSkills");
var topScrollButton = document.getElementById("topScrollButton");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topScrollButton.style.display = "block";
  } else {
    topScrollButton.style.display = "none";
  }
}

topScrollButton.onclick = function () {
    console.log("hello world");
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var Projects = [
    {
        id: 0,
        name: "upnext",
        heading2: "Stay Tuned. . .",
        heading6: "something great coming soon!",
    },
    {
        id: 1,
        name: "beforeyouleave",
        heading2: "Before you leave",
        heading6: "Organize your time!",
        paragraph: "Before you leave is a web application that allows the user to manage their household more effectively. It is a homepage that provides a place to organize your to do lists, shopping lists, and provides the daily news",
        weblink: "https://beforeyouleave.herokuapp.com/",
        githubLink: "https://github.com/cbasinger/SecondProject",
        imagesrc: "public/Before_You_Leave.JPG",
        imagealt: "screenshot of Before You Leave website",
        technologies: [
            "PostgreSQL",
            "RESTful API",
            "Express",
            "Heroku",
            "Sequelize",
            "JavaScript",
            "Node.js",
            "BootStrap"
        ]
    }
]

var softwareSkills = [
    "React",
    "Redux",
    "JavaScript",
    "Node.js", 
    "Express", 
    "RESTful API",  
    "JQuery", 
    "PostgreSQL",
    "Express",
    "Heroku",
    "Sequelize",
    "BootStrap",
    "Debugging", 
    "Git",
    "Github",
    "HTML",
    "CSS"
]

var civilSkills = [
    "autoCAD",
    "arcGIS",
]

var createBorder = function () {
    var border = document.createElement("div");
    border.className = "with-border";
    portfolio_section.appendChild(border);
}


var createProjectSection = function (arrayLocation) {
    var divA = document.createElement("div");
    divA.className = "project-section";
    divA.id="project_"+arrayLocation.id;
    var divB = document.createElement("div");
    divB.className="project-container";
    var divC = document.createElement("div");
    divC.className = "project-name-column";
    var heading2 = document.createElement("h2");
    heading2.innerHTML=arrayLocation.heading2;
    var heading6 = document.createElement("h6");
    heading6.innerHTML=arrayLocation.heading6;

    divC.appendChild(heading2);
    divC.appendChild(heading6);
    divB.appendChild(divC);

    if (arrayLocation.paragraph) {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = arrayLocation.paragraph;
        divC.appendChild(paragraph);

        var gitHub = document.createElement("a");
        gitHub.href = arrayLocation.githubLink;
        gitHub.target = "_blank";
        gitHub.innerHTML = "GitHub Repo";
        divC.appendChild(gitHub);


        var divD = document.createElement("div");
        divD.className = "project-image-column";
        var tagline = document.createElement("a");
        tagline.href = arrayLocation.weblink;
        tagline.target = "_blank";
        var tagline_image = document.createElement("IMG");
        tagline_image.className = "project-image";
        tagline_image.id = arrayLocation.name;
        tagline_image.src = arrayLocation.imagesrc;
        tagline_image.alt = arrayLocation.imagealt;
        tagline.appendChild(tagline_image);
        divD.appendChild(tagline);
        divB.appendChild(divD);

        var technologies_used = document.createElement("p");
        technologies_used.className = "bold";
        technologies_used.innerHTML = "technologies used:";
        
        var divF = document.createElement ("div");
        divF.className = "technologies_container";

        for (i=0; i<arrayLocation.technologies.length; i++) {
            var newButton = document.createElement("div");
            newButton.className = "btn-3";
            newButton.innerHTML=arrayLocation.technologies[i];
            divF.appendChild(newButton);
        }
    }
    divA.appendChild(divB);
    if (technologies_used) {
        divA.appendChild(technologies_used);
        divA.appendChild(divF);
    }
    portfolio_section.appendChild(divA);
}

var createSkillsSections = function (){
    for (i=0; i<softwareSkills.length; i++) {
        var newButton = document.createElement("div");
        newButton.className = "btn-4";
        newButton.innerHTML=softwareSkills[i];
        softwareDiv.appendChild(newButton);
    }
    for (i=0; i<civilSkills.length; i++) {
        var newButton = document.createElement("div");
        newButton.className = "btn-4";
        newButton.innerHTML=civilSkills[i];
        civilDiv.appendChild(newButton);
    }
}

var createPage = function () {
    var finalProjectLocation = Projects.length-1;
    var finalProject = Projects[finalProjectLocation];

    for (i=0; i<finalProjectLocation; i++) {
        createProjectSection(Projects[i]);
        createBorder();
    }
    createProjectSection(finalProject);
    createSkillsSections();
}

createPage();