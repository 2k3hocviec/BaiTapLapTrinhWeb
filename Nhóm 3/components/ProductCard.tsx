interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 bg-gray-100 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">New Arrival</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.title}
        </h3>
        <p className="text-2xl font-bold text-red-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}
