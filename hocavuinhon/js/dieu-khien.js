// Mỗi lần bấm sẽ chuyển tới ảnh kế tiếp. Sau ảnh cuối, quay lại ảnh đầu.
const cacCanh = [
  ["Rạn san hô", "ran-san-ho.webp"],
  ["Rừng rong", "rung-rong.webp"],
  ["Vòm đá", "vom-da.webp"],
  ["Biển đêm", "bien-dem.webp"]
];
let viTri = 0;
const khungBien = document.querySelector(".khung-bien");
const thongBao = document.querySelector("#bao-dieu-khien");
const doiCanh = document.querySelector("#doi-canh");
doiCanh.addEventListener("click", () => {
  viTri = (viTri + 1) % cacCanh.length;
  const [ten, tep] = cacCanh[viTri];
  khungBien.style.backgroundImage = 'url("images/nen/' + tep + '")';
  doiCanh.title = "Cảnh hiện tại: " + ten;
  thongBao.textContent = "Đã chuyển sang " + ten;
});

// Trình duyệt bắt đầu phát âm thanh sau khi người xem bấm nút.
const nhac = document.querySelector("#nhac-bien");
const nutNhac = document.querySelector("#nut-nhac");
nhac.volume = 0.45;
nutNhac.addEventListener("click", async () => {
  if (nhac.paused) {
    try {
      await nhac.play();
    } catch {
      thongBao.textContent = "Chưa phát được nhạc. Hãy kiểm tra tệp audio/nhac-bien.mp3.";
      nutNhac.textContent = "Thử phát lại";
    }
  } else {
    nhac.pause();
    nhac.currentTime = 0;
  }
});
nhac.addEventListener("playing", () => { nutNhac.textContent = "Ngừng nhạc"; });
nhac.addEventListener("pause", () => { nutNhac.textContent = "Phát nhạc"; });
