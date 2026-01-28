const projects = [
    {
        title: "\"Tank\"",
        image: "images/tank.png",
        alt: "Screenshot from the game Tank",
        description: "An addictive tank shooting action game with outstanding controls and realistic graphics based on real military techniques.",
        tools: ["Unity", "C#", "Blender"],
        //  link: "project-bike.html"
        link: ""
    },
    {
        title: "Gardener",
        image: "images/gardener.jpg",
        alt: "Photo from the job",
        description: "Hard work based on planting and harvesting plants while overloading the body. Work in the Netherlands inspired by the times of the Third Reich's rule over Poland and the labor camps.",
        tools: ["Hands", "Knees"],
        //  link: "project-bike.html"
        link: ""
    },
  {
    title: "Gymrat",
    image: "images/gym.png",
	  alt: "Photo from the Gym",
    description: "Narrative-driven prototype featuring quirky hand-drawn characters, branching paths, and multiple endings.",
	  tools: ["Body"],
//  link: "project-tarot.html"
	  link: ""
  },
    {
        title: "\"Spaceshooter 2D\"",
        image: "images/shooter.png",
        alt: "Screenshot from the game \"Spaceshooter 2D\"",
        description: "An incredible space world full of rebellious machines.A professional 2D experience.See what you can do.",
        tools: ["Unity", "C#"],
        //  link: "project-bike.html"
        link: ""
    },
    {
        title: "\"Deadline\"",
        image: "images/U5GamePrototype.png",
        alt: "Screenshot from the U5 Game Prototype",
        description: "A timed puzzle game where you explore once to gather clues, then rush to execute a precise sequence before the clock hits zero to win.",
        tools: ["Unreal Engine", "C++"],
        //  link: "project-bike.html"
        link: ""
    },
    {
        title: "Running an internship",
        image: "images/internship.png",
        alt: "Screenshot from the internship",
        description: "I ran a game-development internship where we created two playable prototypes. The practice focused on rapid prototyping, and teamwork.",
        tools: ["Unity", "C#"],
        //  link: "project-bike.html"
        link: ""
    },

];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  const toolsHTML = project.tools.map(tool => `<span class="tool">${tool}</span>`).join(", ");
  card.innerHTML = `
    <img src="${project.image}" alt="${project.alt}">
    <h3>${project.title}</h3>
	<p class="tools"><strong>Tools:</strong> ${toolsHTML}</p>
    <p>${project.description}</p>
    <a class="btn" href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
  `;
  projectList.appendChild(card);
});
