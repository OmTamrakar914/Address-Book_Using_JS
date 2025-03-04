const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Ram", "Tamrakar", "ward no.27", "Chhindwara", "Madhya pradesh", "480001", "6847347890", "helloworld@gmail.com"
    );
    console.log(addressBook.addContact(contact1));
    console.log(addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "Anush", "Tenguriya", "M", "M", "India", "462921", "9073674834", "helloworld@world.com"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}