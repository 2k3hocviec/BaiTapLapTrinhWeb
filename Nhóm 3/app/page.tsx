import ProductCard from "@/components/ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

// Function to select random product using Math.random()
function selectRandomProduct(items: Product[]): Product | null {
  if (items.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

export default async function Home() {
  let selectedProduct: Product | null = null;
  let error: string | null = null;

  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/mens-shirts",
      { cache: "no-store" }, // Ensure fresh data on each request
    );
    const data = await response.json();

    // Select random product using Math.random()
    selectedProduct = selectRandomProduct(data.products);
  } catch (err) {
    error = "Failed to fetch products";
    console.error(error, err);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error ? (
          <div className="flex justify-center items-center py-12">
            <p className="text-lg text-red-600">{error}</p>
          </div>
        ) : selectedProduct ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard product={selectedProduct} />
          </div>
        ) : (
          <div className="flex justify-center items-center py-12">
            <p className="text-lg text-gray-600">Không có sản phẩm</p>
          </div>
        )}
      </main>
    </div>
  );
}
