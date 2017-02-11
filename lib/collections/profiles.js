var Profiles = new Mongo.Collection('profiles');

Profiles.deny({

    update: function() {
        return true;
    },
    insert: function(){
        return true;
    },
    remove: function() {
        return true;
    }

});

Meteor.methods({



});
