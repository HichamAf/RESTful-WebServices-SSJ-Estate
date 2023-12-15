const mongoose = require('mongoose')

// tenant schema
const tenantSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a tenant name"],
        }
    },
    {
        timestamps: true
    }
)

// tenant model
const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;