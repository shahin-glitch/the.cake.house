// ============================================================
// ✏️  CAKE DATA — ADD / EDIT YOUR CAKES HERE
// Each cake object:
// {
//   id: unique number,
//   name: "Cake Name",
//   category: "birthday" | "wedding" | "custom" | "cupcake" | "cheesecake" | "eggless" | "sugarfree",
//   flavour: "flavour text",
//   price: 850,          // in ₹
//   oldPrice: 1000,      // optional strikethrough price
//   rating: 4.8,         // 0–5
//   reviews: 120,        // number of reviews
//   badge: "Bestseller" | "New" | "Sale" | "",   // optional
//   badgeType: "bestseller" | "new" | "",
//   isNew: true/false,
//   img: "https://your-image-url.jpg"   // ← replace with your photo URLs
// }
// ============================================================
const CAKES = [
  {id:1,name:"Classic Chocolate Dream",category:"birthday",flavour:"Rich Dark Chocolate",price:500,oldPrice:650,rating:4.9,reviews:20,badge:"Bestseller",badgeType:"bestseller",img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80"},
  {id:2,name:"PineApple Cake",category:"birthday",flavour:"Pineapple Combined Vanilla",price:549,oldPrice:0,rating:4.7,reviews:12,badge:"",badgeType:"",img:"https://i.ibb.co/35KqWx8s/pexels-max-griss-16866522-36673108.jpg"},
  {id:3,name:"Red Velvet Romance",category:"custom",flavour:"Red Velvet & Cream",price:499,oldPrice:650,rating:4.8,reviews:16,badge:"Bestseller",badgeType:"bestseller",img:"https://i.ibb.co/YTPv7gLr/delicious-cherry-cake.jpg"},
  {id:4,name:"Royal Wedding Tier",category:"wedding",flavour:"Vanilla & Strawberry",price:799,oldPrice:0,rating:5.0,reviews:45,badge:"New",badgeType:"new",img:"https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&q=80"},
  {id:5,name:"Black Forest",category:"birthday",flavour:"Chocolate & Cherry",price:449,oldPrice:639,rating:4.6,reviews:13,badge:"Sale",badgeType:"",img:"https://i.ibb.co/5WhmDfWH/pexels-3374640-8802102.jpg"},
  {id:6,name:"Dream Cake",category:"cheesecake",flavour:"Chocolate Fantasy",price:499,oldPrice:0,rating:4.9,reviews:27,badge:"Bestseller",badgeType:"bestseller",img:"https://i.ibb.co/PvG3qqCQ/5in1-Torte.jpg"},
  {id:7,name:"Bento Birthday Cake",category:"eggless",flavour:"Customization Flavor",price:299,oldPrice:350,rating:4.7,reviews:15,badge:"New",badgeType:"new",img:"https://i.ibb.co/BKf8drBX/image.jpg"},
  {id:8,name:"Cupcake Bouquet (12 pcs)",category:"cupcake",flavour:"Assorted",price:650,oldPrice:0,rating:4.8,reviews:14,badge:"",badgeType:"",img:"https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&q=80"},
  {id:9,name:"Sugar-Free Cake",category:"sugarfree",flavour:"Almond & Honey",price:699,oldPrice:0,rating:4.5,reviews:12,badge:"",badgeType:"",img:"https://i.ibb.co/nqhThhy8/pexels-brunocurly-12118045.jpg"},
  {id:10,name:"Butterscotch Crunch",category:"birthday",flavour:"Butterscotch & Vanilla",price:449,oldPrice:0,rating:4.6,reviews:11,badge:"",badgeType:"",img:"https://i.ibb.co/FLxdTbL7/Customisedthemecake-the-cake-house-9740051706.webp"},
  {id:11,name:"BMW logo Cake",category:"custom",flavour:"Chocolate",price:499,oldPrice:750,rating:4.9,reviews:15,badge:"New",badgeType:"new",img:"https://i.ibb.co/4RWrf7gp/655800864-17931438546208426-1242504319191656297-n.webp"},
  {id:12,name:"Bento Custom Cake",category:"eggless",flavour:"Customization Flavor",price:499,oldPrice:0,rating:4.5,reviews:22,badge:"",badgeType:"",img:"https://i.ibb.co/NqyVSVr/bridetobecakes-fyp.jpg"},
  {id:13,name:"Custom Photo Cake",category:"photocake",flavour:"Vanilla & Chocolate + Edible Print",price:649,oldPrice:729,rating:4.9,reviews:18,badge:"Bestseller",badgeType:"bestseller",img:"https://i.ibb.co/kgx5Sb0n/Peter-parker-A-customized-theme-work-Dmfororders-the-cake-house-9740051706.webp"},
  {id:14,name:"Chocolate Photo Surprise",category:"photocake",flavour:"Customization with Photo Print",price:599,oldPrice:0,rating:4.8,reviews:10,badge:"New",badgeType:"new",img:"https://i.ibb.co/jZgGSGnW/A-cake-with-two-guesses-Dmfororders-the-cake-house-9740051706.webp"},
  {id:15,name:"Pull Me Up Chocolate Cake",category:"pullmeup",flavour:"Chocolate Ganache Reveal",price:499,oldPrice:550,rating:5.0,reviews:7,badge:"Bestseller",badgeType:"bestseller",img:"https://i.ibb.co/DDCBGXLs/2e83fe4efc9f8899adf9f15312401d47.jpg"},
  {id:16,name:"Pull Me Up Birthday Cake",category:"pullmeup",flavour:"Chocolate Cream Reveal",price:399,oldPrice:0,rating:4.8,reviews:11,badge:"New",badgeType:"new",img:"https://i.ibb.co/ZzQRZvb2/23e93c298e8ca52fb48b6b7dcd580304.jpg"},
  {id:17,name:"Spider Man Cake",category:"kids",flavour:"Vanilla & Fondant Dinosaurs",price:399,oldPrice:500,rating:4.9,reviews:12,badge:"Bestseller",badgeType:"bestseller",img:"https://i.ibb.co/7tw6K3z1/Customised-cake-Dmfororders-the-cake-house-974007106.jpg"},
  {id:18,name:"Car Cake",category:"kids",flavour:"Chocolate",price:599,oldPrice:0,rating:5.0,reviews:17,badge:"New",badgeType:"new",img:"https://i.ibb.co/7tNH4vJs/535576207-17907132333208426-5003813420325130579-n.webp"},
  {id:19,name:"Sports Theme Cake",category:"kids",flavour:"Chocolate & Fondant Decor",price:599,oldPrice:700,rating:4.8,reviews:8,badge:"",badgeType:"",img:"https://i.ibb.co/MknwDgf0/download-1.jpg"},
  {id:20,name:"Rose Bouquet Cake Combo",category:"cakeflowers",flavour:"Vanilla & Fresh Roses",price:599,oldPrice:799,rating:5.0,reviews:13,badge:"Bestseller",badgeType:"bestseller",img:"https://i.ibb.co/hxDXbqKR/pexels-buselliyy-33100289.jpg"},
  {id:21,name:"Rose Bouquet",category:"cakeflowers",flavour:"Fresh Roses",price:199,oldPrice:0,rating:4.9,reviews:21,badge:"New",badgeType:"new",img:"https://i.ibb.co/s9vHBtMC/image.webp"},
  {id:22,name:"Vintage Rose Elegance",category:"vintage",flavour:"Vanilla Buttercream & Rose",price:359,oldPrice:599,rating:4.9,reviews:27,badge:"Bestseller",badgeType:"bestseller",img:"https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=400&q=80"},
  {id:23,name:"Rustic Naked Cake",category:"vintage",flavour:"Mango Flavored",price:449,oldPrice:0,rating:4.7,reviews:14,badge:"New",badgeType:"new",img:"https://i.ibb.co/CsJWxbFh/pexels-beyza-555707524-31458728.jpg"},
  {id:24,name:"Beloved Cake",category:"vintage",flavour:"Strawberry with Cherry",price:399,oldPrice:460,rating:4.8,reviews:20,badge:"",badgeType:"",img:"https://i.ibb.co/HLCHL5KM/pexels-beyza-555707524-28983205.jpg"},
  {id:25,name:"Clean White Minimalist",category:"minimalist",flavour:"Vanilla Bean & Butterscotch Fruit",price:400,oldPrice:0,rating:4.8,reviews:14,badge:"Bestseller",badgeType:"bestseller",img:"https://i.ibb.co/5dCr5pw/pexels-anna-nekrashevich-7552571.jpg"},
  {id:26,name:"Modern Tier",category:"minimalist",flavour:"Strawberry & Vanilla",price:499,oldPrice:550,rating:4.7,reviews:13,badge:"New",badgeType:"new",img:"https://i.ibb.co/FqfDBk8w/pexels-beyza-555707524-29282765.jpg"},
  {id:27,name:"Naked Drip Minimal",category:"minimalist",flavour:"Vanilla",price:399,oldPrice:0,rating:4.9,reviews:12,badge:"",badgeType:"",img:"https://i.ibb.co/VWcfGH8k/image.webp"},
  {id:28,name:"Barbie Cake",category:"kids",flavour:"Vanilla & Strawberry",price:499,oldPrice:550,rating:4.9,reviews:9,badge:"Bestseller",badgeType:"bestseller",img:"https://i.ibb.co/9kz2YZmT/Turning-her-birthday-into-fairy-dream.jpg"},
  {id:29,name:"Groom",category:"wedding",flavour:"Vanilla",price:499,oldPrice:0,rating:5.0,reviews:14,badge:"New",badgeType:"new",img:"https://i.ibb.co/rR1SmjTW/Soon-to-be-Mr-the-cake-house.jpg"},
  {id:30,name:"Bride",category:"wedding",flavour:"Vanilla & Strawberry",price:499,oldPrice:0,rating:5.0,reviews:45,badge:"Bestseller",badgeType:"bestseller",img:"https://i.ibb.co/Y7SHsSxg/From-Ms-To-Mrs-the-cake-house-foryou-cake.jpg"},
];
// ============================================================

// ── STATE ──
let cart = JSON.parse(localStorage.getItem('tch_cart')||'[]');
let wishlist = JSON.parse(localStorage.getItem('tch_wish')||'[]');
let activeCategory = 'all';
let activePriceFilter = 'all';

// ── STARS HTML ──
function starsHtml(r){
  let h='';
  for(let i=1;i<=5;i++){
    if(r>=i) h+='<i class="fa-solid fa-star"></i>';
    else if(r>=i-0.5) h+='<i class="fa-solid fa-star-half-stroke"></i>';
    else h+='<i class="fa-regular fa-star"></i>';
  }
  return h;
}

// ── RENDER CAKES ──
function renderCakes(){
  const query = document.getElementById('searchInput').value.toLowerCase();
  const sort  = document.getElementById('sortSelect').value;
  let list = [...CAKES];
  if(activeCategory!=='all') list=list.filter(c=>c.category===activeCategory);
  if(activePriceFilter==='under500') list=list.filter(c=>c.price<600);
  else if(activePriceFilter==='500-1000') list=list.filter(c=>c.price>=500&&c.price<=1000);
  else if(activePriceFilter==='above1000') list=list.filter(c=>c.price>1000);
  if(query) list=list.filter(c=>c.name.toLowerCase().includes(query)||c.flavour.toLowerCase().includes(query));
  if(sort==='price-asc') list.sort((a,b)=>a.price-b.price);
  else if(sort==='price-desc') list.sort((a,b)=>b.price-a.price);
  else if(sort==='rating') list.sort((a,b)=>b.rating-a.rating);
  else if(sort==='newest') list.sort((a,b)=>b.id-a.id);

  const grid = document.getElementById('cakesGrid');
  if(!list.length){
    grid.innerHTML='<div class="no-results"><i class="fa-solid fa-face-sad-tear" style="font-size:3rem;color:var(--dusty);margin-bottom:1rem;display:block"></i><p>No cakes found. Try a different search!</p></div>';
    return;
  }
  grid.innerHTML = list.map(c=>{
    const inWish = wishlist.includes(c.id);
    const cartItem = cart.find(x=>x.id===c.id);
    const qty = cartItem?cartItem.qty:0;
    return `<div class="cake-card" id="card-${c.id}">
      <div class="card-img-wrap">
        <img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.src='https://placehold.co/400x220/f2dada/7d3d52?text=The+Cake+House'"/>
        ${c.badge?`<div class="card-badge ${c.badgeType}">${c.badge}</div>`:''}
        <button class="wishlist-btn ${inWish?'active':''}" onclick="toggleWishItem(${c.id})" title="Wishlist">
          <i class="fa-${inWish?'solid':'regular'} fa-heart"></i>
        </button>
      </div>
      <div class="card-body">
        <h3>${c.name}</h3>
        <div class="card-meta">${c.flavour}</div>
        <div class="stars">${starsHtml(c.rating)}<span>${c.rating} (${c.reviews})</span></div>
        <div class="card-footer">
          <div>
            <span class="price">₹${c.price}</span>
            ${c.oldPrice?`<span class="price-old">₹${c.oldPrice}</span>`:''}
          </div>
          <button class="add-btn" onclick="addToCart(${c.id})">
            ${qty?`In Cart (${qty}) +`:'Add to Cart'}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── CATEGORY FILTER ──
function filterByCategory(cat, el){
  activeCategory = cat;
  document.querySelectorAll('.cat-card').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  renderCakes();
}

// ── PRICE FILTER ──
function setPriceFilter(val, el){
  activePriceFilter = val;
  document.querySelectorAll('#filterPills .pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  renderCakes();
}

// ── CART ──
function addToCart(id){
  const cake = CAKES.find(c=>c.id===id);
  const existing = cart.find(x=>x.id===id);
  if(existing) existing.qty++;
  else cart.push({id,qty:1,name:cake.name,price:cake.price,img:cake.img});
  saveCart();
  renderCakes();
  showToast(`${cake.name} added to cart 🎂`);
}
function removeFromCart(id){
  cart = cart.filter(x=>x.id!==id);
  saveCart();
  renderCart();
  renderCakes();
}
function changeQty(id,delta){
  const item = cart.find(x=>x.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(x=>x.id!==id);
  saveCart();
  renderCart();
  renderCakes();
}
function saveCart(){
  localStorage.setItem('tch_cart',JSON.stringify(cart));
  const total = cart.reduce((s,x)=>s+x.qty,0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.style.display = total?'flex':'none';
}
function renderCart(){
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if(!cart.length){
    el.innerHTML='<div class="empty-cart"><i class="fa-solid fa-bag-shopping"></i><p>Your cart is empty</p></div>';
    footer.style.display='none';return;
  }
  const total = cart.reduce((s,x)=>s+x.price*x.qty,0);
  el.innerHTML = cart.map(x=>`<div class="cart-item">
    <img src="${x.img}" alt="${x.name}" onerror="this.src='https://placehold.co/70x70/f2dada/7d3d52?text=🎂'"/>
    <div class="cart-item-info">
      <strong>${x.name}</strong>
      <span>₹${x.price}</span>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="changeQty(${x.id},-1)">−</button>
        <span class="qty-val">${x.qty}</span>
        <button class="qty-btn" onclick="changeQty(${x.id},1)">+</button>
      </div>
    </div>
    <button class="remove-item" onclick="removeFromCart(${x.id})"><i class="fa-solid fa-trash"></i></button>
  </div>`).join('');
  document.getElementById('cartTotal').textContent = '₹'+total;
  footer.style.display='block';
}

// ── WISHLIST ──
function toggleWishItem(id){
  const cake = CAKES.find(c=>c.id===id);
  if(wishlist.includes(id)){
    wishlist = wishlist.filter(x=>x!==id);
    showToast(`Removed from wishlist`);
  } else {
    wishlist.push(id);
    showToast(`${cake.name} saved to wishlist ♥`);
  }
  localStorage.setItem('tch_wish',JSON.stringify(wishlist));
  const badge = document.getElementById('wishBadge');
  badge.textContent = wishlist.length;
  badge.style.display = wishlist.length?'flex':'none';
  renderCakes();
  renderWishlist();
}
function renderWishlist(){
  const el = document.getElementById('wishlistItems');
  const items = CAKES.filter(c=>wishlist.includes(c.id));
  if(!items.length){
    el.innerHTML='<div class="empty-cart"><i class="fa-regular fa-heart"></i><p>No items in wishlist yet</p></div>';return;
  }
  el.innerHTML = items.map(c=>`<div class="cart-item">
    <img src="${c.img}" alt="${c.name}" onerror="this.src='https://placehold.co/70x70/f2dada/7d3d52?text=🎂'"/>
    <div class="cart-item-info">
      <strong>${c.name}</strong>
      <span>₹${c.price}</span>
      <div style="margin-top:8px"><button class="add-btn" onclick="addToCart(${c.id});toggleWishlist()">Add to Cart</button></div>
    </div>
    <button class="remove-item" onclick="toggleWishItem(${c.id})"><i class="fa-solid fa-xmark"></i></button>
  </div>`).join('');
}

// ── SIDEBARS ──
function toggleCart(){
  renderCart();
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.getElementById('overlay').classList.toggle('open');
}
function toggleWishlist(){
  renderWishlist();
  document.getElementById('wishlistSidebar').classList.toggle('open');
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('overlay').classList.toggle('open');
}
function closeAll(){
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

// ── TOAST ──
function showToast(msg){
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}

// ── WHATSAPP ORDER ──
function whatsappOrder(){
  const phone = '919740051706';
  if(!cart.length){ showToast('Your cart is empty!'); return; }
  const itemLines = cart.map(x=>`  • ${x.name} x${x.qty} = ₹${x.price*x.qty}`).join('%0A');
  const total = cart.reduce((s,x)=>s+x.price*x.qty,0);
  const cakeNames = [...new Set(cart.map(x=>x.name))].join(', ');
  const msg = `Hi%2C I would like to order from The Cake House! 🎂%0A%0A*My Order:*%0A${itemLines}%0A%0A*Order Total: ₹${total}*%0A%0AI'd like to order: ${encodeURIComponent(cakeNames)}%0A%0APlease confirm availability and delivery details. Thank you! 🙏`;
  window.open(`https://wa.me/${phone}?text=${msg}`,'_blank');
}
function sendWhatsApp(){
  // ✏️ REPLACE with your WhatsApp number
  const phone = '919740051706';
  window.open(`https://wa.me/${phone}?text=Hi!%20I%20would%20like%20to%20place%20a%20custom%20cake%20order%20with%20The%20Cake%20House.`,'_blank');
}

// ── INIT ──
saveCart();
const wb = document.getElementById('wishBadge');
wb.textContent = wishlist.length;
wb.style.display = wishlist.length?'flex':'none';
renderCakes();



