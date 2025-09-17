<template>
  <section class="position-relative text-center text-white" style="height: 90vh;">
    <!-- Background -->
    <img 
      src="/images/hero.jpg" 
      class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" 
      alt="Pemandangan Desa Sumberkima" 
    />
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

    <!-- Content -->
    <div class="position-relative d-flex flex-column justify-content-center align-items-center h-100 px-4">
      <h1 class="display-4 fw-bold mb-3">
        Desa Sumberkima: Cerita yang Hidup dari Barat Laut Bali
      </h1>
      <p class="lead mb-4">
        Temukan kedamaian, makna, dan petualangan di desa yang menghidupkan cerita dari laut, gunung, hingga kehidupan warganya.
      </p>
      <p class="mb-4">
        Selamat datang di Desa Sumberkima, tempat di mana setiap jengkal tanah, hembusan angin laut, 
        dan senyum warga menyimpan kisah. Terletak di barat laut Bali yang tenang, desa ini mengajak Anda 
        untuk menyelami pariwisata yang lebih dari sekadar destinasi.
      </p>
      <NuxtLink to="#about" class="btn btn-warning fw-semibold text-dark px-4 py-2">
        Jelajahi Lebih Lanjut
      </NuxtLink>
    </div>
  </section>
</template>
