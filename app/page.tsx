import {getBanners} from '@/services/banner';
import {getBrands, getCategories, getProducts} from '@/services/product';
import HeroSection from "@/components/home/HeroSection";
import BrandSection from "@/components/home/BrandSection";
import HomePopup from "@/components/home/HomePopup";
import VerticalBanners from "@/components/home/VerticalBanners";
import ProductCard from "@/components/product/ProductCard";
import {Badge} from "@/components/ui/badge";
import Link from 'next/link';
import {ChevronRight} from "lucide-react";

export default async function HomePage() {
    const [banners, categories, brands, productsData] = await Promise.all([
        getBanners(),
        getCategories(),
        getBrands(),
        getProducts(0, 50)
    ]);

    const leftBanner = banners.find(b => b.position === 'VERTICAL_LEFT' && b.is_active);
    const rightBanner = banners.find(b => b.position === 'VERTICAL_RIGHT' && b.is_active);
    const popupBanner = banners.find(b => b.position === 'POPUP' && b.is_active);

    const products = productsData.products || [];

    return (
        <main className="relative min-h-screen pb-12 bg-gray-50">
            <HomePopup banner={popupBanner}/>
            <VerticalBanners left={leftBanner} right={rightBanner}/>

            <div className="container mx-auto px-4 py-6 space-y-8">
                <HeroSection banners={banners}/>
                <BrandSection brands={brands}/>

                {categories.map((category) => {
                    const categoryProducts = products
                        .filter(p => p.category_id === category.category_id)
                        .slice(0, 10);

                    if (categoryProducts.length === 0) return null;

                    return (
                        <section key={category.category_id}
                                 className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 uppercase tracking-tight">
                                        {category.name}
                                    </h2>
                                    <Badge className="bg-red-500 shadow-sm hidden md:flex">Mới về</Badge>
                                </div>
                                <Link href={`/category/${category.handle}`}
                                      className="group flex items-center text-sm font-bold text-blue-600">
                                    Xem tất cả <ChevronRight size={16}
                                                             className="group-hover:translate-x-1 transition-transform"/>
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                                {categoryProducts.map((product) => (
                                    <ProductCard key={product.product_id} product={product}/>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </main>
    );
}