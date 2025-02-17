const Block = require("../models/Block");

exports.getAllBlocks = async (req, res) => {
    try {
        const blocks = await Block.find().sort({ title: 1 });
        res.render('UserNews', { blocks });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user news');
    }
};

exports.getBlockById = async (req, res) => {
    try {
        const block = await Block.findById(req.params.id);
        if (!block) return res.status(404).send('Blog Post not Found');
        res.render('blogDetail', { block });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving blog detail');
    }
}

exports.createBlock = async (req,res) => {
    const { title_of_post, content, auth } = req.body;

    // Check secret Code 
    if (auth !== process.env.SUBMIT_SECRET_CODE) {
        return res.status(401).send('Unauthorized: Incorrect secret code.');
    }

    try {
        const userBlock = new Block({ title: title_of_post, text: content});
        await userBlock.save();
        const blocks = await Block.find().sort({ title: 1 });
        res.render('UserNews', { blocks });
    } catch (error) {
        console.log(error);
        res.status(400).send(`Error: ${error.message}`);
    }
};



