document.querySelector('.open-card').addEventListener('click', function () {
    document.querySelector('.card-content').style.display = 'block';
    document.getElementById('background-music').play();
    this.style.display = 'none'; // Sembunyikan tombol setelah kartu dibuka
  });
  // Menampilkan tanggal dan waktu saat ini
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeString = now.toLocaleTimeString();
  const dateString = now.toLocaleDateString(undefined, options);
  document.getElementById('current-date-time').innerHTML = `${dateString}, ${timeString}`;
}
setInterval(updateDateTime, 1000); // Update setiap detik

// Efek kembang api
document.querySelector('.open-card').addEventListener('click', function () {
  document.querySelector('.card-content').style.display = 'block';
  document.getElementById('background-music').play();
  this.style.display = 'none'; // Sembunyikan tombol setelah kartu dibuka
  launchFireworks();
});

// Fungsi kembang api
function launchFireworks() {
  const fireworksContainer = document.getElementById('fireworks-container');
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.animationDelay = i * 0.2 + 's';
    fireworksContainer.appendChild(firework);

    setTimeout(() => firework.remove(), 3000); // Hapus setelah animasi selesai
  }
}

// Tambahkan efek kembang api di CSS
const style = document.createElement('style');
style.innerHTML = `
  .firework {
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, yellow, transparent);
    border-radius: 50%;
    animation: firework 3s ease-in-out infinite;
  }

  @keyframes firework {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    80% {
      transform: translateY(-300px) scale(2);
      opacity: 0.8;
    }
    100% {
      transform: translateY(-400px) scale(0.1);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

