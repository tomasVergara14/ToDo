const fs = require('fs')

const archivoTask = fs.readFileSync('./tasks.json', {encoding:'utf-8'})


const taskController = {

    index: (req, res, next) => {
        const list = JSON.parse(archivoTask)

        res.render('index', { title: 'Express', list:list });
    },
    create:(req,res)=>{

        var tasks;

        if(archivoTask == ''){
            tasks = []   
        }else{
            tasks = JSON.parse(archivoTask) 
        }

        tasks.push({id:Date.now(), title:req.body.title}) //el push no va a funcionar si no cumple los if


        const tasksJson = JSON.stringify(tasks)

        fs.writeFileSync('tasks.json', tasksJson)
        console.log(archivoTask)
        
        res.redirect('/tasks')

    },
    detail: (req,res)=>{
        
        const list = JSON.parse(archivoTask)

        const taskId =  list.find((item)=> req.params.id == item.id)
        
        res.render('detail', { title:'Detail', taskId:taskId})
    },
    delete:(req,res)=>{
        
        const list = JSON.parse(archivoTask)

        const taskFilter =  list.filter((item)=> req.params.id != item.id)

        const filterJson = JSON.stringify(taskFilter)

        fs.writeFileSync('./tasks.json', filterJson)

        console.log(taskFilter)
        res.redirect('/')
    },
    update: (req,res)=>{
        const keys = Object.keys(req.body)

        const list = JSON.parse(archivoTask)
        console.log(keys)

        var taskId = list.find((task) => task.id == req.params.id)
	    keys.forEach((key) => (taskId[key] = req.body[key]))

        const tasksJSon = JSON.stringify(list)
	    fs.writeFileSync('./tasks.json', tasksJSon)

        res.redirect('/tasks')

        //const taskId =  list.find((item)=> req.params.id == item.id)

    

    }
    


}

module.exports = taskController;