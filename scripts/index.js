const mailElement = document.getElementById('mail');
const phoneElement = document.getElementById('phone');
const addressElement = document.getElementById('address');

mailElement.addEventListener('click', copyText);
phoneElement.addEventListener('click', copyText);
addressElement.addEventListener('click', copyText);

function copyText(event) {
    const textToCopy = event.target.innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Information copiée dans le presse-papier");
        })
        .catch((error) => {
            console.error('Failed to copy text:', error);
        });
}

const printButton = document.getElementById('print-button');

printButton.addEventListener('click', printPage);

function printPage() {
    window.print();
}


jQuery(document).ready(function($){
    $.iMissYou({
        title: "Hey, je suis là!",
        favicon: {
            enabled: true,
            src:'scripts/pluginIMissYou/iMissYouFavicon.ico'
        }
    });
});