module.exports= app=>{
    const save = (req,res)=>{
        res.post('user save')
    }

    return { save }
}