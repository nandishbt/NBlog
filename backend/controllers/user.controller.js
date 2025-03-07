
const registerUser = async (req,res)=>{

    try {
      
        
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }

}

const login = async (req,res)=>{
    
}

const logout = async (req,res)=>{
    
}

const getProfile = async (req,res)=>{
    
}

const updateProfile = async (req,res)=>{
    
}

const updateProfilePicture = async (req,res)=>{
} 

const deleteUser = async (req,res)=>{

}

export {
    registerUser,
    login,
    logout,
    getProfile,
    updateProfile,
    updateProfilePicture,
    deleteUser,
 
}

