<template>
  <div>
    <header v-if="!isDetailPage">
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container">
          <!-- ===== Logo ===== -->
          <NuxtLink to="/" class="navbar-brand d-flex align-items-center gap-2 fw-bold">
            <img
              src="/images/logo.png"
              alt="Logo Desa Sumberkima"
              style="height: 50px;"
              class="me-2"
            />
            <span class="text-uppercase text-dark fw-bold">Desa Sumberkima</span>
          </NuxtLink>

          <!-- ===== Burger Toggler ===== -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- ===== Menu + Book Now ===== -->
          <div
            class="collapse navbar-collapse flex-column flex-lg-row align-items-end align-items-lg-center justify-content-lg-end"
            id="navbarNav"
          >
            <!-- Menu -->
            <ul class="navbar-nav fw-bold text-end me-lg-3">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link text-dark">Beranda</NuxtLink>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link text-dark">Tentang</a>
              </li>
              <li class="nav-item">
                <a href="#destination" class="nav-link text-dark">Destinasi</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link text-dark">Kontak</a>
              </li>
            </ul>

            <!-- Book Now di bawah menu & rata kanan pada mobile -->
            <a
              href="https://wa.me/6285238941672?text=Halo%20saya%20ingin%20booking"
              target="_blank"
              rel="noopener"
              class="btn btn-warning fw-bold text-dark px-3 py-2 rounded-pill mt-3 mt-lg-0"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer v-if="!isDetailPage" class="bg-dark text-white text-center py-4 mt-5">
      <p class="mb-0">&copy; 2025 Desa Sumberkima. Semua Hak Dilindungi.</p>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isDetailPage = computed(() => route.path.startsWith('/destinasi/'))
</script>
