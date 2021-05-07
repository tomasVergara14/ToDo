const fs = require('fs')

const archivoTask = fs.readFileSync('./tasks.json', {encoding:'utf-8'})


const taskController = {

    index: (req, res, next) => {
        res.render('index', { title: 'Express' });
    },
    create:(req,res)=>{

        var tasks

        if(archivoTask == ''){
            tasks = []   
        }else{
            tasks = JSON.parse(archivoTask)
        }

        tasks.push({id:Date.now(), title:req.body.title}) //el push no va a funcionar si no cumple los if


        const tasksJson = JSON.stringify(tasks)

        fs.writeFileSync('tasks.json', tasksJson)
        console.log(archivoTask)
        
        res.redirect('/task')

    },


}

module.exports = taskController;