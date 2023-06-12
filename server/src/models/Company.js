const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    logo_url: {
        type: String,
        required: true
    },
    website_url: {
        type: String,
        required: true
    },
    employees_count: {
        type: Number,
        required: true
    },
    revenue_in_usd: {
        type: Number,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    intent_topic: {
        type: String,
        required: true
    },
    intent_dates: {
        type: [String],
        required: true
    },
    about: {
        type: String,
        required: true
    },
    active_wallets: {
        type: Number,
        required: true
    },
    token_name: {
        type: String,
        required: true
    },
    tvl_usd: {
        type: Number,
        required: true
    },
    smart_contract_count: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
});

const Company = mongoose.model('Company', schema);

module.exports = Company;