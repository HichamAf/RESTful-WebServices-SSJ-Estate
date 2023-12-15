const mongoose = require('mongoose')

// property schema
const propertySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a property name"],
        },
        address: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

// property model
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;