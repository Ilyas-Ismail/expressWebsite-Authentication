// connect to the model.
let businessContacts = require('../models/businessContacts');

// listing the documents inside "contacts" db and organizing by name.

module.exports.list = function(req, res, next) {
    businessContacts.find(
        (err, businessContactsList) => {
            if(err){
                return console.error(err);
            }else{
                // console.log(businessContactsList);
                res.render('businessContacts/businessContactsList', {
                    title: 'Business Contacts List',
                    businessContactsList: businessContactsList
                });
            }
        }
    ).sort({name: 1});
}

module.exports.edit = function(req, res, next) {
    let id = req.params.id;

    businessContacts.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('businessContacts/update', {
                title: 'Edit Contact',
                contact: contactToEdit
            })
        }
    });
}

// editting then updating a document inside the db.

module.exports.processEdit = function(req, res, next) {
    let id = req.params.id;

    let updatedContact = businessContacts({
        _id: req.body.id,
        name: req.body.name,
        pNumber: req.body.pNumber,
        email: req.body.email
    });

    businessContacts.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            res.redirect('/businessContacts');
        }
    });
}

// removing a document from the db.

module.exports.delete = (req, res, next) => {
    let id = req.params.id;

    businessContacts.remove({_id: id}, (err) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/businessContacts');
        }
    });
}