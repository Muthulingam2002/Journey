import express from 'express';
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('This is from the post finally working');

});

export default router;