const express=require('express');
const userController=require('../Controller/UserController');
const userRouter=express.Router();
userRouter.use(express.json());
userRouter.use(express.urlencoded({extended: false}));




userRouter.get('/',userController.home);

userRouter.get('/get',userController.getAllUsers);

userRouter.get('/getstudents',userController.getAllStudents);

userRouter.get('/getsuperhero',userController.getAllSuperheroes);

userRouter.post('/add',userController.addUser);




//first way to update data in a collection
// userRouter.put('/update/:id',(req,res)=>
// {
//     var id=req.params.id;
//     console.log(req.params);
//     User.findOne({_id:id}).then((result)=>{
//         if(req.body.name)
//         {
//             result.name=req.body.name;
//         }
//         result.save().then((result)=>
//         {
//             res.send("update is done");
//         }).catch((err)=>
//         {
//             console.log(err);
//         })
//     });
// });

// //secondway to update data in a collection
// userRouter.put('/newupdate/:id',(req,res)=>
// {
//     var id=req.params.id;
//     console.log(req.params);
//     User.findByIdAndUpdate({_id:id},req.body).then((result)=>{
//         res.send("DONE");
//     });
// });

// //deleting document by ID
// userRouter.delete('/delete/:id',(req,res)=>
// {
//     var id=req.params.id;
//     User.findByIdAndRemove({_id:id}).then((result)=>{
//         res.send("DONE");
//     });
// });
module.exports=userRouter;