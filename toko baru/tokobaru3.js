// Data produk dalam format JSON
const produkData = [
    {
        "id": 1,
        "nama": "Makanan 1",
        "deskripsi": "Deskripsi makanan 1",
        "harga": 50000,
        "rating": 4,
        "gambar": "makanan1.jpg"
    },
    {
        "id": 2,
        "nama": "Makanan 2",
        "deskripsi": "Deskripsi makanan 2",
        "harga": 60000,
        "rating": 5,
        "gambar": "makanan2.jpg"
    },
    {
        "id": 3,
        "nama": "Makanan 3",
        "deskripsi": "Deskripsi makanan 3",
        "harga": 70000,
        "rating": 3,
        "gambar": "makanan3.jpg"
    }
];

// Menampilkan produk di halaman
const produkContainer = document.querySelector('.produk-container');

produkData.forEach(produk => {
    const produkItem = document.createElement('div');
    produkItem.classList.add('produk-item');

    produkItem.innerHTML = `
        <img src="${produk.gambar}" alt="${produk.nama}">
        <h3>${produk.nama}</h3>
        <p>${produk.deskripsi}</p>
        <p class="harga">Rp ${produk.harga.toLocaleString()}</p>
        <div class="rating" data-rating="${produk.rating}">
            ${[...Array(5)].map((_, i) => 
                `<span class="star ${i < produk.rating ? 'selected' : ''}" data-value="${i + 1}">&#9733;</span>`
            ).join('')}
        </div>
        <button class="beli-button">Beli Sekarang</button>
    `;

    produkContainer.appendChild(produkItem);
});

// Event listener untuk rating
document.querySelectorAll('.produk-item .rating .star').forEach(star => {
    star.addEventListener('click', () => {
        const ratingElement = star.closest('.rating');
        const ratingValue = star.getAttribute('data-value');
        ratingElement.setAttribute('data-rating', ratingValue);

        // Menghapus kelas 'selected' dari semua bintang
        ratingElement.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));

        // Menambahkan kelas 'selected' pada bintang yang dipilih
        for (let i = 0; i < ratingValue; i++) {
            ratingElement.querySelectorAll('.star')[i].classList.add('selected');
        }

        alert(`Terima kasih! Anda memberikan rating ${ratingValue} bintang.`);
    });
});

// Event listener untuk tombol beli
document.querySelectorAll('.produk-item .beli-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Terima kasih telah membeli produk kami!');
    });
});
