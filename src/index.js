const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Ram", "Patel", "Ward no.27", "Betul", "Madhya pradesh", "490095", "8799467890", "helloworld@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    const contact2 = new Contact(
        "Rakesh", "Patel", "Indore", "Satna","Madhya pradesh","450098","8991188633","helloworldd@gmail.com"
    )
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "Man", "cat", "abc", "In", "I", "767A5", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}


//demostrating duplicate contact
try {
    const invalidContact = new Contact(
        "Rakesh", "Patel", "Indore", "Satna","Madhya pradesh","450098","8991188633","helloworldd@gmail.com"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}