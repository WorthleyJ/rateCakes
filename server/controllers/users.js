var Cake = require('../models/user').Cakes
var Rate = require('../models/user').Rates


module.exports = {
    readAll: function(req,res){
        Cake.find({}, function(err, tasks1){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
                res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
                res.json({message: "Success", data: tasks1})
            }
        })
        
    },
    create: function(req,res){
        console.log("POST DATA", req.body);
    
        var cake = new Cake({name: req.body.name, url: req.body.url});
        cake.save(function(err) {
          if(err) {
            console.log('something went wrong', err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message)
                res.redirect('/')
            } 
          } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a task!');
            res.redirect('/');
          }
        })
        
    },
    delete: function(req,res){
        console.log("in the delete route3", req.params.id)
        Cake.remove({_id: Object(req.params.id)}, function(err){
            res.json({message: "success"});
        })
        // console.log(id)
        // Cake.remove({_id:req.params.id}, function(err){
        //      if(err){
        //                    console.log("Returned error", err);
        //                     // respond with JSON
        //                     res.json({message: "Error", error: err})
        //                 }
        //                 else {
        //                     // respond with JSON
        //                     res.json({message: "Success"})
        //                 }
        // })

    },
    readOne: function(req,res){
        Cake.find({id: Object(req.params.id)}, function(err, tasks){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
                res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
                res.json({message: "Success", data: tasks})
            }
        })
    },
    update: function(req,res){
        console.log("id is:", req.body.id)
        Cake.update({_id: Object(req.body.id)}, {$set: {name: req.body.name, url: req.body.url}}, function(err){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
                res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
                res.json({message: "Success"})
            }
        })
    
    },
    route7: function(req, res){
        console.log(req.body);
        var rate = new Rate({stars: req.body.stars, comment: req.body.comment});
        rate.save(function(err) {
          Cake.update({_id: Object(req.params.id)}, {$push: {Reviews: rate}}, function(err, message) {
            if(err) {
              console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
              console.log("message:", message)
            }
          })
          if(err) {
            console.log('something went wrong', err);
            res.json({message: "Error", error: err})
          } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a message!');
            res.json({message: "Success"})

          }
        })
    }
}