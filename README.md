<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ساعت دیجیتال با آلارم</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="clock-container">
        <div id="clock">
            <span id="hours"></span>:<span id="minutes"></span>:<span id="seconds"></span>
        </div>
        <div id="am-pm"></div>
        <div id="alarm-container">
            <input type="time" id="alarm-time" class="time-picker" />
            <button id="set-alarm" class="button-primary">تنظیم آلارم</button>
            <button id="stop-alarm" class="button-danger">توقف آلارم</button>
            <button id="extend-alarm" class="button-primary">تمدید آلارم (۵ دقیقه)</button>
            <div id="alarm-status"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
