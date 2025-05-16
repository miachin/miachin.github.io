function hitung() {
  const hargaAwal = parseFloat(document.getElementById('hargaAwal').value);
  const persenDiskon = parseFloat(document.getElementById('persenDiskon').value);
  const hargaAkhir = parseFloat(document.getElementById('hargaAkhir').value);
  const hasilDiv = document.getElementById('hasil');

  // Validasi input
  if (!isNaN(hargaAwal) && !isNaN(persenDiskon)) {
    const jumlahDiskon = (hargaAwal * persenDiskon) / 100;
    const hargaSetelahDiskon = hargaAwal - jumlahDiskon;
    hasilDiv.innerHTML = `
      Jumlah Diskon: Rp${jumlahDiskon.toLocaleString('id-ID')}<br/>
      Harga Setelah Diskon: Rp${hargaSetelahDiskon.toLocaleString('id-ID')}
    `;
  } else if (!isNaN(hargaAwal) && !isNaN(hargaAkhir)) {
    const jumlahDiskon = hargaAwal - hargaAkhir;
    const persen = (jumlahDiskon / hargaAwal) * 100;
    hasilDiv.innerHTML = `
      Jumlah Diskon: Rp${jumlahDiskon.toLocaleString('id-ID')}<br/>
      Persentase Diskon: ${persen.toFixed(2)}%
    `;
  } else if (!isNaN(persenDiskon) && !isNaN(hargaAkhir)) {
    const hargaAsli = hargaAkhir / (1 - (persenDiskon / 100));
    const jumlahDiskon = hargaAsli - hargaAkhir;
    hasilDiv.innerHTML = `
      Harga Awal: Rp${hargaAsli.toLocaleString('id-ID')}<br/>
      Jumlah Diskon: Rp${jumlahDiskon.toLocaleString('id-ID')}
    `;
  } else {
    hasilDiv.textContent = 'Mohon isi dua nilai untuk menghitung.';
  }
}

function resetForm() {
  document.getElementById('hargaAwal').value = '';
  document.getElementById('persenDiskon').value = '';
  document.getElementById('hargaAkhir').value = '';
  document.getElementById('hasil').textContent = '';
}
