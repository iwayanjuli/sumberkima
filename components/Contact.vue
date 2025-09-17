<template>
  <section id="contact" class="bg-light">
    <!-- ===== Peta Lebar Penuh ===== -->
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11075.882350444399!2d114.5942083615108!3d-8.126787107153945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1699754aff9d9%3A0x7c909cc5a292c770!2sGili%20Putih%20Sumberkima!5e1!3m2!1sid!2sid!4v1758092389298!5m2!1sid!2sid"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>

    <!-- ===== Info Kontak ===== -->
    <div class="container py-5">
      <div class="row text-center text-md-start">
        <!-- Kolom 1: Tentang Kami -->
        <div class="col-md-5 mb-5">
          <h4 class="fw-bold text-brown mb-3">Tentang Kami</h4>
          <p class="text-secondary">
            Desa Sumberkima adalah destinasi wisata ekowisata di Bali Utara,
            dikelilingi hutan mangrove, pantai tenang, dan budaya lokal yang
            masih lestari. Kami mengajak Anda menikmati alam sekaligus menjaga
            kelestariannya.
          </p>
        </div>

        <!-- Kolom 2: Alamat Kami -->
        <div class="col-md-4 mb-4">
          <h4 class="fw-bold text-brown mb-3">Alamat Kami</h4>
          <p class="text-secondary">
            Sumberkima, Kec. Gerokgak,<br />
            Kabupaten Buleleng, Bali
          </p>
          <p>
            <i class="bi bi-telephone-fill text-primary me-2"></i>
            <a
              href="https://wa.me/6285238941672"
              class="text-decoration-none text-dark"
              target="_blank"
            >
              0852-3894-1672
            </a>
          </p>
        </div>

        <!-- Kolom 3: Media Sosial -->
        <div class="col-md-3 mb-3">
          <h4 class="fw-bold text-brown mb-3">Media Sosial</h4>
          <div class="d-flex justify-content-center justify-content-md-start gap-3 fs-4">
            <a
              href="https://www.instagram.com/karang.sumberkima/"
              class="text-danger"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/giliputihpokdarwis"
              class="text-primary"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a
              href="https://wa.me/6285238941672"
              class="text-success"
              target="_blank"
              aria-label="WhatsApp"
            >
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Tidak ada script khusus
</script>

<style scoped>
.text-brown {
  color: #6b3e2e;
}
.map-container iframe {
  display: block;
  width: 100%;
  border: 0;
}
</style>
