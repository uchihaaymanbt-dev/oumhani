let currentPin = "";
const correctPin = "1712";

function appendNumber(num) {
    if (currentPin.length < 4) {
        currentPin += num;
        document.getElementById('pin-input').value = currentPin;
        document.getElementById('error-message').textContent = "";
    }
}

function clearPin() {
    currentPin = "";
    document.getElementById('pin-input').value = "";
    document.getElementById('error-message').textContent = "";
}

function checkPin() {
    if (currentPin === correctPin) {
        document.getElementById('login-page').classList.remove('active');
        document.getElementById('cards-page').classList.add('active');
    } else {
        document.getElementById('error-message').textContent = "الرقم السري غير صحيح. حاول مرة أخرى.";
        currentPin = ""; 
        document.getElementById('pin-input').value = "";
    }
}

function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

// دالة البطاقة الرابعة (الانتقال للصفحة الثالثة)
function goToThirdPage(cardElement) {
    // قلب البطاقة أولاً
    cardElement.classList.add('flipped');
    
    // الانتظار ثانية واحدة (1000 جزء من الثانية) ثم الانتقال للصفحة
    setTimeout(() => {
        document.getElementById('cards-page').classList.remove('active');
        document.getElementById('requests-page').classList.add('active');
        
        // إعادة البطاقة لشكلها الأصلي في حال عادت للصفحة السابقة
        cardElement.classList.remove('flipped'); 
    }, 1000); 
}

// دالة العودة من الصفحة الثالثة إلى البطاقات
function goBackToCards() {
    document.getElementById('requests-page').classList.remove('active');
    document.getElementById('cards-page').classList.add('active');
}