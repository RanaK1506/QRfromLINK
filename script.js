const urlInput = document.getElementById('urlInput');
const generateQR = document.getElementById('generateQR');
const qrCode = document.getElementById('qrCode');

generateQR.addEventListener('click', () => {
    const url = urlInput.value;
    if (url) {
        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=200x200`;
    }
});
