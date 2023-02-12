// Calculate Interest Effective Rate
const calculateEffective = () => {
    const principal = parseFloat(document.querySelector('#principal-effective').value);
    const rate = parseFloat(document.querySelector('#rate-effective').value) / 100;
    const payment = parseFloat(document.querySelector('#payment-effective').value);
    const period = 30;

    if (!principal || !rate || !payment ) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วนสมบูรณ์');
        return;
    }

    const interest = (principal * rate * period) / 365;
    const principalPayment = payment - interest;
    const remainingPrincipal = principal - principalPayment;

    const result = `ดอกเบี้ยต่องวด: ${interest.toFixed(2)} บาท<br>เงินที่ต้องจ่ายในงวดนั้น: ${principalPayment.toFixed(2)} บาท<br>เงินต้นคงเหลือ: ${remainingPrincipal.toFixed(2)} บาท`;
    document.querySelector("#result-effective").innerHTML = result;
}