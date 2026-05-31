function getTanggalHariIni() {
  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return now.toLocaleDateString('id-ID', options);
}

// generate angka main (5 digit unik)
function generateAngkaMain() {
  let angka = [];
  while (angka.length < 5) {
    let num = Math.floor(Math.random() * 10);
    if (!angka.includes(num)) angka.push(num);
  }
  return angka.join(" ");
}

// generate BBFS (7 digit unik)
function generateBBFS() {
  let angka = [];
  while (angka.length < 7) {
    let num = Math.floor(Math.random() * 10);
    if (!angka.includes(num)) angka.push(num);
  }
  return angka.join("");
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
      <div class="angka-main-overlay">Angka Main: ${angkaMain}</div>
      <div class="bbfs-overlay">BBFS: ${bbfs}</div>
    </div>
  `;
}
