export const PROJECTS = [  
    {
        id: 1,
        title: "rpsls",
        short_description: "Rock Paper Scissors Lizard Spock",
        long_description: "Rock Paper Scissors Lizard Spock is an expansion of the game Rock, Paper, Scissors. It was created by Sam Kass and Karen Bryla, but it was popularized in an episode of the Big Bang Theory called The Lizard-Spock expansion. I built it to learn more about the Vue.js library and to learn the basics of game logic.",
        image: "/rpsls_logo.png",
        demo: "https://yarocruz.github.io/rpsls/",
        github: "https://github.com/yarocruz/rpsls"
    },
    {
        id: 2,
        title: "cpg",
        short_description: "Color palette generator",
        long_description: "Color palette generator uses OpenAI's API to generate color palettes based on a given prompt. Depending on the prompt it can generate 2 to 5 colors. The colors will be displayed on the page and the hex codes can be copied to your clipboard. Node/Express was used for backend, and plain HTML, CSS, and JavaScript for frontend.",
        image: "/cpg_logo.jpg",
        demo: "https://color-palette-generator-0kju.onrender.com/",
        github: "https://github.com/yarocruz/color-palette-generator/tree/main"
    },
    {
        id: 3,
        title: "RSA",
        short_description: "Reading Speed App",
        long_description: "Single-serving app to see what it feels like to read at different speeds. It's a tiny app I quickly built with Svelte to scratch my own itch. According to the research, the average reading speed is around 250 words per minute. I did the math and that's about 4.5 words a minute, which is 1 word every 250 milliseconds. That last piece of math I'm not so sure.",
        image: "/rsa_logo.png",
        demo: "https://yarocruz.github.io/reading-speed-svelte-app/",
        github: "https://github.com/yarocruz/reading-speed-svelte-app"
    },
    {
        id: 4,
        title: "tm",
        short_description: "Task Manager",
        long_description: "Simple demo 'todo' app built with React on the client and Golang on the server. The Golang server was deployed to an AWS EC2 instance and the React client was deployed to an S3 bucket. The server is a barebones RESTful API that gets the the Tasks, adds a Task, and deletes a task.",
        image: "/taskmanager.png",
        demo: "http://taskmanager-frontend.s3-website.us-east-2.amazonaws.com/",
        github: "https://github.com/yarocruz/taskmanager"
    }
];