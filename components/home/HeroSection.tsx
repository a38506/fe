'use client';

import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import {Banner} from '@/types/banner';

interface HeroSectionProps {
    banners: Banner[];
}

export default function HeroSection({banners}: HeroSectionProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const promoBanners = banners.filter(b => b.position.startsWith('PROMO_') && b.is_active);
    const sub1 = banners.find(b => b.position === 'SUB_1' && b.is_active);
    const sub2 = banners.find(b => b.position === 'SUB_2' && b.is_active);
    const subBottom = banners.filter(b => ['SUB_3', 'SUB_4', 'SUB_5'].includes(b.position) && b.is_active);

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    return (
        <section className="flex flex-col gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-sm">
                    {promoBanners.length > 0 ? (
                        <Carousel
                            setApi={setApi}
                            className="w-full h-full group"
                            plugins={[Autoplay({delay: 4000, stopOnInteraction: false})]}
                            opts={{loop: true}}
                        >
                            <CarouselContent>
                                {promoBanners.map((banner) => (
                                    <CarouselItem key={banner.banner_id}>
                                        <Link href={banner.link_url}
                                              className="relative block aspect-[21/9] lg:aspect-[16/7] w-full bg-slate-200">
                                            {/* Thêm object-cover để không bị méo */}
                                            <Image src={banner.image_url} alt={banner.name} fill
                                                   />
                                        </Link>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious
                                className="left-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-gray-700 shadow-md cursor-pointer border-none opacity-0 group-hover:opacity-100 transition-opacity"/>
                            <CarouselNext
                                className="right-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-gray-700 shadow-md cursor-pointer border-none opacity-0 group-hover:opacity-100 transition-opacity"/>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {Array.from({length: count}).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => api?.scrollTo(index)}
                                        className={`cursor-pointer h-2.5 rounded-full transition-all duration-300 ${index === current ? "bg-blue-600 w-8" : "bg-white/70 hover:bg-white w-2.5"}`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </Carousel>
                    ) : (
                        <div
                            className="aspect-[21/9] lg:aspect-[16/7] w-full bg-slate-100 flex items-center justify-center text-gray-400 rounded-2xl">
                            Không có banner
                        </div>
                    )}
                </div>

                <div className="hidden lg:flex flex-col gap-4">
                    {sub1 && (
                        <Link href={sub1.link_url}
                              className="relative flex-1 rounded-2xl overflow-hidden shadow-sm bg-slate-200 hover:opacity-95 transition-opacity">
                            <Image src={sub1.image_url} alt={sub1.name} fill />
                        </Link>
                    )}
                    {sub2 && (
                        <Link href={sub2.link_url}
                              className="relative flex-1 rounded-2xl overflow-hidden shadow-sm bg-slate-200 hover:opacity-95 transition-opacity">
                            <Image src={sub2.image_url} alt={sub2.name} fill />
                        </Link>
                    )}
                </div>
            </div>

            {subBottom.length > 0 && (
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
                    {subBottom.map(banner => (
                        <Link key={banner.banner_id} href={banner.link_url}
                              className="relative aspect-[21/9] md:aspect-[16/7] w-full rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <Image src={banner.image_url} alt={banner.name} fill />
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}