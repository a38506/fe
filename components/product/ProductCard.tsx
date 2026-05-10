import Image from 'next/image';
import Link from 'next/link';
import {Product} from '@/types/product';
import {Cpu, MemoryStick, HardDrive, Monitor} from 'lucide-react';

export default function ProductCard({product}: { product: Product }) {
    const mainImage = product.images.find(img => img.position === 1) || product.images[0];

    const minPrice = product.variants.length > 0
        ? Math.min(...product.variants.map(v => v.price))
        : 0;

    const variantWithMinPrice = product.variants.find(v => v.price === minPrice);
    const comparePrice = variantWithMinPrice?.compare_at_price || 0;

    const discountPercent = (comparePrice > minPrice)
        ? Math.round(((comparePrice - minPrice) / comparePrice) * 100)
        : 0;

    const formatPrice = (price: number) => new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);

    return (
        <Link
            href={`/product/${product.handle}`}
            className="group flex flex-col bg-white rounded-xl border border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 p-3 md:p-4 h-full relative"
        >
            {discountPercent > 0 && (
                <div
                    className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                    Giảm {discountPercent}%
                </div>
            )}

            <div className="relative w-full aspect-square bg-white rounded-lg mb-4 overflow-hidden">
                {mainImage ? (
                    <Image
                        src={mainImage.src}
                        alt={product.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div
                        className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs">No
                        Image</div>
                )}
            </div>

            <div className="flex flex-col flex-1">
                <h3 className="font-bold text-sm md:text-[15px] text-gray-800 line-clamp-2 mb-3 group-hover:text-blue-600 transition-colors"
                    title={product.title}>
                    {product.title}
                </h3>

                <div className="grid grid-cols-2 gap-1.5 mb-4 mt-auto">
                    {product.hl_cpu && (
                        <div
                            className="text-[10px] md:text-[11px] text-slate-600 bg-slate-50 p-1.5 rounded border border-slate-100 flex items-center gap-1.5">
                            <Cpu size={12} className="text-slate-400 shrink-0"/> <span
                            className="truncate">{product.hl_cpu}</span>
                        </div>
                    )}
                    {product.hl_ram && (
                        <div
                            className="text-[10px] md:text-[11px] text-slate-600 bg-slate-50 p-1.5 rounded border border-slate-100 flex items-center gap-1.5">
                            <MemoryStick size={12} className="text-slate-400 shrink-0"/> <span
                            className="truncate">{product.hl_ram}</span>
                        </div>
                    )}
                    {product.hl_ssd && (
                        <div
                            className="text-[10px] md:text-[11px] text-slate-600 bg-slate-50 p-1.5 rounded border border-slate-100 flex items-center gap-1.5">
                            <HardDrive size={12} className="text-slate-400 shrink-0"/> <span
                            className="truncate">{product.hl_ssd}</span>
                        </div>
                    )}
                    {product.hl_lcd && (
                        <div
                            className="text-[10px] md:text-[11px] text-slate-600 bg-slate-50 p-1.5 rounded border border-slate-100 flex items-center gap-1.5">
                            <Monitor size={12} className="text-slate-400 shrink-0"/> <span
                            className="truncate">{product.hl_lcd}</span>
                        </div>
                    )}
                </div>

                <div className="mt-auto flex flex-col">
                    {comparePrice > minPrice && (
                        <span className="text-xs text-slate-400 line-through mb-0.5">{formatPrice(comparePrice)}</span>
                    )}
                    <span className="font-extrabold text-red-600 text-base md:text-lg">
                        {minPrice > 0 ? formatPrice(minPrice) : 'Liên hệ'}
                    </span>
                </div>
            </div>
        </Link>
    );
}