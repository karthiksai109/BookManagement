const express=require('express')
const {createUser,userLogin}=require('../controllers/userController')
const {createBook,getBooks,getBookById, updateBooks, deleteById} = require('../controllers/bookController')
const {createReview}=require("../controllers/reviewController")
const {authentication, authorization}=require('../middlewares/middleware')
const router=express.Router()

router.post('/register',createUser)

router.post('/login',userLogin)

router.post('/books',createBook)

router.get('/books', authentication,getBooks)
router.get("/books/:bookId",getBookById)
router.put("/books/:bookId",authentication,updateBooks)
router.delete("/books/:bookId",authentication,deleteById)




router.post("/books/:bookId/review",createReview)



router.all('/*',function(req,res){
    res.status(400).send({msg:"invalid Url request"})
})

module.exports=router