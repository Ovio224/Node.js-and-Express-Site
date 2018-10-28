const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

// getting the data from the json file to display it dynamically 
router.get('/:id', (req, res) => {
    const qid = req.query;
    const { id } = req.params;
    const { description } = projects[id];
    const title = projects[id].project_name;
    const { technologies } = projects[id];
    const { live_link } = projects[id];
    const { github_link } = projects[id];
    const { image_urls } = projects[id];
    let count = parseInt(id);
    if (count >= 5) {
        count = -1;
    }

    const templateData = {
        count,
        title,
        description,
        technologies,
        live_link,
        github_link,
        image_urls
    }

    res.render('project', templateData);
});

module.exports = router;