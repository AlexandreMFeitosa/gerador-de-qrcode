let geradorQR = document.querySelector("#button-gerador");
let url = document.querySelector("#url");
let qrcode = document.querySelector("#qrcode");
const qrCodeImg = document.querySelector("#imgcode");

function generateQrcode()
 {
    const urlValue = url.value

    if(!urlValue) return;

    geradorQR.innerHTML = `Gerando código ... `

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${urlValue}`

 }
geradorQR.addEventListener("click" , () => {
    generateQrcode();
})