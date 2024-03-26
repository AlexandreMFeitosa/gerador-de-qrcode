let geradorQR = document.querySelector("#button-gerador");
let url = document.querySelector("#url");
let qrcode = document.querySelector("#qrcode");
const qrCodeImg = document.querySelector("#imgcode");

function generateQrcode()
 {
    if(!url.value.trim()) {
        alert("Campo em branco ! Favor preencher o campo correspondente !")
    } else {
        const urlValue = url.value

        if(!urlValue) return;

        qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${urlValue}`

    }

 }

geradorQR.addEventListener("click" , () => {
    generateQrcode();
});

// Evento enter, para que seja gerado o qrcode, usando o botao enter.

url.addEventListener("keydown" , (e) => {
    if (e.code === "Enter") {
        generateQrcode();
    }
})