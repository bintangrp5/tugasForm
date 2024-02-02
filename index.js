function submitForm(){
    //Mengambil nilai dari inputan
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var pesan = document.getElementById('pesan').value;

    //Validasi sederhana
    if (nama === '' || email === '' || pesan === '') {
        alert('Mohon lengkapi formulir terlebih dahulu');
        return;
    }

    //Menampilkan pesan terimkasih dan menyembunyikan formulir
    document.getElementById('form').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
}