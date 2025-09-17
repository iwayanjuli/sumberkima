<template>
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Kembali ke beranda (section Destinasi) -->
      <NuxtLink to="/#destination" class="btn btn-outline-primary mb-4">
        ← Kembali ke Destinasi
      </NuxtLink>

      <div v-if="data">
        <div class="card border-0 shadow-lg p-4 text-center">
          <h2 class="fw-bold mb-4 text-brown">{{ data.title }}</h2>

          <!-- Gambar proporsional -->
          <div class="d-flex justify-content-center mb-4">
            <img
              :src="data.img"
              :alt="data.title"
              class="img-fluid rounded shadow destination-img"
            />
          </div>

          <!-- Deskripsi lengkap -->
          <article
            class="prose prose-lg text-secondary mx-auto text-start mb-4"
            v-html="data.full"
          ></article>

          <!-- Tombol Book Now menuju WhatsApp -->
          <a
            :href="`https://wa.me/6285238941672?text=Halo%20saya%20ingin%20booking%20${encodeURIComponent(data.title)}`"
            target="_blank"
            rel="noopener"
            class="btn btn-success book-btn mx-auto d-block"
          >
            📩 Book Now
          </a>
        </div>
      </div>

      <div v-else>
        <p class="text-center text-muted">Destinasi tidak ditemukan.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

// ===== Data lengkap 9 destinasi =====
const details = [
  {
    id: 1,
    title: "Wisata Terumbu Karang Sumberkima",
    img: "/images/destinasi1.jpg",
    full: `
      <p>Di ujung Bali Utara terdapat desa hangat bernama Sumberkima, tempat laut masih berbisik tenang dan karang-karang bernafas penuh warna. Sambutan ramah warga yang menjaga laut seperti rumah mereka sendiri langsung terasa sejak Anda tiba.</p>
      <p>Dengan perahu tradisional Anda akan dibawa ke tengah laut jernih. Di bawah permukaan terbentang dunia lain: terumbu karang berwarna-warni, ikan tropis menari, dan penyu berenang anggun. Dulu karang Sumberkima sempat memutih dan mati, namun warga bangkit menanam karang baru dan mengubah cara mereka mencari nafkah.</p>
      <p>Kini setiap pengunjung yang snorkeling atau diving ikut menjadi bagian pemulihan ini. Nama Anda akan tercatat di peta konservasi desa sebagai bukti ikut menghidupkan laut. Sumberkima mengajarkan bahwa wisata bisa menjadi cara berbagi harapan: setiap karang yang tumbuh adalah janji—laut sehat, desa bahagia.</p>
    `
  },
  {
    id: 2,
    title: "Adopsi Bayi Karang: Tanam Harapan di Dasar Laut",
    img: "/images/destinasi2.jpg",
    full: `
      <p>Di teluk tenang Sumberkima, terumbu karang menjadi penjaga alami pantai—melindungi desa dari badai dan menjadi rumah ratusan ikan kecil. Beberapa tahun lalu sebagian karang rusak dan memutih, namun berkat kerja keras kru konservasi, kini karang pulih.</p>
      <p>Anda dapat ikut menjadi bagian cerita ini dengan mensponsori satu “bayi karang”. Biarkan ia tumbuh menjadi rumah biota laut, menjaga garis pantai, dan mendukung nelayan. Satu bayi karang hari ini berarti laut yang hidup untuk generasi mendatang, sekaligus meninggalkan jejak kebaikan untuk bumi.</p>
    `
  },
  {
    id: 3,
    title: "Hutan Mangrove Sumberkima – Surga Hijau di Ujung Utara Bali",
    img: "/images/destinasi3.jpg",
    full: `
      <p>Di Desa Sumberkima tersembunyi permata alam: Hutan Mangrove. Rimbunan bakau membentuk lorong hijau menenangkan dengan air laut jernih memantulkan bayangan pohon gagah. Akar-akar bakau menjadi benteng alami melindungi pantai dari abrasi dan rumah bagi ikan, kepiting, hingga burung.</p>
      <p>Jelajahi dengan berjalan kaki, berperahu menyusuri jalur air, atau tanam bibit mangrove baru. Setiap langkah adalah kontribusi nyata menjaga kelestarian ekosistem pesisir. Hutan mangrove ini bukan sekadar wisata, tetapi laboratorium alam dan sumber kehidupan masyarakat setempat.</p>
    `
  },
  {
    id: 4,
    title: "Tanam Bakau, Tanam Harapan",
    img: "/images/destinasi4.jpg",
    full: `
      <p>Bayangkan berdiri di tepi pantai, kaki menyentuh lumpur lembut sambil memegang bibit bakau. Udara laut segar, ombak kecil berkejaran, dan Anda menjadi bagian misi menghidupkan kembali hutan bakau yang melindungi desa dari abrasi serta menjadi rumah bagi kepiting, ikan, dan burung.</p>
      <p>Bersama tim lokal, Anda belajar menanam bibit, mengikatnya agar kokoh, dan merasakan kepuasan saat melihat deretan tunas hijau berbaris rapi. Setiap bibit adalah janji masa depan: pantai kuat, ekosistem laut sehat. Aktivitas ini cocok untuk keluarga atau siapa saja yang ingin meninggalkan jejak kebaikan bagi bumi.</p>
    `
  },
  {
    id: 5,
    title: "Ritual Gebug Ende – Tarian, Pertarungan, dan Doa untuk Hujan",
    img: "/images/destinasi5.jpg",
    full: `
      <p>Gebug Ende adalah ritual sakral penuh seni, olahraga, dan doa memohon hujan. Diiringi gamelan, dua laki-laki mengenakan udeng dan saput poleng bertarung dengan ende (perisai bambu) dan penjalin (rotan). Setiap pukulan menjadi doa agar hujan turun bagi desa yang dilanda kemarau panjang.</p>
      <p>Ritual warisan leluhur sejak 1925 ini mengajarkan harmoni manusia, alam, dan Tuhan. Setelah pertarungan, para petarung saling berpelukan dan tersenyum tanpa dendam, menghadirkan rasa syukur yang mendalam bagi seluruh penonton.</p>
    `
  },
  {
    id: 6,
    title: "Pantai Sumberkima: Tempat Santai dengan Spot Foto Unik",
    img: "/images/destinasi6.jpg",
    full: `
      <p>Pantai Sumberkima adalah tempat tenang dan instagramable dengan latar hutan mangrove. Ikon utamanya kapal tua di tengah laut yang menjadi spot foto favorit, terutama saat matahari terbit atau terbenam. Udara segar, jalan santai di tepi pantai, dan pemandangan pegunungan menambah keindahan momen Anda.</p>
      <p>Di sepanjang pantai, Anda dapat menikmati panorama alam sambil mencicipi kuliner lokal. Suasananya cocok untuk keluarga, pasangan, maupun pelancong solo yang mencari ketenangan jauh dari keramaian.</p>
    `
  },
  {
    id: 7,
    title: "Berjalan di Antara Lontar – Menemukan Kedamaian",
    img: "/images/destinasi7.jpg",
    full: `
      <p>Deretan pohon lontar tinggi menciptakan pemandangan dramatis, seolah gerbang menuju ketenangan. Saat matahari terbit atau senja, langit oranye-keemasan memantul di genangan air, menghadirkan suasana magis. Tempat ideal untuk berjalan santai, menghirup udara segar, dan merasakan ketenangan.</p>
      <p>Lokasi ini juga menjadi tempat favorit bagi fotografer dan pecinta alam yang ingin menangkap momen keindahan Bali Utara yang jarang tersentuh wisata massal.</p>
    `
  },
  {
    id: 8,
    title: "Setapak Munduk Lingker – Perjalanan yang Menyentuh Hati",
    img: "/images/destinasi8.jpg",
    full: `
      <p>Langkah menyusuri jalur setapak bukit keemasan dengan hembusan angin membawa aroma tanah. Di kejauhan, birunya laut berkilau. Setiap langkah menghadirkan rasa syukur dan ketenangan, mengingatkan pada keindahan sederhana yang sering terabaikan.</p>
      <p>Perjalanan ini menghadirkan kedekatan dengan alam dan diri sendiri, cocok bagi siapa pun yang ingin menenangkan pikiran sekaligus menikmati lanskap spektakuler.</p>
    `
  },
  {
    id: 9,
    title: "Panorama Savana Munduk – Tempat di Mana Alam Memeluk Jiwa",
    img: "/images/destinasi9.jpg",
    full: `
      <p>Berdiri di tengah savana berpadu hutan hijau, angin sejuk menyapa lembut. Dari sini tampak perbukitan bertingkat hingga pegunungan biru di kejauhan. Setiap sudut seperti lukisan alam yang menenangkan hati dan memanjakan mata, mengajarkan kita untuk melambat dan menikmati momen.</p>
      <p>Saat matahari terbenam, savana berubah menjadi lautan emas yang memesona, menghadirkan pengalaman tak terlupakan bagi para pencinta fotografi dan ketenangan alam.</p>
    `
  }
]

// Temukan data sesuai id di URL
const data = details.find(d => d.id === Number(route.params.id))
</script>

<style scoped>
.text-brown {
  color: #6b3e2e;
}
.prose {
  max-width: 750px;
  font-size: 1.1rem;
  line-height: 1.75;
}
.destination-img {
  max-width: 700px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* ===== Tombol Book Now proporsional ===== */
.book-btn {
  padding: 0.6rem 1.8rem;     /* ukuran sedang */
  font-size: 1rem;            /* teks pas */
  border-radius: 30px;        /* tetap bulat elegan */
  font-weight: 600;           /* teks sedikit tebal */
}
</style>
