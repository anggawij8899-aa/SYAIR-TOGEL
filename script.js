function getTanggalHariIni() {
  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return now.toLocaleDateString('id-ID', options);
}

function tampilkan() {
  const link = document.getElementById("halaman").value;
  const output = document.getElementById("output");
  const tanggal = getTanggalHariIni();
  output.innerHTML = `
    <div style="position:relative; display:inline-block;">
      <img src="${link}" alt="Gambar Prediksi">
      <div class="tanggal-overlay">${tanggal}</div>
    </div>
  `;
}
