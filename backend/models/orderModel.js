const mongoose = require('mongoose')


const orderSchema = mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PRODUCT'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER'
    }
})

module.exports = mongoose.model('ORDER',orderSchema)










