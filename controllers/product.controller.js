const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/products.js
exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            phone: req.body.phone,
            addres: req.body.addres,
            identification: req.body.identification,
            zone:req.body.zone
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }

        res.send('Product Created successfully')
    })
};
