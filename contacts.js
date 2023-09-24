const SERVICE_ID = "service_a730kxo";
const TEMPLATE_ID = "template_x8gn677";
const PUBLIC_KEY = "R65UY0wRBH2tmKunK";

// executed with loading
(function() {
    // https://dashboard.emailjs.com/admin/account   
    emailjs.init(PUBLIC_KEY);
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(function() {
                console.log('SUCCESS!');
                Swal.fire({
                    icon: 'success',
                    title: 'Повідомлення успішно надіслано',
                    confirmButtonColor: '#a33201',
                    confirmButtonText: 'Ok'
                  })
            }, function(error) {
                console.log('FAILED...', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Ой, щось пішло не так',
                    confirmButtonColor: '#a33201',
                    confirmButtonText: 'Ok',
                    text: error.text,
                  })
                });
            event.target.reset()
            });     
})();