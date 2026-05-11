import { notFound } from 'next/navigation';
import apiClient from '@/lib/axios';
import { Product } from '@/types/product';
import Image from 'next/image';

async function getProduct(
    handle: string
): Promise<Product | null> {
    try {
        const response = await apiClient.get(
            `/api/v1/products/${handle}`
        );
        return response.data;
    } catch (error) {
        console.error(
            'Lỗi lấy product detail:',
            error
        );
        return null;
    }
}

export default async function ProductDetailPage({ params, }: { params: Promise<{ handle: string }>; }) {
    const { handle } = await params;
    console.log('HANDLE:', handle);
    const product = await getProduct(handle);
    if (!product) {
        notFound();
    }
    const mainImage = product.images?.[0];
    const price = product.variants?.[0]?.price || 0;
    const formatPrice = (value: number) =>
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);
    return (
        <main className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* IMAGE */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden border bg-white">
                            {mainImage?.src ? (
                                <Image
                                    src={mainImage.src}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-6"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                                    No Image
                                </div>
                            )}
                        </div>
                        {/* INFO */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
                                {product.title}
                            </h1>
                            <div className="text-4xl font-extrabold text-red-600 mb-8">
                                {formatPrice(price)}
                            </div>
                            {/* SPECS */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="rounded-xl border p-4 bg-gray-50">
                                    <p className="text-sm text-gray-500 mb-1">
                                        CPU
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {product.hl_cpu || 'Đang cập nhật'}
                                    </p>
                                </div>

                                <div className="rounded-xl border p-4 bg-gray-50">
                                    <p className="text-sm text-gray-500 mb-1">
                                        RAM
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {product.hl_ram || 'Đang cập nhật'}
                                    </p>
                                </div>

                                <div className="rounded-xl border p-4 bg-gray-50">
                                    <p className="text-sm text-gray-500 mb-1">
                                        SSD
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {product.hl_ssd || 'Đang cập nhật'}
                                    </p>
                                </div>

                                <div className="rounded-xl border p-4 bg-gray-50">
                                    <p className="text-sm text-gray-500 mb-1">
                                        VGA
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {product.hl_vga || 'Đang cập nhật'}
                                    </p>
                                </div>

                                <div className="rounded-xl border p-4 bg-gray-50">
                                    <p className="text-sm text-gray-500 mb-1">
                                        Màn hình
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {product.hl_lcd || 'Đang cập nhật'}
                                    </p>
                                </div>

                                <div className="rounded-xl border p-4 bg-gray-50">
                                    <p className="text-sm text-gray-500 mb-1">
                                        Tần số quét
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {product.hl_hz || 'Đang cập nhật'}
                                    </p>
                                </div>

                                <div className="rounded-xl border p-4 bg-gray-50">
                                    <p className="text-sm text-gray-500 mb-1">
                                        Khối lượng
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {product.hl_weight || 'Đang cập nhật'}
                                    </p>
                                </div>

                                <div className="rounded-xl border p-4 bg-gray-50">
                                    <p className="text-sm text-gray-500 mb-1">
                                        Bảo hành
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {product.warranty_months} tháng
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* DESCRIPTION */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Mô tả sản phẩm
                        </h2>
                        <div
                            className="prose max-w-none text-gray-700"
                            dangerouslySetInnerHTML={{
                                __html: product.description || '<p>Chưa có mô tả</p>',
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}