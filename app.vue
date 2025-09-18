<template>
  <div>
    <!-- Navbar -->
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container">
          <!-- Logo & Title -->
          <NuxtLink to="/" class="navbar-brand d-flex align-items-center gap-2 fw-bold">
            <img
              src="/images/logo.png"
              alt="Logo Desa Sumberkima"
              class="me-2"
              style="height: 50px;"
            />
            <span class="text-uppercase text-dark fw-bold">Desa Sumberkima</span>
          </NuxtLink>

          <!-- Burger Menu (mobile) -->
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

          <!-- Menu Items + Book Now -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto align-items-lg-center fw-bold">
              <li class="nav-item">
                <NuxtLink to="/" exact class="nav-link text-dark">Beranda</NuxtLink>
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

              <!-- Tombol Book Now -->
              <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a
                  href="https://wa.me/6285238941672?text=Halo%20saya%20ingin%20booking"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-warning fw-bold text-dark px-3 py-2 rounded-pill"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Konten Halaman -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4 mt-5">
      <p class="mb-0">&copy; 2025 Desa Sumberkima. Semua Hak Dilindungi.</p>
    </footer>
  </div>
</template>
