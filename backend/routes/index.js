const express = require('express')
const router = express.Router()
const userSignUpController = require('../controller/user/userSignUp')
const userSignInController = require('../controller/user/userSignIn')
const authToken = require('../middleware/authToken')

const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')

const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const updateUser = require('../controller/user/updateUser')
const userDetailsController = require('../controller/user/userDetails')
const getCategoryProduct = require('../controller/product/getCategoryProduct')

router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get('/user-details', authToken, userDetailsController)
router.get('/userLogout', userLogout)

// admin Panel
router.get("/all-user", authToken, allUsers)
router.post("/update-user", authToken, updateUser)

// product
router.post("/upload-product", authToken, UploadProductController)
router.get('/get-product', getProductController)
router.post("/update-product", authToken, updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)


module.exports = router