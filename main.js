// Hubungkan tombol di perpustakaan.html dengan fungsi di file ini
export function tampilkanBuku() {
    const daftar = document.gtampilkanBuku('judulDaftarBuku');
    if (daftar) {
        daftar.scrollIntoView({behavior: 'smooth'});
    }
}

// Fungsi untuk menambah buku, cek duplikat
export function tambahBuku(judul, penulis, perpustakaan, tampilkanBuku) {
    if (!judul || !penulis) return;
    // Cek apakah buku sudah ada
    const sudahAda = perpustakaan.getAll().some(buku => 
        buku.judul.toLowerCase() === judul.toLowerCase() && buku.penulis.toLowerCase() === penulis.toLowerCase()
    );
    if (sudahAda) {
        alert('Buku dengan judul dan penulis yang sama sudah ada!');
        return false;
    }
    const bukuBaru = new Buku(judul, penulis);
    perpustakaan.tambah(bukuBaru);
    tampilkanBuku();
    return true;
}