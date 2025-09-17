<template>
  <section id="about" class="py-5 bg-light">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Kolom Teks -->
        <div class="col-lg-7">
          <p class="text-uppercase text-muted mb-2">
            Jelajahi keindahan dan budaya Desa Sumberkima
          </p>
          <h2 class="fw-bold text-primary mb-4">
            Tentang <span class="text-dark">Desa Sumberkima</span>
          </h2>
          <p class="text-secondary mb-3">
            Desa Sumberkima terletak di barat laut Bali, sebuah desa dengan pemandangan alam
            yang menawan dan kaya akan sejarah serta budaya. Dikenal dengan sumber air kima
            yang legendaris, desa ini menjadi simbol harmoni antara manusia dan alam.
          </p>
          <p class="text-secondary mb-4">
            Selain alam yang indah, masyarakatnya hidup rukun dalam keberagaman. Kini,
            Sumberkima berkembang menjadi salah satu destinasi wisata yang menyajikan pengalaman
            autentik Bali Utara.
          </p>

          <!-- Info -->
          <ul class="list-unstyled mb-4">
            <li class="d-flex align-items-center mb-2">
              <i class="bi bi-check-circle-fill text-primary me-2"></i>
              <span>Kehidupan masyarakat yang harmonis</span>
            </li>
            <li class="d-flex align-items-center mb-2">
              <i class="bi bi-check-circle-fill text-primary me-2"></i>
              <span>Pemandangan laut dan perbukitan yang memukau</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="bi bi-check-circle-fill text-primary me-2"></i>
              <span>Destinasi wisata berbasis budaya dan sejarah</span>
            </li>
          </ul>

          <!-- Tombol -->
          <NuxtLink to="#history" class="btn btn-primary px-4">
            Baca Sejarah Desa
          </NuxtLink>
        </div>

        <!-- Kolom Gambar -->
        <div class="col-lg-5 text-center">
          <img
            src="/images/about.jpg"
            alt="Tentang Desa Sumberkima"
            class="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Tidak ada logic khusus di sini untuk saat ini
</script>

<style scoped>
/* Bisa tambah styling kustom kalau perlu */
</style>
