let countdown = 10;
let timerEl = document.getElementById("timer");
let timerLabel = document.getElementById("timerLabel");
let middleText = document.getElementById("middleText");

function startCycle() {
  countdown = 10;
  middleText.textContent = "Đang phân tích";
  timerLabel.textContent = "Thời gian phân tích:";
  timerEl.textContent = countdown;

  let interval = setInterval(() => {
    countdown--;
    timerEl.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(interval);
      showResult();
    }
  }, 1000);
}

function showResult() {
  const isTai = Math.random() < 0.5;
  const blinkTarget = isTai ? "Tài" : "Xỉu";
  middleText.textContent = `Chọn ${blinkTarget}`;
  timerLabel.textContent = "Thời gian :";
  countdown = 5;
  timerEl.textContent = countdown;

  const textEl = document.getElementById("mainText");
  const blinkClass = "blink";

  // Thêm nháy vào chữ Tài hoặc Xỉu
  textEl.innerHTML = isTai
    ? `<span class="${blinkClass}">Tài</span> - <span id="middleText">Chọn Tài</span> - Xỉu`
    : `Tài - <span id="middleText">Chọn Xỉu</span> - <span class="${blinkClass}">Xỉu</span>`;

  const countdownInterval = setInterval(() => {
    countdown--;
    timerEl.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      resetDisplay();
    }
  }, 1000);
}

function resetDisplay() {
  document.getElementById("mainText").innerHTML =
    `Tài - <span id="middleText">Đang phân tích</span> - Xỉu`;
  middleText = document.getElementById("middleText");
  startCycle();
}

startCycle();            changeStatusRandomly(); // Sau khi hết thời gian, thay đổi ngẫu nhiên
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
