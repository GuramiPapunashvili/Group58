const posts = [
    {
        id: 1,
        title: "Exploring the Mountains",
        author: "Liam",
        comments: ["Amazing views!", "I want to go there too."]
    },
    {
        id: 2,
        title: "Cooking Tips for Beginners",
        author: "Mia",
        comments: ["Very useful.", "Trying this tonight!"]
    },
    {
        id: 3,
        title: "Tech Trends 2025",
        author: "Noah",
        comments: ["Insightful read.", "Loved the AI section."]
    },
    {
        id: 4,
        title: "Daily Fitness Routine",
        author: "Sophia",
        comments: ["Motivating!", "Exactly what I needed."]
    },
    {
        id: 5,
        title: "Photography Basics",
        author: "Ethan",
        comments: ["Great tips!", "Helped a lot."]
    }
];


const getPosts = (req, res) => {
    res.json(posts);
};

const getPostById = (req, res) => {
    const { id } = req.params;
    const post = posts.find(el => el.id === id * 1);

    if(!post) {
        return res.status(404).json({
            status: 'fail',
            message: 'Post cant be found!'
        });
    }

    res.json(post);
};

const createPost = (req, res) => {
    const { title, author, comments } = req.body;

    if(!title || !author || !comments) {
        return res.status(400).json({
            status: 'fail',
            message: 'Title, author and comments are required!'
        })
    }

    const post = {
        id: posts[posts.length - 1].id + 1 || 1,
        title,
        author,
        comments
    }

    posts.push(post);

    res.status(201).json(post);
};

const deletePostById = (req, res) => {
    const { id } = req.params;
    const postIndex = posts.findIndex(el => el.id === id * 1);

    if(postIndex === -1){
        return res.status(404).json({
            status: 'fail',
            message: 'Post cant be found!'
        });
    }

    posts.splice(postIndex, 1);

    res.status(204).send();
};

const updatePost = (req, res) => {
    const { id } = req.params;
    const { title, comments } = req.body;
    const post = posts.find(el => el.id === id * 1);

    if(!post) {
        return res.status(404).json({
            status: 'fail',
            message: 'Post cant be found!'
        });
    }

    if(title) post.title = title;
    if(comments) post.comments = comments;

    res.json(post);
};

module.exports = { getPosts, getPostById, createPost, deletePostById, updatePost };