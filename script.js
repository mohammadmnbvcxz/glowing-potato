const connectBtn = document.getElementById('connectBtn');
const statusDiv = document.getElementById('status');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const effectSelect = document.getElementById('effectSelect');
const selectMusicBtn = document.getElementById('selectMusicBtn');
const musicFileInput = document.getElementById('musicFileInput');

// کنترل عقب و جلو کردن
const prevBtn = document.getElementById('prevBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const nextBtn = document.getElementById('nextBtn');

// تغییر وضعیت دکمه پخش/مکث
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';  // تغییر آیکون به توقف
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';  // تغییر آیکون به پخش
    }
});

// جلو و عقب کردن صدا
prevBtn.addEventListener('click', () => {
    audioPlayer.currentTime -= 10;  // عقب رفتن به مدت 10 ثانیه
});

nextBtn.addEventListener('click', () => {
    audioPlayer.currentTime += 10;  // جلو رفتن به مدت 10 ثانیه
});

// انتخاب موزیک از فایل
selectMusicBtn.addEventListener('click', () => {
    musicFileInput.click(); // وقتی دکمه کلیک شد، ورودی فایل نمایش داده می‌شود
});

// هنگامی که فایل انتخاب می‌شود
musicFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioSource.src = fileURL;
        audioPlayer.load();
        audioPlayer.play();
    }
});

// اعمال افکت صوتی
effectSelect.addEventListener('change', () => {
    const effect = effectSelect.value;

    switch (effect) {
        case 'babyVoice':
            audioPlayer.playbackRate = 1.5;  // سرعت بیشتر
            break;
        case 'deepVoice':
            audioPlayer.playbackRate = 0.7;  // سرعت کمتر
            break;
        case 'stereo':
            // افکت استریو
            break;
        default:
            audioPlayer.playbackRate = 1;  // حالت عادی
            break;
    }
});