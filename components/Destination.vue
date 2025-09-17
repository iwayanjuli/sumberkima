<template>
  <section class="py-5 container">
    <router-link to="/" class="btn btn-secondary mb-4">← Kembali</router-link>

    <div v-if="data">
      <h2 class="fw-bold mb-3 text-brown">{{ data.title }}</h2>
      <img :src="data.img" class="img-fluid rounded shadow mb-4" :alt="data.title" />
      <div class="text-secondary lh-lg" v-html="data.full"></div>
    </div>
    <div v-else>
      <p>Destinasi tidak ditemukan.</p>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const details = [
  {
    id: 1,
    title: "Wisata Terumbu Karang",
    img: "/images/destinasi1.jpg",
    full: `
      <p>Di ujung Bali Utara, terdapat sebuah desa yang sangat hangat bernama Sumberkima,
      tempat laut masih berbisik tenang dan karang-karang bernafas penuh warna. 
      Dengan perahu tradisional, anda akan dibawa ke tengah laut jernih untuk snorkeling
      atau diving. Terumbu karang berwarna-warni, ikan tropis menari, bahkan penyu kadang
      muncul anggun. Dulu karang sempat memutih, namun warga menanam karang baru dan
      melindungi laut. Kini setiap pengunjung yang ikut snorkeling membantu program
      konservasi dan namanya tercatat dalam peta konservasi desa.</p>
    `
  },
  {
    id: 2,
    title: "Adopsi Bayi Karang",
    img: "/images/destinasi2.jpg",
    full: `
      <p>Di teluk tenang Desa Sumberkima, terumbu karang adalah penjaga alami pantai.
      Beberapa tahun lalu sebagian karang rusak dan memutih. Berkat kru konservasi,
      karang kini pulih. Anda dapat mensponsori satu "bayi karang" untuk tumbuh
      menjadi rumah bagi biota laut, menjaga garis pantai, dan mendukung nelayan.
      Satu bayi karang hari ini berarti laut hidup untuk generasi mendatang.</p>
    `
  },
  {
    id: 3,
    title: "Hutan Mangrove Sumberkima",
    img: "/images/destinasi3.jpg",
    full: `
      <p>Hutan Mangrove Sumberkima adalah permata hijau di ujung Bali Utara.
      Lorong-lorong bakau rimbun menjadi benteng alami melindungi pantai dari abrasi
      dan rumah bagi ikan, kepiting, serta burung. Anda bisa berjalan di antara
      pohon bakau, naik perahu menyusuri jalur air, atau menanam bibit mangrove baru.
      Ini bukan sekadar tempat wisata, tetapi laboratorium alam dan sumber kehidupan
      masyarakat setempat.</p>
    `
  },
  {
    id: 4,
    title: "Tanam Bakau, Tanam Harapan",
    img: "/images/destinasi4.jpg",
    full: `
      <p>Bayangkan Anda berdiri di tepi pantai dengan bibit bakau di tangan.
      Bersama tim lokal Anda akan belajar menanam bibit dan merasakan kepuasan
      melihat tunas hijau berbaris di pantai. Setiap bibit adalah janji masa depan:
      pantai yang kuat dan ekosistem laut sehat. Aktivitas ini cocok untuk keluarga
      atau siapa pun yang ingin meninggalkan jejak kebaikan.</p>
    `
  },
  {
    id: 5,
    title: "Ritual Gebug Ende",
    img: "/images/destinasi5.jpg",
    full: `
      <p>Gebug Ende adalah ritual sakral penuh seni, olahraga, dan doa memohon hujan.
      Dua laki-laki bertarung dengan ende (perisai) dan penjalin (rotan) diiringi gamelan.
      Setelah pertarungan, mereka berpelukan tanpa dendam, simbol harmoni manusia, alam,
      dan Tuhan. Pengalaman ini menghadirkan degup jantung desa dan semangat warganya.</p>
    `
  },
  {
    id: 6,
    title: "Pantai Sumberkima",
    img: "/images/destinasi6.jpg",
    full: `
      <p>Pantai Sumberkima tenang dan instagramable dengan latar hutan mangrove.
      Ikon utamanya kapal tua di tengah laut yang jadi spot foto favorit terutama saat
      matahari terbit atau terbenam. Nikmati udara segar, jalan santai di tepi pantai,
      dan pemandangan pegunungan di kejauhan.</p>
    `
  },
  {
    id: 7,
    title: "Jalan di Antara Lontar",
    img: "/images/destination7.jpg",
    full: `
      <p>Deretan pohon lontar tinggi menciptakan pemandangan dramatis.
      Saat matahari terbit atau senja, langit oranye-keemasan memantul di genangan air.
      Tempat ini menawarkan ketenangan, inspirasi, dan momen perlahan
      yang sulit ditemukan di tempat lain.</p>
    `
  },
  {
    id: 8,
    title: "Setapak Munduk Lingker",
    img: "/images/destinasi8.jpg",
    full: `
      <p>Langkahmu menyusuri jalur setapak di bukit kering berwarna keemasan
      dengan hembusan angin membawa aroma tanah. Di kejauhan, birunya laut berkilau.
      Setiap langkah membawa ketenangan dan rasa syukur atas keindahan sederhana.</p>
    `
  },
  {
    id: 9,
    title: "Panorama Savana Munduk",
    img: "/images/destinasi9.jpg",
    full: `
      <p>Berdiri di tengah savana berpadu hutan hijau, angin sejuk menyapa.
      Dari sini terlihat perbukitan bertingkat hingga pegunungan biru di kejauhan.
      Suasana tenang memanjakan mata dan menenangkan hati, mengajarkan
      untuk melambat dan menikmati setiap detik.</p>
    `
  }
]

const data = details.find(d => d.id === Number(route.params.id))
</script>

<style scoped>
.text-brown { color:#6b3e2e; }
</style>
