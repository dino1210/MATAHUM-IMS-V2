function App() {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-blue-950 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold"></h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
              <li><a href="#products" className="hover:text-gray-300">Products</a></li>
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

{/* Hero Section */}
<section 
  id="hero" 
  className="bg-cover bg-center h-screen flex items-center justify-center text-center p-6" 
  style={{
    backgroundImage: "url('/src/images/bg-img.jpeg')", // Add your image path here
    backgroundPosition: "center",
    backgroundSize: "cover"
  }}
>
  <div className="bg-black bg-opacity-80 p-6 rounded-lg max-w-sm">
    <h2 className="text-4xl font-bold text-white mb-4">Matahum Rice Retailing Store</h2>
    <p className="text-xl text-white mb-6"></p>
    <a 
      href="#contact" 
      className="bg-blue-950 text-white py-2 px-6 rounded-full hover:bg-blue-800 transition duration-300"
    >
      Contact Us
    </a>
  </div>
</section>

      {/* Products Section */}

      <section id="products" className="py-16 bg-white">
  <div className="container mx-auto text-center">
    <h3 className="text-5xl font-bold">Our Rice Products</h3>
    <p className="mb-16 text-xs"><i>the price is based on a per-kilo rate.</i></p>

    {/* Ordinary Rice */}
    <div className="mb-16">
      <h4 className="text-4xl text-left ml-10 font-semibold mb-6">Ordinary Rice</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
        {[
          {
            id: 1,
            name: "Cherry Tree",
            price: "₱50",
            image: "/src/images/[Cherry Tree] [Ordinary Rice] [5 Kilo Sack].png",
            description: "This rice does not clump up when cooked.",
            origin: "Local", // Add origin field
          },
          {
            id: 2,
            name: "Green Mango",
            price: "₱42",
            image: "/src/images/[Green Mango] [Ordinary Rice] [25 Kilos].png",
            description: "This rice does not clump up when cooked.",
            origin: "Local", // Add origin field
          },
          {
            id: 3,
            name: "Aromatic Broken Rice",
            price: "₱48",
            image: "/src/images/[Aromatic Broken Rice] [Ordinary Rice] [25 Kilos].png",
            description: "This rice is soft and sticky.",
            origin: "Local", // Add origin field
          },
        ].map((product) => (
          <div
            key={product.id}
            className="relative flex items-center justify-between group bg-white p-4 rounded-lg shadow-lg transition-all hover:bg-blue-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 ml-3 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start ml-6">
              <h5 className="text-lg font-semibold mr-10">{product.name}</h5>
              <p className="text-sm text-gray-500">{product.price}</p>
            </div>

            {/* Origin label */}
            <div className="absolute bottom-2 right-2 bg-blue-950 text-white text-xs font-extralight px-3 py-1 rounded-full shadow-sm">
              {product.origin}
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-blue-950 bg-opacity-70 flex justify-center items-center rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


    {/* Fancy Rice */}
    <div className="mb-12">
      <h4 className="text-4xl font-semibold text-left ml-10 mb-6">Fancy Rice</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
        {[
          {
            id: 4,
            name: "Golden Rice",
            price: "₱57",
            image: "/src/images/[Golden Rice] [Fancy Rice] [5 Kilo Sack].png",
            description: "This rice is soft and sticky.",
            origin: "Imported",
          },
          {
            id: 5,
            name: "Panda Rice",
            price: "₱59",
            image: "/src/images/[Panda Rice] [Fancy Rice] [5 Kilo Sack].png",
            description: "This rice is soft and sticky.",
            origin: "Imported",
          },
          {
            id: 6,
            name: "Jasmine Fragrant",
            price: "₱60",
            image: "/src/images/[Jasmine Fragrant] [Fancy Rice] [25 Kilo Sack].png",
            description: "This rice is soft and sticky.",
            origin: "Imported",
          },
          {
            id: 7,
            name: "Super Sarap",
            price: "₱60",
            image: "/src/images/[Super Sarap] [Fancy Rice] [5 Kilo Sack].png",
            description: "Perfect for all your special events.",
            origin: "Local",
          },
          {
            id: 8,
            name: "Pinoy Rice",
            price: "₱55",
            image: "/src/images/[Pinoy Rice] [Fancy Rice] [5 Kilo Sack].png",
            description: "Great for every Filipino meal.",
            origin: "Imported",
          },
          {
            id: 9,
            name: "Senador",
            price: "₱60",
            image: "/src/images/[Senador] [Fancy Rice] [10 Kilos].png",
            description: "Perfect for long-lasting meals.",
            origin: "Local",
          },
          {
            id: 10,
            name: "Jasmine Denorado",
            price: "₱62",
            image: "/src/images/[Jasmine Denorado] [Fancy Rice] [10 Kilo Sack].png",
            description: "Perfect for long-lasting meals.",
            origin: "Imported",
          },
          {
            id: 11,
            name: "Coco Pandan",
            price: "₱58",
            image: "/src/images/[Cocopandan] [Fancy Rice] [25 Kilos].png",
            description: "This rice is soft and sticky.",
            origin: "Local",
          },
          {
            id: 12,
            name: "Del's Denorado",
            price: "₱64",
            image: "/src/images/[Del\'s Denorado] [Fancy Rice] [25 Kilos].png",
            description: "This rice is soft and sticky and has a fragrant smell.",
            origin: "Local",
          },
          {
            id: 13,
            name: "Wonder",
            price: "₱57",
            image: "/src/images/[Wonder] [Fancy Rice] [25 Kilos].png",
            description: "A mildly soft rice.",
            origin: "Local",
          },
          {
            id: 14,
            name: "Mi Favorito",
            price: "₱54",
            image: "/src/images/[Mi Favorito] [Fancy Rice] [25 Kilos].png",
            description: "This rice has just the right softness and does not clump together.",
            origin: "Local",
          },
          {
            id: 15,
            name: "Royal Sheep",
            price: "₱60",
            image: "/src/images/[Royal Sheep] [Fancy Rice] [25 Kilos].png",
            description: "Perfect for long-lasting meals.",
            origin: "Imported",
          },
          {
            id: 16,
            name: "Bachelor",
            price: "₱60",
            image: "/src/images/[Bachelor] [Fancy Rice] [25 Kilos].png",
            description: "This is perfect for fried rice.",
            origin: "Imported",
          },
          {
            id: 17,
            name: "Yellow Magic Castle",
            price: "₱60",
            image: "/src/images/[Yellow Magic Castle] [Fancy Rice] [25 Kilos].png",
            description: "Perfect for long-lasting meals.",
            origin: "Imported",
          },
          {
            id: 18,
            name: "Buddha",
            price: "₱58",
            image: "/src/images/[Buddha] [Fancy Rice] [25 Kilos].png",
            description: "Soft when freshly cooked but can be used for sinagag	.",
            origin: "Local",
          },
          {
            id: 19,
            name: "Ifugao",
            price: "₱68",
            image: "/src/images/[Ifugao] [Fancy Rice] [25 Kilos].png",
            description: "Perfect for long-lasting meals.",
            origin: "Local",
          },
          {
            id: 20,
            name: "Kokuyu",
            price: "₱68",
            image: "/src/images/[Kokuyu] [Fancy Rice] [25 Kilos].png",
            description: "A mildly soft rice.",
            origin: "Local",
          },
        ].map((product) => (
          <div
            key={product.id}
            className="relative flex items-center justify-between group bg-white p-4 rounded-lg shadow-lg transition-all hover:bg-blue-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 ml-3 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start ml-6">
              <h5 className="text-lg font-semibold mr-10">{product.name}</h5>
              <p className="text-sm text-gray-500">{product.price}</p>
            </div>

            {/* Origin label */}
            <div className="absolute bottom-2 right-2 bg-blue-950 text-white text-xs font-extralight px-3 py-1 rounded-full shadow-sm">
              {product.origin}
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-blue-950 bg-opacity-70 flex justify-center items-center rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Special Rice */}
    <div>
      <h4 className="text-4xl font-semibold text-left ml-10 mb-6">Special Rice</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
        {[
          {
            id: 21,
            name: "Dona Bee",
            price: "₱85",
            image: "/src/images/[Dona Bee] [Special Rice Red  Rice] [25 Kilo Sack].png",
            description: "This is rice with less glucose than white rice.",
            origin: "Local",
          },
          {
            id: 22,
            name: "Sakura",
            price: "₱65",
            image: "/src/images/[Sakura] [Special Rice Japanese Rice] [25 Kilo Sack].png",
            description: "Good for sushis or spam musubis, sticky.",
            origin: "Local",
          },
          {
            id: 23,
            name: "Bee Hive",
            price: "₱70",
            image: "/src/images/[Bee Hive] [Special Rice Brown Rice] [25 Kilo Sack].png",
            description: "Brown rice, rich in fiber and taste.",
            origin: "Local",
          },
        ].map((product) => (
          <div
            key={product.id}
            className="relative flex items-center justify-between group bg-white p-4 rounded-lg shadow-lg transition-all hover:bg-blue-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 ml-3 object-cover rounded-lg"
            />
            <div className="flex flex-col items-start ml-6">
              <h5 className="text-lg font-semibold mr-10">{product.name}</h5>
              <p className="text-sm text-gray-500">{product.price}</p>
            </div>

            {/* Origin label */}
            <div className="absolute bottom-2 right-2 bg-blue-950 text-white text-xs font-extralight px-3 py-1 rounded-full shadow-sm">
              {product.origin}
            </div>

            {/* Hover Description */}
            <div className="absolute inset-0 bg-blue-950 bg-opacity-70 flex justify-center items-center rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16">
  <div className="container mx-auto text-center px-6">
    <h3 className="text-3xl font-semibold mb-6 text-gray-800">About Us</h3>
    <p className="text-md max-w-3xl mx-auto text-gray-700 mb-8">
      At <strong>Matahum Store</strong>, we are dedicated to providing the finest quality rice to meet the diverse needs of our customers. With years of experience in the rice retailing industry, we take pride in offering a wide selection of premium rice varieties sourced from trusted farms and suppliers.
    </p>
    <p className="text-md max-w-3xl mx-auto text-gray-700 mb-8">
      Our mission is to provide rice that not only meets but exceeds our customers' expectations. Whether you're a small household or a larger establishment, we ensure that our rice products are fresh, consistent, and delivered with the highest level of care and service.
    </p>
    <h4 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us?</h4>
    <ul className="text-md max-w-3xl mx-auto list-none list-inside  text-gray-700">
      <li>Premium Quality: Handpicked rice from the best producers, ensuring top-notch quality.</li>
      <li>Affordable Prices: Great value with competitive prices without compromising quality.</li>
      <li>Fast and Reliable Delivery: Dependable delivery services to ensure your rice is always in stock.</li>
      <li>Commitment to Sustainability: Supporting responsible farming practices and local farmers.</li>
    </ul>
    <p className="text-md max-w-3xl mx-auto text-gray-700 mt-8">
      Whether you're stocking up for your family, your restaurant, or a business, we have the right rice for you. At <strong>Matahum Store</strong>, we go the extra mile to ensure you get the best rice delivered to your door, every time.
    </p>
    <h4 className="text-2xl font-semibold mt-8 text-gray-800">Our Vision</h4>
    <p className="text-md max-w-3xl mx-auto text-gray-700 mt-4">
      To be the leading rice retailer that families and businesses trust for their daily needs, providing exceptional service, quality products, and a commitment to customer satisfaction.
    </p>
  </div>
</section>


     {/* Contact Section */}
<section id="contact" className="py-16 bg-gray-100">
  <div className="container mx-auto text-center">
    <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
    
    {/* Contact Information */}
    <div className="mb-8">
      <p className="text-lg font-medium">For inquiries, reach us at:</p>
      <p className="text-lg mb-4">
        <strong>Phone:</strong> 09358762356
      </p>
      <p className="text-lg mb-4">
        or Send Us an Email
      </p>
    </div>

    {/* Contact Form */}
    <form className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-left mb-2">Your Name</label>
        <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-left mb-2">Your Email</label>
        <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-left mb-2">Message</label>
        <textarea id="message" className="w-full p-3 border border-gray-300 rounded-lg" required></textarea>
      </div>
      <button type="submit" className="bg-blue-950 text-white py-2 px-6 rounded-full hover:bg-blue-800 transition duration-300">
        Send Message
      </button>
    </form>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto text-center">
    <p className="text-lg">Visit us at:</p>
    <address className="text-lg font-medium">
      24 Lakandula, Project 4, Lungsod Quezon, Kalakhang Maynila
    </address>
    <p className="text-sm mt-1">© 2024 Matahum Rice Retailing Store. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}

export default App;
