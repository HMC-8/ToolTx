// Lấy các phần tử
const popup = document.getElementById('popup');
const status = document.getElementById('status');
const countdown = document.getElementById('countdown');

// Hàm thay đổi trạng thái và hiển thị popup
function showPopup(message, className) {
    status.textContent = message;
    status.className = className; // Thêm lớp để thay đổi màu sắc
    popup.style.display = 'block';
}

// Hàm ẩn popup
function hidePopup() {
    popup.style.display = 'none';
}

// Hàm thay đổi nội dung ngẫu nhiên giữa "Tài" và "Xỉu"
function changeStatusRandomly() {
    const randomStatus = Math.random() < 0.5 ? 'Tài' : 'Xỉu';
    const className = randomStatus === 'Tài' ? 'tai' : 'xiu';
    showPopup(randomStatus, className);
    setTimeout(() => {
        status.textContent = `Chọn ${randomStatus}`;
    }, 5000); // Sau 5 giây hiển thị "Chọn Tài" hoặc "Chọn Xỉu"
}

// Hàm đếm ngược
function countdownTimer(seconds) {
    let remainingTime = seconds;
    countdown.textContent = `Thời gian còn lại: ${remainingTime} giây`;
    const interval = setInterval(() => {
        remainingTime--;
        countdown.textContent = `Thời gian còn lại: ${remainingTime} giây`;
        if (remainingTime <= 0) {
            clearInterval(interval);
            changeStatusRandomly(); // Sau khi hết thời gian, thay đổi ngẫu nhiên
        }
    }, 1000);
}

// Hàm bắt đầu quá trình phân tích
function startProcess() {
    showPopup('Đang phân tích', '');  // Hiển thị "Đang phân tích"
    countdownTimer(10); // Phân tích trong 10 giây
    setTimeout(() => {
        hidePopup(); // Ẩn popup sau khi phân tích
        setTimeout(() => {
            showPopup('Đang phân tích', ''); // Quay lại "Đang phân tích"
            countdownTimer(10); // Tiếp tục phân tích
        }, 5000); // Sau 5 giây quay lại "Đang phân tích"
    }, 15000); // 15 giây cho "Đang phân tích"
}

// Bắt đầu quá trình ngay khi trang web được tải
window.onload = () => {
    startProcess();
};// Bắt đầu quá trình ngay khi trang web được tải
window.onload = () => {
    startProcess();
};
