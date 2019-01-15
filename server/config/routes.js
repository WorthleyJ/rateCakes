var tasks = require('../controllers/users.js')
module.exports = function (app){
    //retrieve all
    app.get('/tasks', function(req, res) {
        tasks.readAll(req,res)
    })
    //retrieve one
    app.get('/:id', function(req, res) {
        tasks.readOne(req,res)
    })
    //create
    app.post('/task', function(req, res) {
        tasks.create(req,res)
    })
    //update
    app.put('/updateTask', function(req,res){
        tasks.update(req,res)
    })

    //delete
    app.delete('/delete/:id', function(req, res){
        console.log("dddd", req.params.id)
        tasks.delete(req,res)
    })

    app.post('/addReview/:id', function(req, res) {
        tasks.route7(req,res)
    })
}