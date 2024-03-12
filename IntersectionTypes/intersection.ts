interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}



type Customer = BusinessPartner & Contact;

let customer: Customer = {
    name: "Abdessalam Mounach",
    email: "amounach@sqli.com",
    phone: "600010000",
    credit: 0.00,
}

function customerInfo(partner: Customer) {
    return `proccessing customer: Name: ${partner.name}, Email: ${partner.email}
        Phone Number: ${partner.phone}`
}