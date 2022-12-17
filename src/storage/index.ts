import multer from "multer"

// Storage settings
const Storage = multer.diskStorage({
    destination: "./src/storage",
    filename: ( _ , file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ 
    storage: Storage 
}).single("imageFile")

export { upload }
