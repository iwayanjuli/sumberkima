<template>
  <div>
    <!-- Section Hero -->
    <Hero />

    <!-- Section About -->
    <About />

    <!-- Section History -->
    <History />

    <!-- ===== Section Destinasi dengan Latar Belakang Soft ===== -->
    <section id="destination" class="py-5 bg-destination">
      <div class="container">
        <h2 class="text-center mb-5 fw-bold text-brown">
          Jelajahi 9 Destinasi Wisata Sumberkima
        </h2>

        <div class="row g-4">
          <div v-for="d in destinasi" :key="d.id" class="col-md-4">
            <div class="card h-100 shadow border-0">
              <img :src="d.img" :alt="d.title" class="card-img-top" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">{{ d.title }}</h5>
                <p class="card-text text-secondary">{{ d.short }}</p>

                <!-- ===== Tombol Aksi ===== -->
                <div class="mt-auto d-flex justify-content-between gap-2">
                  <!-- Selengkapnya -->
                  <NuxtLink
                    :to="`/destinasi/${d.id}`"
                    class="btn btn-dark btn-sm flex-fill rounded-pill"
                  >
                    Selengkapnya
                  </NuxtLink>

                  <!-- Book Now ke WhatsApp -->
                  <a
                    :href="`https://wa.me/6285238941672?text=Halo%20saya%20ingin%20booking%20${encodeURIComponent(d.title)}`"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-success btn-sm flex-fill rounded-pill"
                  >
                    Book Now
                  </a>
                </div>
                <!-- ===== End Tombol Aksi ===== -->

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Contact -->
    <Contact />
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import History from '@/components/History.vue'
import Contact from '@/components/Contact.vue'

const destinasi = [
  { id: 1, title: "Wisata Terumbu Karang", short: "Snorkeling & adopsi karang.", img: "/images/destinasi1.jpg" },
  { id: 2, title: "Adopsi Bayi Karang",   short: "Menanam bibit karang.",       img: "/images/destinasi2.jpg" },
  { id: 3, title: "Hutan Mangrove",       short: "Lorong hijau bakau.",         img: "/images/destinasi3.jpg" },
  { id: 4, title: "Tanam Bakau",          short: "Pengalaman tanam bakau.",     img: "/images/destinasi4.jpg" },
  { id: 5, title: "Ritual Gebug Ende",    short: "Pertarungan sakral memohon hujan.", img: "/images/destinasi5.jpg" },
  { id: 6, title: "Pantai Sumberkima",    short: "Pantai tenang instagramable.",     img: "/images/destinasi6.jpg" },
  { id: 7, title: "Jalan di Antara Lontar", short: "Ketentraman pohon lontar.",      img: "/images/destinasi7.jpg" },
  { id: 8, title: "Setapak Munduk Lingker", short: "Perjalanan batin alam.",         img: "/images/destinasi8.jpg" },
  { id: 9, title: "Panorama Savana Munduk", short: "Savana & perbukitan.",          img: "/images/destinasi9.jpg" }
]
</script>

<style scoped>
.text-brown {
  color: #6b3e2e;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

/* Soft background untuk section Destinasi */
.bg-destination {
  background: #f0f7f6; /* hijau muda pastel */
}
</style>
