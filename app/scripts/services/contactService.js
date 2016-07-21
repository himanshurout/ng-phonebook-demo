angular.module('phonebookApp').service('contactService', function () {
    //to create unique contact id
    var uid = 1;
    var contacts = [{
        id: 0,
        name:'Himanshu Rout',company:'Tech Mahindra',desg:'Tech Lead',gender:'Male',phone:'9866591110'
    }];
     
    //save or update
    this.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }
 
    }
 

    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }
 
    }
     
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }
 
    this.list = function () {
        return contacts;
    }
});