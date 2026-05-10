import Link from 'next/link';

interface Brand {
    name: string;
    brand_id: number;
}

export default function BrandSection({brands}: { brands: Brand[] }) {
    return (
        <section className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight">Thương hiệu nổi bật</h2>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
                {brands.map((brand) => (
                    <Link
                        key={brand.brand_id}
                        href={`/products?brand=${brand.name.toLowerCase()}`}
                        className="group h-12 md:h-14 bg-white border border-gray-200 hover:border-blue-500 hover:shadow-md hover:-translate-y-1 rounded-xl flex items-center justify-center transition-all duration-300"
                    >
                        <span className="font-bold text-gray-600 group-hover:text-blue-600 transition-colors">
                            {brand.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}