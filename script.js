// Lấy phần tử cần thay đổi
const popup = document.getElementById('popup');
const status = document.getElementById('status');

// Hàm thay đổi trạng thái và hiển thị popup
function showPopup(message) {
    status.textContent = message;
    popup.style.display = 'block';
}

// Hàm ẩn popup
function hidePopup() {
    popup.style.display = 'none';
}

// Hàm thay đổi nội dung ngẫu nhiên giữa "Tài" và "Xỉu"
function changeStatusRandomly() {
    setTimeout(() => {
        const randomStatus = Math.random() < 0.5 ? 'Tài' : 'Xỉu';
        showPopup(randomStatus);
    }, 10000); // Chờ 10 giây
}

// Hàm bắt đầu quá trình
function startProcess() {
    showPopup('Đang phân tích');  // Hiển thị "Đang phân tích"
    setTimeout(() => {
        hidePopup(); // Ẩn popup sau 10 giây
        changeStatusRandomly(); // Sau 10 giây, thay đổi ngẫu nhiên thành "Tài" hoặc "Xỉu"
        setTimeout(() => {
            showPopup('Đang phân tích'); // Quay lại "Đang phân tích"
            setTimeout(startProcess, 5000); // Tiếp tục quá trình sau 5 giây
        }, 5000); // Sau 5 giây, quay lại "Đang phân tích"
    }, 10000);
}

// Bắt đầu quá trình ngay khi trang web được tải
window.onload = () => {
    startProcess();
};
