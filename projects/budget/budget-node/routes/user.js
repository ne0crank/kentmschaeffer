import { Router } from 'express';

const router = Router();

// get all users at /users
router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

// get all users at /users
router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.params.userId,
  );
  return res.send(user);
});

router.post('/', async (req, res) => {
  const user = await req.context.models.User.create({
    name: req.body.name,
    alias: req.body.alias,
    email: req.body.email,
    password: req.body.password,
    type: req.body.type,
  });
  return res.send(user);
});

// // CREATE
// router.post('/',(req,res)=>{
//   dbUserModel.create(
//     {...req.body.newData},
//     (err,data)=>{config.sendResponse(res,err,data)}
//   )
// })
//
// router.route('/:id')
//   // READ
//   .get((req,res)=>{
//     dbUserModel.findById(
//       req.params.id,
//       (err,data)=>{config.sendResponse(res,err,data)}
//     )
//   })
//   // UPDATE
//   .put((req,res)=>{
//     dbUserModel.findByIdAndUpdate(
//       req.params.id,
//       {...req.body.newData},
//       {new:true},
//       (err,data)=>{config.sendResponse(res,err,data)})
//   })
//   // DELETE
//   .delete((req,res)=>{
//     dbUserModel.findByIdAndDelete(
//       req.params.id,
//       (err,data)=>{config.sendResponse(res,err,data)})
//   })
//
export default router;
