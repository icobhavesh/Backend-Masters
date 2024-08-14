const loginUser= asyncHandler(async(req,res)=>{
const [email,username,password ]= req,body
   if (!username && !email) {
        throw new ApiError("username and password is required");

    }
    const user = await findOne({
        $or: [{ username }, { email }]
    })
    if (!user) {
        throw new ApiError(404, "USER IS NOT DEFINED")
    }
    const isPasswordValid= await user.isPasswordCorrect(password)//todo on chatgpt
})
