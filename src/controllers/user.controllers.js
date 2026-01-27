import { asyncHandler } from "../utils/asynHandlle.jsr";


const registerUser = asyncHandler( async (requestAnimationFrame, res) => {
    res.status(200).json({
        message: "ok"
    })
})


export{registerUser};