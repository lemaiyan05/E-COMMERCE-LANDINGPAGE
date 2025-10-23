<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();


// ------------------ State ------------------
const showLogin = ref(false);
const showSignup = ref(false);



// ------------------ Products ------------------
const loadingProducts = ref(true);
const products = ref([]);
const selectedProduct = ref(null);

const openProduct = (product) => {
  selectedProduct.value = product;
};

const handleAddToCart = async (product) => {
  try {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.warning("Please log in first.");
      return router.push("/login");
    }

    await axios.post("http://localhost:5000/api/products/cart", {
      userId,
      productId: product.id,
      quantity: 1,
    });

    toast.success(`${product.name} added to cart! 🛒`);
    router.push(`/cart`);
  } catch (err) {
    toast.error("Failed to add product to cart.");
  }
};

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/products");
    products.value = res.data.products;
  } catch (err) {
    toast.error("Failed to load products.");
  } finally {
    loadingProducts.value = false;
  }
});


//------------Add to Cart  M-pesa-----------
const cart = ref([]); // Start empty; user will add items

// --- Load Cart from LocalStorage (Optional) ---
onMounted(() => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart.value = JSON.parse(savedCart);
    console.log("Cart loaded from localStorage:", cart.value);
  }
});

// --- Save Cart to LocalStorage ---
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

// --- Total Price ---
const totalPrice = computed(() =>
  cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

// --- Cart Functions ---
// Add item to cart
const addToCart = (product) => {
  const existing = cart.value.find((i) => i.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
  saveCart();
  toast.success(`✅ ${product.name} added to cart.`);
};

// Increase item quantity
const increaseQuantity = (itemId) => {
  const item = cart.value.find((i) => i.id === itemId);
  if (item) {
    item.quantity++;
    saveCart();
  }
};

// Decrease item quantity
const decreaseQuantity = (itemId) => {
  const item = cart.value.find((i) => i.id === itemId);
  if (item && item.quantity > 1) {
    item.quantity--;
    saveCart();
  } else if (item && item.quantity === 1) {
    removeItem(itemId);
  }
};

// Remove item
const removeItem = (itemId) => {
  const item = cart.value.find((i) => i.id === itemId);
  if (item) {
    cart.value = cart.value.filter((i) => i.id !== itemId);
    saveCart();
    toast.info(`🗑️ ${item.name} removed from cart.`);
  }
};

// --- Mock M-Pesa Payment ---
const payWithMpesa = async () => {
  if (totalPrice.value === 0) {
    toast.error("❌ Your cart is empty.");
    return;
  }

  try {
    console.log(`🧪 Mock payment initiated for KES ${totalPrice.value}`);
    toast.success(`✅ Payment of KES ${totalPrice.value} initiated (mock)`);
    // Optional: clear cart after payment
    cart.value = [];
    saveCart();
  } catch (err) {
    toast.error("❌ Payment failed. Try again.");
    console.error(err);
  }
};

//export { cart, totalPrice, increaseQuantity, decreaseQuantity, removeItem, payWithMpesa };


// ------------------ Contact Form ------------------
const contactForm = reactive({
  name: "",
  email: "",
  message: "",
});

const handleContact = async () => {
  try {
    await axios.post("http://localhost:5000/api/contact", { ...contactForm });
    alert("✅ Message sent successfully!");
    contactForm.name = "";
    contactForm.email = "";
    contactForm.message = "";
  } catch (err) {
    alert("❌ Failed to send message.");
  }
};


// log/ sign up handles
// Modal state

// Forms
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
    const res = await axios.post("http://localhost:5000/api/auth/signup", signupForm);

    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
      toast.success("✅ Signup successful! Redirecting...");

      // Clear the signup form
      setSignupForm({ name: "", email: "", password: "" });

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } else {
      toast.error(res.data.msg || "❌ Signup failed. Please check your details.");
    }
  } catch (err) {
    // Only show error toast if request actually fails
    if (err.response && err.response.data && err.response.data.msg) {
      toast.error(`❌ ${err.response.data.msg}`);
    } else {
      toast.error("❌ Signup failed. Please try again.");
    }
  }
};


// Login function
const login = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", loginForm);

    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
      toast.success("✅ Login successful!");
      showLogin.value = false;

      setLoginForm({ email: "", password: "" });

      setTimeout(() => {
        router.push("/");
      }, 1200);

    } else {
      toast.error(res.data.msg || "❌ Invalid email or password.");
    }
  } catch (err) {
    // Handle network or server errors
    if (err.response && err.response.data && err.response.data.msg) {
      toast.error(`❌ ${err.response.data.msg}`);
    } else {
      toast.error("❌ Something went wrong. Please try again.");
    }
  }
};

// ------------------ Helpers ------------------
const scrollToHero = () => {
  const hero = document.getElementById("hero");
  if (hero) {
    hero.scrollIntoView({ behavior: "smooth" });
  }
};
</script>