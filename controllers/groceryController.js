const res = require('express/lib/response')
const Grocery = require('../data/groceries')

function showGroceries(req, res) {
    res.render('index', { groceries: Grocery.groceries })
}

function addGrocery(req, res) {
    const g = { grocery: req.body.grocery, done: false }
    Grocery.groceries.push(g)
    res.redirect('/')
}

function deleteGrocery(req, res) {
    Grocery.groceries.splice(req.params.id, 1)
    res.redirect('/')
}

module.exports = {
    showGroceries,
    addGrocery,
    deleteGrocery
}