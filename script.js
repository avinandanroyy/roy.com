// E-commerce functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Sample clothing product data - Shirts and Bottoms only
    const products = [
        {
            id: 1,
            name: "Classic T-Shirt",
            price: 24.99,
            category: "Shirts",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_25PI_25P3039B3S27I_074_5CBenetton_25PI_25P3039B3S27I_074_FS.jpg?v=1737896965",
            description: "Premium cotton classic white t-shirt for everyday wear"
        },
        {
            id: 2,
            name: "Polo Shirt",
            price: 34.99,
            category: "Shirts",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_25PI_25P3089B3329I_100_5CBenetton_25PI_25P3089B3329I_100_FS_960x_crop_center.jpg?v=1740417440",
            description: "Classic black polo shirt for casual and semi-formal wear"
        },
        {
            id: 3,
            name: "White Shirt",
            price: 69.99,
            category: "Shirts",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_25PI_25P5POPDIS77I_101_5CBenetton_25PI_25P5POPDIS77I_101_BS.jpg?v=1735486129",
            description: "Professional white dress shirt for formal occasions"
        },
        {
            id: 4,
            name: "Black Shirt",
            price: 54.99,
            category: "Shirts",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_25PI_25P1032B1152I_100_5CBenetton_25PI_25P1032B1152I_100_FS_960x_crop_center.jpg?v=1739044899",
            description: "Elegant black button-up shirt for professional settings"
        },
        {
            id: 5,
            name: "Oxford Shirt",
            price: 49.99,
            category: "Shirts",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_25PI_25P5OXFPR33DI_101_5CBenetton_25PI_25P5OXFPR33DI_101_FS_770x700_crop_center.jpg?v=1745151913",
            description: "Classic white oxford shirt with timeless style"
        },
        {
            id: 6,
            name: "Jeans",
            price: 89.99,
            category: "Bottoms",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_24AI_24A4L23R3073I_100_FS_82d96871-0d0e-490d-bf70-a62b8f4b6f78.jpg?v=1723281518",
            description: "Classic black jeans with perfect fit and comfort"
        },
        {
            id: 7,
            name: "Chino Pants",
            price: 64.99,
            category: "Bottoms",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_25PI_25P4BIST1025I_902_5CBenetton_25PI_25P4BIST1025I_902_FS.jpg?v=1745152074",
            description: "Comfortable white chino pants for casual and semi-formal wear"
        },
        {
            id: 8,
            name: "Seersucker Pant",
            price: 79.99,
            category: "Bottoms",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_25PI_25P4KNTR1038I_100_5CBenetton_25PI_25P4KNTR1038I_100_FS.jpg?v=1745152068",
            description: "Professional textured relaxed fit seersucker pants for formal occasions"
        },
        {
            id: 9,
            name: "Cargo Pants",
            price: 59.99,
            category: "Bottoms",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_25PI_25P4KNTEX148I_901_5CBenetton_25PI_25P4KNTEX148I_901_FS_960x_crop_center.jpg?v=1743584617",
            description: "Stylish white cargo pants with multiple pockets"
        },
        {
            id: 10,
            name: "Sweatpants",
            price: 44.99,
            category: "Bottoms",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_24AI_24A3P19J3092I_100_5CBenetton_24AI_24A3P19J3092I_100_FS.jpg?v=1729536625",
            description: "Comfortable black sweatpants for lounging and workouts"
        },
        {
            id: 11,
            name: "Tank Top",
            price: 19.99,
            category: "Shirts",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_25PI_25P3E29G3704I_074_5CBenetton_25PI_25P3E29G3704I_074_FS_960x_crop_center.jpg?v=1739044931",
            description: "Comfortable white tank top for workouts and casual wear"
        },
        {
            id: 12,
            name: "Henley Shirt",
            price: 39.99,
            category: "Shirts",
            image: "https://in.benetton.com/cdn/shop/files/Benetton_25PI_25P5MD43U008I_100_5CBenetton_25PI_25P5MD43U008I_100_FS.jpg?v=1739045081",
            description: "Classic black henley shirt with button-up neckline"
        }
    ];

    // Shopping cart state
    let cart = [];
    let savedForLater = [];
    let currentProducts = products.slice(0, 8); // Show first 8 products initially

    // Load cart from localStorage
    function loadCartFromStorage() {
        const savedCart = localStorage.getItem('hazeCart');
        const savedItems = localStorage.getItem('hazeSavedForLater');
        
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
        
        if (savedItems) {
            savedForLater = JSON.parse(savedItems);
        }
    }

    // Save cart to localStorage
    function saveCartToStorage() {
        localStorage.setItem('hazeCart', JSON.stringify(cart));
        localStorage.setItem('hazeSavedForLater', JSON.stringify(savedForLater));
    }

    // DOM elements
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');
    
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartShipping = document.getElementById('cartShipping');
    const cartTax = document.getElementById('cartTax');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const cartTab = document.getElementById('cartTab');
    const savedTab = document.getElementById('savedTab');
    const cartTabCount = document.getElementById('cartTabCount');
    const savedTabCount = document.getElementById('savedTabCount');
    const savedItems = document.getElementById('savedItems');
    const cartSummary = document.getElementById('cartSummary');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const continueShopping = document.getElementById('continueShopping');
    
    const userBtn = document.getElementById('userBtn');
    const userMenu = document.getElementById('userMenu');
    
    const signupBtn = document.getElementById('signupBtn');
    const signupModal = document.getElementById('signupModal');
    
    const productsGrid = document.getElementById('productsGrid');
    const themeToggle = document.getElementById('themeToggle');

    // Signup page specific elements
    const signupForm = document.querySelector('.signup-form');
    const passwordToggle = document.getElementById('passwordToggle');
    const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const signupSubmitBtn = document.querySelector('.signup-btn');

    // Initialize the app
    function init() {
        initTheme();
        renderProducts();
        updateCartDisplay();
        setupEventListeners();
        setupSignupFunctionality();
        setupSmoothScrolling();
        loadCartFromStorage(); // Load cart on page load
    }

    // Setup smooth scrolling for navigation
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Setup signup page functionality
    function setupSignupFunctionality() {
        if (!signupForm) return;

        // Password visibility toggle
        if (passwordToggle && passwordInput) {
            passwordToggle.addEventListener('click', () => {
                togglePasswordVisibility(passwordInput, passwordToggle);
            });
        }

        if (confirmPasswordToggle && confirmPasswordInput) {
            confirmPasswordToggle.addEventListener('click', () => {
                togglePasswordVisibility(confirmPasswordInput, confirmPasswordToggle);
            });
        }

        // Real-time form validation
        setupFormValidation();

        // Form submission
        signupForm.addEventListener('submit', handleSignupSubmit);

        // Social signup buttons
        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('click', handleSocialSignup);
        });

        // Auto-focus first input when modal opens
        if (signupModal) {
            signupModal.addEventListener('shown.bs.modal', () => {
                const firstInput = signupForm.querySelector('input');
                if (firstInput) {
                    setTimeout(() => firstInput.focus(), 100);
                }
            });
        }
    }

    // Toggle password visibility
    function togglePasswordVisibility(input, toggleBtn) {
        const type = input.type === 'password' ? 'text' : 'password';
        input.type = type;
        
        const icon = toggleBtn.querySelector('i');
        icon.className = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
    }

    // Setup form validation
    function setupFormValidation() {
        const inputs = signupForm.querySelectorAll('input');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                clearFieldError(input);
                if (input.id === 'password') {
                    checkPasswordStrength(input.value);
                }
            });
        });

        // Real-time password confirmation check
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('input', () => {
                const password = passwordInput.value;
                const confirmPassword = confirmPasswordInput.value;
                
                if (confirmPassword && password !== confirmPassword) {
                    showFieldError(confirmPasswordInput, 'Passwords do not match');
                } else {
                    clearFieldError(confirmPasswordInput);
                }
            });
        }

        // Radio button functionality
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', function() {
                // Remove active state from all radio buttons in the same group
                const name = this.name;
                document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
                    const span = r.parentElement.querySelector('span:first-child');
                    const dot = span.querySelector('span:last-child');
                    dot.classList.add('hidden');
                });
                
                // Add active state to selected radio button
                const span = this.parentElement.querySelector('span:first-child');
                const dot = span.querySelector('span:last-child');
                dot.classList.remove('hidden');
            });
        });
    }

    // Validate individual field
    function validateField(input) {
        const value = input.value.trim();
        const fieldName = input.name;
        
        // Clear previous errors
        clearFieldError(input);
        
        // Required field validation
        if (input.hasAttribute('required') && !value) {
            showFieldError(input, `${getFieldLabel(input)} is required`);
            return false;
        }
        
        // Email validation
        if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(input, 'Please enter a valid email address');
                return false;
            }
        }
        
        // Phone validation
        if (input.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                showFieldError(input, 'Please enter a valid phone number');
                return false;
            }
        }
        
        // Password validation
        if (input.id === 'password' && value) {
            if (value.length < 8) {
                showFieldError(input, 'Password must be at least 8 characters long');
                return false;
            }
        }
        
        // Confirm password validation
        if (input.id === 'confirm-password' && value) {
            const password = passwordInput.value;
            if (value !== password) {
                showFieldError(input, 'Passwords do not match');
                return false;
            }
        }
        
        // Date validation
        if (input.type === 'date' && value) {
            const selectedDate = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - selectedDate.getFullYear();
            
            if (age < 13) {
                showFieldError(input, 'You must be at least 13 years old');
                return false;
            }
        }
        
        // Show success state
        showFieldSuccess(input);
        return true;
    }

    // Show field error
    function showFieldError(input, message) {
        const wrapper = input.closest('.relative');
        wrapper.classList.add('error');
        wrapper.classList.remove('success');
        
        // Remove existing error message
        const existingError = wrapper.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-500 text-sm mt-1 flex items-center gap-1';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        wrapper.parentNode.appendChild(errorDiv);
    }

    // Show field success
    function showFieldSuccess(input) {
        const wrapper = input.closest('.relative');
        wrapper.classList.add('success');
        wrapper.classList.remove('error');
        
        // Remove existing messages
        const existingError = wrapper.parentNode.querySelector('.error-message');
        const existingSuccess = wrapper.parentNode.querySelector('.success-message');
        if (existingError) existingError.remove();
        if (existingSuccess) existingSuccess.remove();
    }

    // Clear field error
    function clearFieldError(input) {
        const wrapper = input.closest('.relative');
        wrapper.classList.remove('error', 'success');
        
        const existingError = wrapper.parentNode.querySelector('.error-message');
        const existingSuccess = wrapper.parentNode.querySelector('.success-message');
        if (existingError) existingError.remove();
        if (existingSuccess) existingSuccess.remove();
    }

    // Get field label
    function getFieldLabel(input) {
        const label = input.closest('div').previousElementSibling;
        return label ? label.textContent.replace('*', '').trim() : 'This field';
    }

    // Check password strength
    function checkPasswordStrength(password) {
        // This function can be expanded to show password strength indicator
        // For now, we'll just validate the length
        if (password.length >= 8) {
            // Password is strong enough
        }
    }

    // Handle signup form submission
    function handleSignupSubmit(e) {
        e.preventDefault();
        
        // Validate all fields
        const inputs = signupForm.querySelectorAll('input[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showNotification('Please fix the errors in the form', 'error');
            return;
        }
        
        // Get form data
        const formData = new FormData(signupForm);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const btnText = signupSubmitBtn.querySelector('.btn-text');
        const btnLoading = signupSubmitBtn.querySelector('.btn-loading');
        
        btnText.classList.add('hidden');
        btnLoading.classList.remove('hidden');
        signupSubmitBtn.classList.add('loading');
        
        // Simulate API call
        setTimeout(() => {
            // Reset button state
            btnText.classList.remove('hidden');
            btnLoading.classList.add('hidden');
            signupSubmitBtn.classList.remove('loading');
            
            // Show success message
            showNotification('Account created successfully! Welcome to HAZE!', 'success');
            
            // Close modal and reset form
            signupModal.classList.add('hidden');
            signupForm.reset();
            
            // Reset radio button states
            document.querySelectorAll('input[type="radio"]').forEach(radio => {
                const span = radio.parentElement.querySelector('span:first-child');
                const dot = span.querySelector('span:last-child');
                dot.classList.add('hidden');
            });
        }, 2000);
    }

    // Handle social signup
    function handleSocialSignup(e) {
        const provider = e.currentTarget.classList.contains('google') ? 'Google' :
                        e.currentTarget.classList.contains('facebook') ? 'Facebook' : 'Twitter';
        
        showNotification(`Redirecting to ${provider} for authentication...`, 'info');
        
        // Simulate social login
        setTimeout(() => {
            showNotification(`Successfully signed up with ${provider}!`, 'success');
            signupModal.classList.add('hidden');
        }, 1500);
    }

    // Setup all event listeners
    function setupEventListeners() {
        // Search functionality
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                searchModal.classList.remove('hidden');
                searchModal.classList.add('flex');
                searchInput.focus();
            });
        }

        if (closeSearch) {
            closeSearch.addEventListener('click', () => {
                searchModal.classList.add('hidden');
                searchModal.classList.remove('flex');
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }

        // Cart functionality
        if (cartBtn) {
            cartBtn.addEventListener('click', () => {
                cartSidebar.classList.toggle('translate-x-full');
            });
            // Double-click to close cart if open (optional, can be removed if toggle is enough)
            cartBtn.addEventListener('dblclick', () => {
                if (!cartSidebar.classList.contains('translate-x-full')) {
                    cartSidebar.classList.add('translate-x-full');
                }
            });
        }

        if (closeCart) {
            closeCart.addEventListener('click', () => {
                cartSidebar.classList.add('translate-x-full');
            });
        }

        // Allow closing cart with Escape key
        document.addEventListener('keydown', (e) => {
            if (!cartSidebar.classList.contains('translate-x-full') && e.key === 'Escape') {
                cartSidebar.classList.add('translate-x-full');
            }
        });

        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', handleCheckout);
        }

        // Cart tabs functionality
        if (cartTab) {
            cartTab.addEventListener('click', () => {
                showCartTab();
            });
        }

        if (savedTab) {
            savedTab.addEventListener('click', () => {
                showSavedTab();
            });
        }

        if (continueShopping) {
            continueShopping.addEventListener('click', () => {
                cartSidebar.classList.add('translate-x-full');
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            });
        }

        // User menu
        if (userBtn) {
            userBtn.addEventListener('click', () => {
                userMenu.classList.toggle('translate-x-full');
            });
        }

        // Signup modal
        if (signupBtn) {
            signupBtn.addEventListener('click', () => {
                signupModal.classList.remove('hidden');
                signupModal.classList.add('flex');
                const firstInput = signupForm.querySelector('input');
                if (firstInput) {
                    setTimeout(() => firstInput.focus(), 100);
                }
            });
        }

        // Close signup modal when clicking outside
        if (signupModal) {
            signupModal.addEventListener('click', (e) => {
                if (e.target === signupModal) {
                    signupModal.classList.add('hidden');
                    signupModal.classList.remove('flex');
                }
            });
        }

        // Theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (searchModal && e.target === searchModal) {
                searchModal.classList.add('hidden');
                searchModal.classList.remove('flex');
            }
            if (cartSidebar && e.target === cartSidebar) {
                cartSidebar.classList.add('translate-x-full');
            }
            if (userMenu && !userMenu.contains(e.target) && !userBtn?.contains(e.target)) {
                userMenu.classList.add('translate-x-full');
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                if (searchModal) {
                    searchModal.classList.remove('hidden');
                    searchModal.classList.add('flex');
                    searchInput?.focus();
                }
            }
            if (e.key === 'Escape') {
                if (searchModal) {
                    searchModal.classList.add('hidden');
                    searchModal.classList.remove('flex');
                }
                if (cartSidebar) cartSidebar.classList.add('translate-x-full');
                if (userMenu) userMenu.classList.add('translate-x-full');
                if (signupModal) {
                    signupModal.classList.add('hidden');
                    signupModal.classList.remove('flex');
                }
            }
        });

        // Contact form
        const contactForm = document.querySelector('form');
        if (contactForm && !contactForm.classList.contains('signup-form')) {
            contactForm.addEventListener('submit', handleContactSubmit);
        }

        // Newsletter form
        const newsletterForm = document.querySelector('footer form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', handleNewsletterSubmit);
        }



        // CTA buttons
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target.textContent === 'Shop Now') {
                    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
                } else if (e.target.textContent === 'Learn More') {
                    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // Render products
    function renderProducts() {
        if (!productsGrid) return;
        
        productsGrid.innerHTML = '';
        
        // Show all products since we removed the load more functionality
        products.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    // Create product card with modern Tailwind design
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-xl hover:border-gray-300/50 dark:hover:border-gray-600/50 transition-all duration-300 group';
        
        card.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                <div class="absolute top-4 right-4">
                    <button class="wishlist-btn w-10 h-10 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-white dark:hover:bg-gray-600 transition-all duration-200 shadow-sm" data-product-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">${product.name}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">${product.description}</p>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Size:</label>
                    <select class="size-select w-full px-3 py-2 border border-gray-200/50 dark:border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-900 dark:text-white">
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M" selected>M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-gray-900 dark:text-white">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart bg-black/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-black px-4 py-2 rounded-lg hover:bg-black dark:hover:bg-white transition-colors duration-200 font-medium text-sm" data-product-id="${product.id}">
                        <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        `;

        // Add event listeners
        const addToCartBtn = card.querySelector('.add-to-cart');
        const wishlistBtn = card.querySelector('.wishlist-btn');
        const sizeSelect = card.querySelector('.size-select');

        addToCartBtn.addEventListener('click', () => {
            const selectedSize = sizeSelect.value;
            addToCart(product, selectedSize);
        });

        wishlistBtn.addEventListener('click', () => {
            toggleWishlist(product);
        });

        return card;
    }

    // Add to cart with size selection
    function addToCart(product, size = 'M') {
        const existingItem = cart.find(item => item.id === product.id && item.size === size);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1,
                size: size
            });
        }

        updateCartDisplay();
        showNotification(`${product.name} (${size}) added to cart!`);
        saveCartToStorage();
    }

    // Save item for later
    function saveForLater(productId, size) {
        const item = cart.find(item => item.id === productId && item.size === size);
        if (item) {
            cart = cart.filter(cartItem => !(cartItem.id === productId && cartItem.size === size));
            savedForLater.push(item);
            updateCartDisplay();
            showNotification(`${item.name} saved for later`);
            saveCartToStorage();
        }
    }

    // Move item from saved to cart
    function moveToCart(productId, size) {
        const item = savedForLater.find(item => item.id === productId && item.size === size);
        if (item) {
            savedForLater = savedForLater.filter(savedItem => !(savedItem.id === productId && savedItem.size === size));
            cart.push(item);
            updateCartDisplay();
            showNotification(`${item.name} moved to cart`);
            saveCartToStorage();
        }
    }

    // Remove from saved items
    function removeFromSaved(productId, size) {
        savedForLater = savedForLater.filter(item => !(item.id === productId && item.size === size));
        updateCartDisplay();
        showNotification('Item removed from saved items');
        saveCartToStorage();
    }

    // Calculate shipping cost
    function calculateShipping(subtotal) {
        if (subtotal >= 100) {
            return 0; // Free shipping over $100
        } else if (subtotal >= 50) {
            return 5.99; // Reduced shipping over $50
        } else {
            return 9.99; // Standard shipping
        }
    }

    // Calculate tax
    function calculateTax(subtotal) {
        return subtotal * 0.08; // 8% tax rate
    }

    // Update cart display
    function updateCartDisplay() {
        if (!cartCount || !cartItems || !cartTotal) return;
        
        // Update cart count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Update tab counts
        if (cartTabCount) cartTabCount.textContent = totalItems;
        if (savedTabCount) savedTabCount.textContent = savedForLater.length;

        // Update cart items
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="text-center text-gray-500 py-8">Your cart is empty</p>';
            if (cartSummary) cartSummary.classList.add('hidden');
            if (emptyCartMessage) emptyCartMessage.classList.remove('hidden');
            if (checkoutBtn) checkoutBtn.classList.add('hidden');
        } else {
            if (cartSummary) cartSummary.classList.remove('hidden');
            if (emptyCartMessage) emptyCartMessage.classList.add('hidden');
            if (checkoutBtn) checkoutBtn.classList.remove('hidden');
            
            cart.forEach(item => {
                const cartItem = createCartItem(item);
                cartItems.appendChild(cartItem);
            });
        }

        // Update saved items
        if (savedItems) {
            savedItems.innerHTML = '';
            if (savedForLater.length === 0) {
                savedItems.innerHTML = '<p class="text-center text-gray-500 py-8">No saved items</p>';
            } else {
                savedForLater.forEach(item => {
                    const savedItem = createSavedItem(item);
                    savedItems.appendChild(savedItem);
                });
            }
        }

        // Update cart summary
        updateCartSummary();
    }

    // Update cart summary with shipping and tax
    function updateCartSummary() {
        if (!cartSubtotal || !cartShipping || !cartTax || !cartTotal) return;
        
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = calculateShipping(subtotal);
        const tax = calculateTax(subtotal);
        const total = subtotal + shipping + tax;

        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
        cartTax.textContent = `$${tax.toFixed(2)}`;
        cartTotal.textContent = `$${total.toFixed(2)}`;

        // Show shipping message
        if (shipping === 0) {
            showNotification('Free shipping on orders over $100!', 'success');
        } else if (subtotal >= 50) {
            showNotification('Add $' + (100 - subtotal).toFixed(2) + ' more for free shipping!', 'info');
        }
    }

    // Create cart item with Tailwind design
    function createCartItem(item) {
        const cartItem = document.createElement('div');
        cartItem.className = 'flex items-center gap-4 p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
            <div class="flex-1">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-1">${item.name}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Size: ${item.size}</p>
                <p class="text-gray-900 dark:text-white font-bold">$${item.price.toFixed(2)}</p>
            </div>
            <div class="flex items-center gap-2">
                <button class="quantity-btn w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200" data-action="decrease" data-id="${item.id}" data-size="${item.size}">-</button>
                <span class="w-8 text-center font-medium text-gray-900 dark:text-white">${item.quantity}</span>
                <button class="quantity-btn w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200" data-action="increase" data-id="${item.id}" data-size="${item.size}">+</button>
                <button class="save-for-later w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 ml-2" data-id="${item.id}" data-size="${item.size}" title="Save for later">
                    <i class="fas fa-bookmark text-xs"></i>
                </button>
                <button class="remove-btn w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200" data-id="${item.id}" data-size="${item.size}">×</button>
            </div>
        `;

        // Add event listeners
        cartItem.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                const id = parseInt(e.target.dataset.id);
                const size = e.target.dataset.size;
                updateQuantity(id, action, size);
            });
        });

        cartItem.querySelector('.remove-btn').addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const size = e.target.dataset.size;
            removeFromCart(id, size);
        });

        cartItem.querySelector('.save-for-later').addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const size = e.target.dataset.size;
            saveForLater(id, size);
        });

        return cartItem;
    }

    // Create saved item with Tailwind design
    function createSavedItem(item) {
        const savedItem = document.createElement('div');
        savedItem.className = 'flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0';
        
        savedItem.innerHTML = `
            <div class="flex items-center gap-4">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-1">${item.name}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Size: ${item.size}</p>
                    <p class="text-gray-900 dark:text-white font-bold">$${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button class="move-to-cart bg-black/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-black px-4 py-2 rounded-lg hover:bg-black dark:hover:bg-white transition-colors duration-200 font-medium text-sm" data-id="${item.id}" data-size="${item.size}">
                    <i class="fas fa-shopping-cart mr-2"></i>Move to Cart
                </button>
                <button class="remove-saved w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200" data-id="${item.id}" data-size="${item.size}" title="Remove">
                    <i class="fas fa-times text-xs"></i>
                </button>
            </div>
        `;

        // Add event listeners
        savedItem.querySelector('.move-to-cart').addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const size = e.target.dataset.size;
            moveToCart(id, size);
        });

        savedItem.querySelector('.remove-saved').addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const size = e.target.dataset.size;
            removeFromSaved(id, size);
        });

        return savedItem;
    }

    // Update quantity
    function updateQuantity(productId, action, size) {
        const item = cart.find(item => item.id === productId && item.size === size);
        
        if (item) {
            if (action === 'increase') {
                item.quantity += 1;
            } else if (action === 'decrease') {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    removeFromCart(productId, size);
                    return;
                }
            }
            updateCartDisplay();
            saveCartToStorage(); // Save cart after quantity change
        }
    }

    // Remove from cart
    function removeFromCart(productId, size) {
        cart = cart.filter(item => item.id !== productId || item.size !== size);
        updateCartDisplay();
        showNotification('Item removed from cart');
        saveCartToStorage(); // Save cart after removal
    }

    // Handle checkout
    function handleCheckout() {
        if (cart.length === 0) {
            showNotification('Your cart is empty!', 'error');
            return;
        }

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Simulate checkout process
        showNotification('Processing checkout...', 'info');
        
        setTimeout(() => {
            showNotification('Order placed successfully!', 'success');
            cart = [];
            updateCartDisplay();
            cartSidebar.classList.add('translate-x-full');
            saveCartToStorage(); // Save cart after checkout
        }, 2000);
    }

    // Search functionality
    function handleSearch() {
        if (!searchInput || !searchSuggestions) return;
        
        const query = searchInput.value.toLowerCase();
        
        if (query.length < 2) {
            searchSuggestions.innerHTML = '';
            return;
        }

        const suggestions = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        ).slice(0, 5);

        displaySearchSuggestions(suggestions);
    }

    function displaySearchSuggestions(suggestions) {
        if (!searchSuggestions) return;
        
        searchSuggestions.innerHTML = '';
        
        suggestions.forEach(product => {
            const suggestion = document.createElement('div');
            suggestion.className = 'flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200';
            suggestion.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-10 h-10 object-cover rounded-lg">
                <div>
                    <div class="font-semibold text-gray-900 dark:text-white">${product.name}</div>
                    <div class="text-gray-900 dark:text-white text-sm">$${product.price.toFixed(2)}</div>
                </div>
            `;
            
            suggestion.addEventListener('click', () => {
                searchInput.value = product.name;
                performSearch();
            });
            
            searchSuggestions.appendChild(suggestion);
        });
    }

    function performSearch() {
        if (!searchInput) return;
        
        const query = searchInput.value.toLowerCase();
        const results = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
        
        currentProducts = results;
        renderProducts();
        if (searchModal) {
            searchModal.classList.add('hidden');
            searchModal.classList.remove('flex');
        }
        if (searchInput) searchInput.value = '';
        if (searchSuggestions) searchSuggestions.innerHTML = '';
        
        if (results.length === 0) {
            showNotification('No products found', 'error');
        } else {
            showNotification(`Found ${results.length} products`);
        }
    }



    // Theme toggle functionality
    function toggleTheme() {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');
        
        if (isDark) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            showNotification('Switched to light theme');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            showNotification('Switched to dark theme');
        }
    }

    // Initialize theme
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    // Wishlist functionality
    function toggleWishlist(product) {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        const existingIndex = wishlist.findIndex(item => item.id === product.id);
        
        if (existingIndex >= 0) {
            wishlist.splice(existingIndex, 1);
            showNotification(`${product.name} removed from wishlist`);
        } else {
            wishlist.push(product);
            showNotification(`${product.name} added to wishlist`);
        }
        
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    // Handle contact form
    function handleContactSubmit(e) {
        e.preventDefault();
        
        // Simulate form submission
        showNotification('Message sent successfully!', 'success');
        e.target.reset();
    }

    // Handle newsletter form
    function handleNewsletterSubmit(e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        if (email) {
            showNotification('Thank you for subscribing!', 'success');
            e.target.reset();
        }
    }

    // Notification system with Tailwind design
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-24 right-6 z-50 transform translate-x-full transition-transform duration-300`;
        
        const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-gray-900 dark:bg-gray-800';
        
        notification.innerHTML = `
            <div class="${bgColor} text-white px-6 py-4 rounded-lg shadow-lg max-w-sm">
                <div class="flex items-center gap-3">
                    <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                    <span>${message}</span>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Show cart tab
    function showCartTab() {
        if (cartTab) cartTab.classList.add('border-b-2', 'border-black', 'dark:border-white', 'text-gray-900', 'dark:text-white');
        if (cartTab) cartTab.classList.remove('text-gray-500', 'dark:text-gray-400');
        if (savedTab) savedTab.classList.remove('border-b-2', 'border-black', 'dark:border-white', 'text-gray-900', 'dark:text-white');
        if (savedTab) savedTab.classList.add('text-gray-500', 'dark:text-gray-400');
        
        if (cartItems) cartItems.classList.remove('hidden');
        if (savedItems) savedItems.classList.add('hidden');
    }

    // Show saved items tab
    function showSavedTab() {
        if (savedTab) savedTab.classList.add('border-b-2', 'border-black', 'dark:border-white', 'text-gray-900', 'dark:text-white');
        if (savedTab) savedTab.classList.remove('text-gray-500', 'dark:text-gray-400');
        if (cartTab) cartTab.classList.remove('border-b-2', 'border-black', 'dark:border-white', 'text-gray-900', 'dark:text-white');
        if (cartTab) cartTab.classList.add('text-gray-500', 'dark:text-gray-400');
        
        if (savedItems) savedItems.classList.remove('hidden');
        if (cartItems) cartItems.classList.add('hidden');
    }

    // Initialize the app
    init();
    
    console.log('HAZE Clothing Store loaded successfully!');
});