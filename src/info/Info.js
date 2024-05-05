import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Rehab",
    lastName: "Khaleel",
    initials: "rk", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Pakistan'
        },
        {
            emoji: "💼",
            text: "Undergraduate Software Engineer"
        },
        {
            emoji: "📧",
            text: "rehabkhaleel716@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/rehabkhaleel",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/rehab-khaleel/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/KhaleelRehab",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hey. I'm a full stack developer. I am currently studying Software Engineering at Bahria University.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'c#','c','python','java','bash'],
            exposedTo: ['nodejs', 'c++', 'figma']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        }
    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://rehabkhaleel.github.io/SMIT-Food-Blog/", 
            source: "https://github.com/rehabkhaleel/SMIT-Food-Blog", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://rehabkhaleel.github.io/CODSOFT-CALCULATOR/",
            source: "https://github.com/rehabkhaleel/CODSOFT-CALCULATOR",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://rehabkhaleel.github.io/CODSOFT-LANDING-PAGE/",
            source: "https://github.com/rehabkhaleel/CODSOFT-LANDING-PAGE",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://rehabkhaleel.github.io/PortFolio-Resume/",
            source: "https://github.com/rehabkhaleel/PortFolio-Resume",
            image: mock4
        },
        {
            title: "Project 5",
            live: "",
            source: "https://github.com/rehabkhaleel/js-firebase-smit",
            image: mock5
        }
    ]
}