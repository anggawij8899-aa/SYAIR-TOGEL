function getTanggalHariIni() {
  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return now.toLocaleDateString('id-ID', options);
}

function generateAngkaMain() {
  let angka = [];
  while (angka.length < 5) {
    let num = Math.floor(Math.random() * 10);
    if (!angka.includes(num)) angka.push(num);
  }
  return angka.join(" ");
}

function generateBBFS() {
  let angka = [];
  while (angka.length < 7) {
    let num = Math.floor(Math.random() * 10);
    if (!angka.includes(num)) angka.push(num);
  }
  return angka.join(" ");
}

function tampilkan() {
  const link = document.getElementById("halaman").value;
  const output = document.getElementById("output");
  const tanggal = getTanggalHariIni();
  const angkaMain = generateAngkaMain();
  const bbfs = generateBBFS();

  output.innerHTML = `
    <div style="position:relative; display:inline-block;">
      <img src="${link}" alt="Gambar Prediksi">
      <div class="tanggal-overlay">${tanggal}</div>
      <div class="angka-main-overlay">
        <div class="label">Angka Main:</div>
        <div class="angka">${angkaMain}</div>
      </div>
      <div class="bbfs-overlay">
        <div class="label">BBFS:</div>
        <div class="angka">${bbfs}</div>
      </div>
    </div>
  `;
}
