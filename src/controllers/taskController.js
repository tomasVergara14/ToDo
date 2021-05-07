const taskController = {

    index: (req, res, next) => {
        res.render('index', { title: 'Express' });
    },
    

}

module.exports = taskController;