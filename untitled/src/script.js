let alarmTime = null;
let alarmTimeout = null;
let alarmSound = new Audio('https://dl.musictag.ir/Album/Ringtone/Ringtone35.mp3');
let alarmIsActive = false;
let alarmExtendTimeout = null;

// بروزرسانی ساعت
function updateClock() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const amPmElement = document.getElementById('am-pm');

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';

    // 12 ساعت فرمت (برای ساعت‌های 12 ساعته)
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    // فرمت دو رقمی برای دقیقه‌ها و ثانیه‌ها
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // نمایش ساعت، دقیقه و ثانیه
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    // نمایش AM/PM
    amPmElement.textContent = amPm;

    // بررسی آلارم
    if (alarmTime && `${hours}:${minutes}` === alarmTime) {
        triggerAlarm();
    }
}

// بروزرسانی ساعت هر ثانیه
setInterval(updateClock, 1000);
updateClock();

// تنظیم آلارم
document.getElementById('set-alarm').addEventListener('click', function() {
    const alarmInput = document.getElementById('alarm-time');
    const alarmInputValue = alarmInput.value;

    if (alarmInputValue) {
        alarmTime = alarmInputValue;
        document.getElementById('alarm-status').textContent = `آلارم تنظیم شد: ${alarmTime}`;
    } else {
        document.getElementById('alarm-status').textContent = 'لطفا یک زمان برای آلارم تنظیم کنید!';
    }
});

// فعال کردن آلارم
function triggerAlarm() {
    if (!alarmIsActive) {
        alarmSound.play();
        alarmIsActive = true;
        document.getElementById('alarm-status').textContent = 'آلارم فعال شد!';
    }
}

// توقف آلارم
document.getElementById('stop-alarm').addEventListener('click', function() {
    if (alarmIsActive) {
        alarmSound.pause();
        alarmSound.currentTime = 0;  // از ابتدا شروع کند
        alarmIsActive = false;
        document.getElementById('alarm-status').textContent = 'آلارم متوقف شد!';
    }
});

// تمدید آلارم
document.getElementById('extend-alarm').addEventListener('click', function() {
    if (alarmIsActive) {
        alarmSound.pause();
        alarmSound.currentTime = 0;  // از ابتدا شروع کند
        alarmSound.play();  // دوباره پخش می‌شود
        document.getElementById('alarm-status').textContent = 'آلارم تمدید شد!';
        
        // تنظیم تایمر جدید برای 5 دقیقه بعد
        clearTimeout(alarmExtendTimeout);
        alarmExtendTimeout = setTimeout(function() {
            alarmSound.pause();
            alarmIsActive = false;
            document.getElementById('alarm-status').textContent = 'آلارم متوقف شد!';
        }, 5 * 60 * 1000);  // 5 دقیقه
    }
});
