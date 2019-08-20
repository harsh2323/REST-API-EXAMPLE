let contact = require('./contactModel')

//Handles index actions
exports.index = function(req, res){
    contact.get(function(err, contact){
        if(err){
            res.json({
                status: "error",
                message: err
            })
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contact
        })
    })
}

//Handles creation of contacts
exports.new = function(req, res){
    var contacts =  new contact();
    contacts.name = req.body.name ? req.body.name : contacts.name;
    contacts.email = req.body.email;
    contacts.gender = req.body.gender;
    contacts.phone = req.body.phone;

    //save the contact
    contacts.save(function(err){
        if(err){
            res.json(err);
        }
        res.json({
            status: "success",
            message: "Contacts saved successfully",
            data: contacts
        })
    })
}

//Handles contact view info
exports.view = function (req, res){
    contact.findById(req.params.contact_id, function(err, contact){
        if(err){
            res.json(err);
        }
        res.json({
            status: "Contact details...",
            data: contact
        })
    })
}

//Handles contact update infor
exports.update = function(req, res){
    contact.findById(req.params.contact_id, function(err, contact){
        if(err){
            res.json(err)
        }

        contact.name = req.body.name ? req.body.name : contact.name;
        contact.email = req.body.email;
        contact.gender = req.body.gender;
        contact.phone = req.body.phone;

        contact.save(function(err){
            if(err){
                res.json(err)
            }
            res.json({
                status: "Updated Contact Information",
                data: contact
            })
        })
    })
}

//Handles delete contact operations

exports.delete = function(req, res){
    contact.remove({
        id: req.params.contact_id
    }, function(err, contact){
        if(err){
            res.json(err)
        }
        res.json({
            status: "Deleted successfully",
            data: contact
        })
    })
}