const express = require('express');
const router = express.Router();
const person = require('.././Models/personSchema');

router.post('/',async(req,res)=>{
    try{
      const data = req.body;
      const newPerson = new person(data);
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response)
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'})
    }
});

router.get('/',async(req,res)=>{
    try{ 
        const response = await person.find();
        console.log('data fatched');
        res.status(200).json(response);

    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'})
    }
})

router.put('/:id',async(req,res)=>{
    try{
      const personId = req.params.id;
      const updatePersonData  = req.body;
      const updatePerson = await person.findByIdAndUpdate(personId, updatePersonData,{
        new: true,
        runValidators: true
      });
      if(!updatePerson){
        return res.status(404).json({error: 'Person not found'})
      }
      res.json(updatePerson);
    }catch(err){
        console.log('Error updating person:',error);
        res.status(500).json({error: 'Internal server error'})
    }
});

router.delete('/:id',async(req,res)=>{
    try{
     const personId = req.params.id;
     const deletePerson = await person.findByIdAndDelete(personId);
     res.status(200).json(deletePerson);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    }
})

router.get('/:workType',async(req,res)=>{
    try{
      const workType = req.params.workType;
      if(workType == 'chef'|| workType === 'manager'|| workType === 'waiter'){
        const response = await person.findOne({work: workType});
        res.status(200).json(response);
      }
     
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'})
    }
})



module.exports = router;