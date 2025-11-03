<template>
  <div class="bg-white text-black font-sans">
    
   <!-- HEADER -->
<header class="fixed top-0 w-full z-50 bg-gradient-to-r from-orange-600 to-pink-700 shadow-md transition-all duration-300">
  <nav class="container mx-auto flex justify-between items-center p-4 md:px-8">
    <!-- Brand -->
    <h1 class="text-3xl font-extrabold tracking-wide text-white">
      JLM<span class="text-yellow-400">Brand</span>
    </h1>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-8 text-lg font-medium text-white/90">
      <li><a href="#hero" class="hover:text-yellow-400 transition">Home</a></li>
      <li><a href="#about" class="hover:text-yellow-400 transition">About</a></li>
      <li><a href="#services" class="hover:text-yellow-400 transition">Services</a></li>
      <li><a href="#products" class="hover:text-yellow-400 transition">Products</a></li>
      <li><a href="#contact" class="hover:text-yellow-400 transition">Contact</a></li>
      <li>
        <button
          @click="showLogin = true"
          class="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-yellow-400/50 transition-all duration-300"
        >
          Login
        </button>
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden focus:outline-none text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-8 h-8" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </nav>

  <!-- Mobile Dropdown -->
  <transition name="slide-fade">
    <div v-if="isOpen" class="md:hidden bg-gradient-to-b from-orange-600 to-pink-600 shadow-lg">
      <ul class="flex flex-col items-center py-6 space-y-5 text-lg font-semibold text-white">
        <li><a href="#hero" @click="toggleMenu" class="hover:text-yellow-300">Home</a></li>
        <li><a href="#about" @click="toggleMenu" class="hover:text-yellow-300">About</a></li>
        <li><a href="#services" @click="toggleMenu" class="hover:text-yellow-300">Services</a></li>
        <li><a href="#products" @click="toggleMenu" class="hover:text-yellow-300">Products</a></li>
        <li><a href="#contact" @click="toggleMenu" class="hover:text-yellow-300">Contact</a></li>
        <li>
          <button
            @click="showLogin = true"
            class="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-orange-600 transition"
          >
            Login
          </button>
        </li>
      </ul>
    </div>
  </transition>
</header>

<!-- HERO SECTION -->
<section
  id="hero"
  class="relative flex flex-col md:flex-row justify-center items-center min-h-screen text-white overflow-hidden bg-gradient-to-br from-orange-500 to-pink-700 shadow-mb"
>
  <!-- Subtle Overlay for Contrast -->
  <div class="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

  <div
    class="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 lg:px-24 xl:px-40 py-20 relative z-10"
  >
    <!-- Left Text -->
    <div
      class="md:w-1/2 space-y-8 animate-fadeInUp"
    >
      <h1
        class="text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-tight drop-shadow-2xl"
      >
        Empower Your
        <span class="text-yellow-400">Digital Business</span>
      </h1>

      <p class="text-lg lg:text-xl xl:text-2xl max-w-lg opacity-90 text-gray-100">
        Unlock your potential with powerful digital tools, smart analytics, and
        seamless integrations — built to help your business thrive.
      </p>

      <div class="flex flex-col sm:flex-row gap-5 pt-4">
        <a
          href="#about"
          class="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-yellow-500/40 transition-all duration-300"
        >
          Get Started
        </a>
        <a
          href="#services"
          class="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-orange-700 font-semibold transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </div>

    <!-- Right Image -->
    <div class="md:w-1/2 mt-16 md:mt-0 relative flex justify-center">
      <div
        class="absolute w-72 h-72 lg:w-96 lg:h-96 bg-yellow-400/20 rounded-full blur-3xl -z-10 animate-pulse-slow"
      ></div>
      <img
        src="/ecomerce.png"
        alt="Business Growth"
        class="w-full max-w-xl xl:max-w-2xl rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700 animate-float-smooth"
      />
    </div>
  </div>

  <!-- Subtle Floating Icons / Shapes -->
  <div
    class="absolute top-20 left-20 w-10 h-10 bg-yellow-400/30 rounded-full blur-xl animate-bounce-slow"
  ></div>
  <div
    class="absolute bottom-20 right-24 w-8 h-8 bg-pink-400/40 rounded-full blur-xl animate-float"
  ></div>
</section>



  <!-- ABOUT SECTION -->
<section id="about" class="py-24 bg-gradient-to-b from-orange-50 to-white text-gray-800">
  <div class="container mx-auto px-6 md:px-12 lg:px-20">
    
    <!-- Header -->
    <div class="text-center mb-20">
      <h3 class="text-5xl font-extrabold text-orange-500 mb-4 tracking-wide">About Us</h3>
      <div class="h-1 w-24 bg-orange-500 mx-auto mb-6 rounded-full"></div>
      <p class="text-lg max-w-2xl mx-auto text-gray-600 leading-relaxed">
        We bridge technology and creativity — empowering brands through innovation and human-centered design.
      </p>
    </div>

    <!-- Content -->
    <div class="grid md:grid-cols-2 gap-16 items-center">
      <!-- Image Left -->
      <div class="relative order-2 md:order-1">
        <img
          src="/team.png"
          alt="Our Team"
          class="w-full max-w-md mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute top-0 -left-6 w-40 h-40 bg-orange-300 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <!-- Text Right -->
      <div class="space-y-8 order-1 md:order-2">
        <div>
          <h4 class="text-3xl font-semibold text-orange-600 mb-3">Who We Are</h4>
          <p class="text-gray-700 leading-relaxed">
            Since 2023, <span class="font-semibold text-orange-600">JLMBrand</span> has been empowering businesses with
            modern digital tools and strategy-driven designs. Our creative team of developers and strategists
            delivers innovation for all industries.
          </p>
        </div>

        <div>
          <h4 class="text-3xl font-semibold text-orange-600 mb-3">Our Vision</h4>
          <p class="text-gray-700 leading-relaxed">
            To become Africa’s leading hub for sustainable and scalable digital transformation — 
            connecting innovation, business, and impact.
          </p>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-20">
      <div class="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
        <h5 class="text-4xl font-bold text-orange-600">3+</h5>
        <p class="mt-3 text-gray-700">Years Experience</p>
      </div>

      <div class="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
        <h5 class="text-4xl font-bold text-orange-600">200+</h5>
        <p class="mt-3 text-gray-700">Happy Clients</p>
      </div>

      <div class="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
        <h5 class="text-4xl font-bold text-orange-600">500+</h5>
        <p class="mt-3 text-gray-700">Projects Delivered</p>
      </div>

      <div class="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
        <h5 class="text-4xl font-bold text-orange-600">50+</h5>
        <p class="mt-3 text-gray-700">Team Members</p>
      </div>
    </div>

  </div>
</section>


    <!-- Services -->
<section id="services" class="py-20 bg-gray-50 text-gray-800">
  <div class="container mx-auto px-6 md:px-12 lg:px-20">
    <!-- Header -->
    <div class="text-center mb-12">
      <h3 class="text-4xl font-bold text-orange-600 mb-4">Our Services</h3>
      <p class="text-lg max-w-2xl mx-auto text-gray-600">
        We provide a full suite of solutions designed to help your business grow, scale, 
        and succeed in the digital age.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      <!-- Service 1 -->
      <div
        class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-in"
      >
        <div class="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Digital Strategy"
            class="w-16 h-16"
          />
        </div>
        <h4 class="text-xl font-semibold mb-4 text-orange-600 text-center">
          Business Strategy
        </h4>
        <p class="text-gray-600 text-center">
          We craft personalized business and digital strategies to help you stand 
          out in competitive markets.
        </p>
      </div>

      <!-- Service 2 -->
      <div
        class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-in"
      >
        <div class="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
            alt="E-commerce Solutions"
            class="w-16 h-16"
          />
        </div>
        <h4 class="text-xl font-semibold mb-4 text-orange-600 text-center">
          E-commerce Solutions
        </h4>
        <p class="text-gray-600 text-center">
          Sell smarter with modern online stores, seamless checkout, and integrated 
          payment solutions.
        </p>
      </div>

      <!-- Service 3 -->
      <div
        class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-in"
      >
        <div class="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="Brand Marketing"
            class="w-16 h-16"
          />
        </div>
        <h4 class="text-xl font-semibold mb-4 text-orange-600 text-center">
          Marketing & Branding
        </h4>
        <p class="text-gray-600 text-center">
          Build a strong brand presence with targeted campaigns, creative visuals, 
          and data-driven marketing.
        </p>
      </div>

      <!-- Service 4 -->
      <div
        class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-in"
      >
        <div class="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721293.png"
            alt="Support"
            class="w-16 h-16"
          />
        </div>
        <h4 class="text-xl font-semibold mb-4 text-orange-600 text-center">
          24/7 Support
        </h4>
        <p class="text-gray-600 text-center">
          Get dedicated support anytime you need help with your products, 
          orders, or services.
        </p>
      </div>

      <!-- Service 5 -->
      <div
        class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-in"
      >
        <div class="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/423/423042.png"
            alt="Analytics"
            class="w-16 h-16"
          />
        </div>
        <h4 class="text-xl font-semibold mb-4 text-orange-600 text-center">
          Data Analytics
        </h4>
        <p class="text-gray-600 text-center">
          Track your business growth with real-time data, insights, 
          and performance analytics dashboards.
        </p>
      </div>

      <!-- Service 6 -->
      <div
        class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-fade-in"
      >
        <div class="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Cloud Solutions"
            class="w-16 h-16"
          />
        </div>
        <h4 class="text-xl font-semibold mb-4 text-orange-600 text-center">
          Cloud Solutions
        </h4>
        <p class="text-gray-600 text-center">
          Secure and scalable cloud infrastructure to keep your 
          business running efficiently at any size.
        </p>
      </div>
    </div>
  </div>
</section>




  <!-- Products Section -->
<section id="products" class="container mx-auto py-20 px-6">
  <h2 class="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 drop-shadow-lg">
    🛍️ Our Featured Products
  </h2>

  <!-- 🌀 Loading State -->
  <div v-if="loadingProducts" class="flex justify-center items-center py-20">
    <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
  </div>

  <!-- 🛒 Product Grid -->
  <div
    v-else
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
  >
    <div
      v-for="(p, i) in products"
      :key="i"
      class="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 relative"
    >
      <!-- 🖼 Product Image -->
      <div class="relative overflow-hidden">
        <img
          :src="p.img"
          alt="Product image"
          class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <!-- 🏷️ Floating price tag -->
        <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-orange-600 font-bold px-3 py-1 rounded-full shadow">
          Ksh {{ p.price }}
        </div>
      </div>

      <!-- 🧾 Product Details -->
      <div class="p-5 flex flex-col justify-between h-44">
        <div>
          <h3 class="font-semibold text-lg text-gray-800 group-hover:text-orange-600 transition">
            {{ p.name }}
          </h3>
          <p class="text-gray-500 text-sm mt-1 line-clamp-2">
            {{ p.desc }}
          </p>
        </div>

        <div class="mt-4 flex justify-between space-x-3">
          <button
            @click="handleAddToCart(p)"
            class="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-xl hover:from-orange-600 hover:to-red-500 shadow-md transition duration-300 flex items-center justify-center space-x-1"
          >
            <span>🛒</span> <span>Add</span>
          </button>

          <button
            @click="openProduct(p)"
            class="flex-1 border border-orange-500 text-orange-500 px-4 py-2 rounded-xl hover:bg-orange-50 transition duration-300 flex items-center justify-center space-x-1"
          >
            <span>👁</span> <span>View</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ⚡ Quick View Modal -->
  <transition name="fade-scale">
    <div
      v-if="selectedProduct"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
    >
      <div
        class="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 animate-fade-in"
      >
        <!-- ✖ Close -->
        <button
          class="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
          @click="selectedProduct = null"
        >
          ✕
        </button>

        <!-- 🖼 Product Image -->
        <div class="overflow-hidden rounded-2xl mb-5">
          <img
            :src="selectedProduct.img"
            alt="Product"
            class="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <!-- 🧾 Product Info -->
        <h3 class="text-3xl font-bold text-gray-800 mb-2">
          {{ selectedProduct.name }}
        </h3>
        <p class="text-gray-600 text-base mb-4">{{ selectedProduct.desc }}</p>
        <p class="text-2xl font-extrabold text-orange-500 mb-6">
          Ksh {{ selectedProduct.price }}
        </p>

        <div class="flex space-x-4">
          <button
            @click="handleAddToCart(selectedProduct); selectedProduct = null"
            class="flex-1 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition duration-300"
          >
            🛒 Add to Cart
          </button>
          <button
            @click="selectedProduct = null"
            class="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</section>


 <!--add to cart and payments with stripe-->
<section>
  <div class="bg-gradient-to-br from-orange-100 to-yellow-50 min-h-screen font-sans">
    <!-- 🛒 Cart Section -->
    <section class="container mx-auto py-20 px-6">
      <h2 class="text-4xl font-extrabold text-orange-600 text-center mb-12 drop-shadow-lg tracking-wide">
        🛍️ Your Shopping Cart
      </h2>

      <div v-if="cart.length === 0" class="text-center text-gray-500 text-lg">
        Your cart is empty. Add some products to get started 😄
      </div>

      <transition-group name="fade-scale" tag="div" class="space-y-6">
        <div
          v-for="item in cart"
          :key="item.id"
          class="flex justify-between items-center bg-white/90 backdrop-blur-md border border-gray-100 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
        >
          <div class="flex items-center space-x-5">
            <!-- 🖼️ Product Image -->
            <div class="relative">
              <img
                :src="item.img"
                alt=""
                class="w-20 h-20 object-cover rounded-xl shadow-md transform hover:scale-105 transition duration-300"
              />
              <span
                class="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-md"
                >{{ item.quantity }}</span
              >
            </div>

            <!-- 📦 Product Info -->
            <div>
              <h3 class="font-semibold text-xl text-gray-800 tracking-tight">{{ item.name }}</h3>
              <p class="text-gray-500">Ksh {{ item.price.toLocaleString() }}</p>
              <div class="flex items-center mt-2 space-x-3">
                <button
                  @click="decreaseQuantity(item.id)"
                  class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition transform hover:scale-105 font-bold"
                >
                  −
                </button>
                <span class="font-semibold text-gray-800">{{ item.quantity }}</span>
                <button
                  @click="increaseQuantity(item.id)"
                  class="w-8 h-8 flex items-center justify-center bg-orange-400 text-white rounded-full hover:bg-orange-500 transition transform hover:scale-105 font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <!-- ❌ Remove Button -->
          <button
            @click="removeItem(item.id)"
            class="text-red-500 hover:text-red-700 font-bold text-2xl transition transform hover:scale-125"
          >
            ✕
          </button>
        </div>
      </transition-group>

      <!-- 💰 Total and Payment Button -->
      <div v-if="cart.length > 0" class="text-right mt-10">
        <p class="text-2xl font-bold text-gray-800 mb-4">
          Total: <span class="text-orange-600">Ksh {{ totalPrice.toLocaleString() }}</span>
        </p>
        <button
          @click="openPaymentPage"
          class="relative mt-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-green-500 hover:to-green-700 shadow-lg transform hover:scale-105 transition duration-300"
        >
          Proceed to Payment 💳
          <span
            class="absolute -top-2 -right-2 bg-white text-green-600 text-xs px-2 py-1 rounded-full animate-pulse"
            >Go</span
          >
        </button>
      </div>
    </section>



    <!-- 💳 Payment Section -->
   <transition name="fade-scale">
  <div
    v-if="showPayment"
    class="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
  >
    <div
      class="relative bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center border border-gray-100 transform transition-all duration-500 hover:-translate-y-1"
    >
      <!-- 🌀 Loading Animation (shows when processing) -->
      <div
        v-if="isLoading"
        class="absolute inset-0 flex flex-col items-center justify-center bg-white/80 rounded-3xl"
      >
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
        <p class="mt-4 text-gray-600 font-semibold">Processing payment...</p>
      </div>

      <!-- 💳 Payment Form -->
      <h2 class="text-3xl font-bold text-gray-800 mb-6 animate-fade-in-down">
        💳 Secure Stripe Payment
      </h2>

      <div class="mb-6 animate-fade-in">
        <p class="text-gray-600 text-lg">Amount to Pay</p>
        <p class="text-4xl font-extrabold text-indigo-600">${{ totalUSD.toFixed(2) }}</p>
        <p class="text-sm text-gray-400 mt-1">(≈ Ksh {{ totalPrice.toLocaleString() }})</p>
      </div>

      <button
        @click="handleStripePayment"
        class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transform hover:scale-[1.03] transition duration-300 shadow-md flex items-center justify-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>Pay with Stripe</span>
      </button>

      <p
        v-if="message"
        :class="messageClass"
        class="mt-4 text-center font-semibold text-gray-700"
      >
        {{ message }}
      </p>

      <!-- ❌ Close button -->
      <button
        @click="showPayment = false"
        class="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition text-2xl"
      >
        ✕
      </button>
    </div>
  </div>
</transition>
  </div>
</section>



  <!-- Contact -->
<section id="contact" class="relative bg-gradient-to-r from-orange-50 via-white to-orange-100 py-20">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-extrabold text-orange-600 drop-shadow">Get in Touch</h2>
      <p class="text-gray-600 mt-2">We’d love to hear from you! Fill out the form or reach us directly.</p>
    </div>

    <div class="grid lg:grid-cols-2 gap-10 items-center">
      <!-- Contact Form -->
      <form  class="bg-white p-8 rounded-2xl shadow-lg space-y-6" @submit.prevent="handleContact">
        <div>
          <label class="block text-sm font-medium text-gray-700">Your Name</label>
          <input 
            type="text" 
            v-model="contactForm.name" 
            placeholder="John Doe" 
            class="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Your Email</label>
          <input 
            type="email" 
            v-model="contactForm.email" 
            placeholder="example@mail.com" 
            class="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Message</label>
          <textarea 
            rows="4" 
            v-model="contactForm.message" 
            placeholder="Write your message..." 
            class="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          class="w-full bg-orange-500 text-white font-bold py-3 rounded-lg shadow hover:bg-orange-600 transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          Send Message
        </button>

        <!-- Feedback -->
        <p v-if="contactStatus" class="mt-4 text-center font-medium" :class="contactStatus === 'Message sent!' ? 'text-green-600' : 'text-red-600'">
          {{ contactStatus }}
        </p>
      </form>

      <!-- Contact Info -->
      <div class="space-y-6">
        <div class="flex items-center space-x-4">
          <div class="p-4 bg-orange-100 rounded-full">📞</div>
          <div>
            <h4 class="font-bold text-gray-800">Phone</h4>
            <p class="text-gray-600">+254 700433210</p>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="p-4 bg-orange-100 rounded-full">📧</div>
          <div>
            <h4 class="font-bold text-gray-800">Email</h4>
            <p class="text-gray-600">info@jlmcompany.com</p>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="p-4 bg-orange-100 rounded-full">📍</div>
          <div>
            <h4 class="font-bold text-gray-800">Location</h4>
            <p class="text-gray-600">Nakuru, Kenya</p>
          </div>
        </div>

        <div class="flex space-x-4 mt-6">
          <a href="#" class="text-orange-500 hover:text-black text-xl">🌐</a>
          <a href="#" class="text-orange-500 hover:text-black text-xl">🐦</a>
          <a href="#" class="text-orange-500 hover:text-black text-xl">📘</a>
        </div>
      </div>
    </div>
  </div>
</section>



    <!-- Footer -->
    <footer class="bg-black text-white py-6 text-center">
      <p>&copy; 2025 JLMBrand. All rights reserved.</p>
    </footer>

   <!-- Login Modal -->
<transition name="fade-zoom">
  <div
    v-if="showLogin"
    class="fixed inset-0 bg-gradient-to-br from-black/70 to-black/40 backdrop-blur-md flex justify-center items-center z-50"
  >
    <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl w-96 shadow-2xl animate-fadeIn relative">
      <!-- Cancel Button (Top Right) -->
      <button
        @click="showLogin = false"
        class="absolute top-3 right-3 text-gray-300 hover:text-white transition"
      >
        ✖
      </button>

      <h3 class="text-3xl font-extrabold text-center text-white mb-6">Welcome Back 👋</h3>
      <form class="space-y-5" @submit.prevent="login">
        <div>
          <label class="block text-gray-200 text-sm mb-1">Email</label>
          <input
            type="email"
            v-model="loginForm.email"
            placeholder="Enter your email"
            class="w-full bg-white/20 text-white placeholder-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label class="block text-gray-200 text-sm mb-1">Password</label>
          <input
            type="password"
            v-model="loginForm.password"
            placeholder="Enter your password"
            class="w-full bg-white/20 text-white placeholder-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition-transform transform hover:scale-105"
        >
          Login
        </button>
      </form>

      <p class="mt-5 text-sm text-gray-300 text-center">
        Don’t have an account?
        <button @click="switchToSignup" class="text-orange-400 hover:underline">Sign Up</button>
      </p>

      <!-- Cancel Button (Bottom) -->
      <button
        @click="showLogin = false"
        class="mt-5 w-full bg-transparent border border-gray-300 text-gray-300 py-2 rounded-xl hover:bg-white/10 transition"
      >
        Cancel
      </button>
    </div>
  </div>
</transition>

<!-- Signup Modal -->
<transition name="fade-zoom">
  <div
    v-if="showSignup"
    class="fixed inset-0 bg-gradient-to-br from-black/70 to-black/40 backdrop-blur-md flex justify-center items-center z-50"
  >
    <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl w-96 shadow-2xl animate-fadeIn relative">
      <!-- Cancel Button (Top Right) -->
      <button
        @click="showSignup = false"
        class="absolute top-3 right-3 text-gray-300 hover:text-white transition"
      >
        ✖
      </button>

      <h3 class="text-3xl font-extrabold text-center text-white mb-6">Create Account ✨</h3>
      <form class="space-y-5" @submit.prevent="signup">
        <div>
          <label class="block text-gray-200 text-sm mb-1">Full Name</label>
          <input
            type="text"
            v-model="signupForm.name"
            placeholder="Enter your full name"
            class="w-full bg-white/20 text-white placeholder-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label class="block text-gray-200 text-sm mb-1">Email</label>
          <input
            type="email"
            v-model="signupForm.email"
            placeholder="Enter your email"
            class="w-full bg-white/20 text-white placeholder-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label class="block text-gray-200 text-sm mb-1">Password</label>
          <input
            type="password"
            v-model="signupForm.password"
            placeholder="Create a password"
            class="w-full bg-white/20 text-white placeholder-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition-transform transform hover:scale-105"
        >
          Sign Up
        </button>
      </form>

      <p class="mt-5 text-sm text-gray-300 text-center">
        Already have an account?
        <button @click="switchToLogin" class="text-orange-400 hover:underline">Login</button>
      </p>

      <!-- Cancel Button (Bottom) -->
      <button
        @click="showSignup = false"
        class="mt-5 w-full bg-transparent border border-gray-300 text-gray-300 py-2 rounded-xl hover:bg-white/10 transition"
      >
        Cancel
      </button>
    </div>
  </div>
</transition>


  </div>
</template>

```vue<script setup >

import { ref, reactive, onMounted, computed } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";

// --- Toast setup ---
const toast = useToast();

// ------------------ State ------------------
const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);

const showLogin = ref(false);
const showSignup = ref(false);

// --- Products ---
const products = ref([]);
const loadingProducts = ref(false);
const selectedProduct = ref(null);

// --- Cart ---
const cart = ref([]);

// --- Stripe ---
const stripe = Stripe("pk_test_51SGxKlJvXqHGaaZklL05RAyEU9MYL53iiqaV2WbFhsgfrYCLdq9vS65n3I7muPzCt1doNTCPcmnLvTQMeWkwvYHM00umrwzYO9");

// --- Payment State ---
const showPayment = ref(false);
const message = ref("");
const messageClass = ref("");

// ------------------ Fetch Products ------------------
console.log("🌍 API URL:", import.meta.env.VITE_API_URL);

const fetchProducts = async () => {
  loadingProducts.value = true;
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
    products.value = res.data.products || [];
    console.log("✅ Products loaded:", products.value);
  } catch (err) {
    console.error("❌ Error loading products:", err);
    toast.error("Failed to load products");
  } finally {
    loadingProducts.value = false;
  }
};

// ------------------ Lifecycle ------------------
onMounted(() => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) cart.value = JSON.parse(savedCart);
  fetchProducts();
  checkPaymentStatus();
});

// ------------------ Cart Logic ------------------
const handleAddToCart = (product) => {
  const existing = cart.value.find((p) => p.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
  saveCart();
  toast.success(`🛒 Added ${product.name} to cart`);
};

const increaseQuantity = (id) => {
  const item = cart.value.find((i) => i.id === id);
  if (item) item.quantity++;
  saveCart();
};

const decreaseQuantity = (id) => {
  const item = cart.value.find((i) => i.id === id);
  if (item && item.quantity > 1) item.quantity--;
  else if (item && item.quantity === 1) removeItem(id);
  saveCart();
};

const removeItem = (id) => {
  cart.value = cart.value.filter((i) => i.id !== id);
  saveCart();
  toast.info("🗑️ Item removed from cart");
};

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

const totalPrice = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

// ------------------ USD Conversion ------------------
const totalUSD = computed(() => totalPrice.value / 130);

// ------------------ Payment Logic ------------------
const openPaymentPage = () => {
  if (totalPrice.value <= 0) {
    toast.error("🛒 Your cart is empty!");
    return;
  }
  showPayment.value = true;
};







const isLoading = ref(false);

const handleStripePayment = async () => {
  try {
    isLoading.value = true;
    await payNow(); // your existing function that triggers payment
  } finally {
    isLoading.value = false;
  }
};

const payNow = async () => {
  const amountInUSD = totalUSD.value;
  if (amountInUSD <= 0) {
    message.value = "Your cart is empty.";
    messageClass.value = "text-red-600";
    return;
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Math.round(amountInUSD * 100) }), // USD → cents
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      message.value = "Payment failed: " + data.error;
      messageClass.value = "text-red-600";
    }
  } catch (error) {
    message.value = "Error: " + error.message;
    messageClass.value = "text-red-600";
  }
};

// ------------------ Check Payment Status ------------------
const checkPaymentStatus = () => {
  const params = new URLSearchParams(window.location.search);
  const status = params.get("status");

  if (status === "success") {
    message.value = "✅ Payment Successful! Redirecting to home...";
    messageClass.value = "text-green-600";
    showPayment.value = true;

    // Clear the cart and save
    cart.value = [];
    saveCart();

    // Redirect to home page after 3 seconds
    setTimeout(() => {
      window.location.href = "https://e-commerce-landingpage-frontend.netlify.app/home";  // 👈 Change to your actual home route if different
    }, 3000);
  } 
  else if (status === "failed") {
    message.value = "❌ Payment Failed. Please try again.";
    messageClass.value = "text-red-600";
    showPayment.value = true;
  }
};


// ------------------ Quick View ------------------
const openProduct = (product) => {
  selectedProduct.value = product;
};

//FROM HERE EVERYTHING IS WORKING WELL THE SIGNUP/LOGIN/CONTACT/ ALL ARE WELL CONNECTED TO THE BACKEND PROPERY>>>>
// ------------------ Contact Form ------------------
const contactForm = reactive({
  name: "",
  email: "",
  message: "",
});

const handleContact = async () => {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, { ...contactForm });
    alert("✅ Message sent successfully!");
    contactForm.name = "";
    contactForm.email = "";
    contactForm.message = "";
  } catch (err) {
    alert("❌ Failed to send message.");
  }
};

// ------------------ Signup and Login ------------------
const loginForm = reactive({
  email: "",
  password: "",
});

const signupForm = reactive({
  name: "",
  email: "",
  password: "",
});

// Switch between modals
const switchToSignup = () => {
  showLogin.value = false;
  showSignup.value = true;
};
const switchToLogin = () => {
  showSignup.value = false;
  showLogin.value = true;
};

// Signup function
const signup = async () => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, signupForm);

    // ✅ Ensure success check is strict and reliable
    if (res.data && res.data.success === true) {
      localStorage.setItem("token", res.data.token);
      toast.success("✅ Signup successful! Redirecting...");

      // ✅ Reset form fields
      signupForm.name = "";
      signupForm.email = "";
      signupForm.password = "";

      // ✅ Close signup modal
      showSignup.value = false;

      // ✅ Redirect after delay
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } else {
      toast.error(res.data.msg || "❌ Signup failed. Please check your details.");
    }
  } catch (err) {
    if (err.response?.data?.msg) {
      toast.error(`❌ ${err.response.data.msg}`);
    } else {
      toast.error("❌ Signup failed. Please try again.");
    }
  }
};

// Login function
const login = async () => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, loginForm);

    if (res.data && res.data.success === true) {
      localStorage.setItem("token", res.data.token);
      toast.success("✅ Login successful!");
      showLogin.value = false;

      // ✅ Reset form
      loginForm.email = "";
      loginForm.password = "";

      // ✅ Redirect after delay
      setTimeout(() => {
        router.push("/");
      }, 1200);
    } else {
      toast.error(res.data.msg || "❌ Invalid email or password.");
    }
  } catch (err) {
    if (err.response?.data?.msg) {
      toast.error(`❌ ${err.response.data.msg}`);
    } else {
      toast.error("❌ Something went wrong. Please try again.");
    }
  }
};


// ------------------ Load Products ------------------
const loadProducts = async () => {
  try {
    // Mock products data
    products.value = [
      { id: 1, name: "Product 1", desc: "Description 1", price: 1000, img: "/api/placeholder/300/200" },
      { id: 2, name: "Product 2", desc: "Description 2", price: 2000, img: "/api/placeholder/300/200" },
      { id: 3, name: "Product 3", desc: "Description 3", price: 3000, img: "/api/placeholder/300/200" },
      { id: 4, name: "Product 4", desc: "Description 4", price: 4000, img: "/api/placeholder/300/200" },
    ];
  } catch (err) {
    console.error("Failed to load products:", err);
    products.value = [];
  } finally {
    loadingProducts.value = false;
  }
};
</script>
```




<style>
/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

button {
  transition: all 0.3s ease;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* subtle fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease forwards;
}

.animate-fade-in-down {
  animation: fadeIn 0.8s ease forwards;
}

/*  product section*/
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.animate-fade-in {
  animation: fadeIn 0.6s ease forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* singup/login animation */
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: all 0.4s ease;
}
.fade-zoom-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.6s ease-out;
}

button:hover {
  transform: scale(1.05);
  transition: 0.3s ease;
}

.fade-up {
  animation: fade-up 1s ease-in-out;
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/*  home page*/
@keyframes float-smooth {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulse-slow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.1); }
}
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.animate-float-smooth { animation: float-smooth 6s ease-in-out infinite; }
.animate-fadeInUp { animation: fadeInUp 1.2s ease-out; }
.animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }

</style>
