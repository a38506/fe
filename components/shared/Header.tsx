'use client';
import {Search, ShoppingCart, User, Phone, MapPin, Truck} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="bg-slate-50 border-b hidden md:block">
                <div
                    className="container mx-auto px-4 h-8 flex items-center justify-between text-[12px] text-slate-500 font-medium">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer">
                          <Phone size={14}/> Hotline: 1800.xxxx (Miễn phí)
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer">
                          <MapPin size={14}/> Hệ thống 10 cửa hàng
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="hover:text-blue-600 cursor-pointer">Tin công nghệ</span>
                        <span className="hover:text-blue-600 cursor-pointer flex items-center gap-1.5">
                           <Truck size={14}/> Tra cứu đơn hàng
                        </span>
                    </div>
                </div>
            </div>

            <div className="border-b bg-white/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-4 md:gap-8">
                    <Link href="/" className="relative flex-shrink-0">
                        <div className="hidden md:block w-[160px] h-[40px] relative">
                            <Image
                                src="https://reseller1.hn.ss.bfcplatform.vn/logo-lapify-4x1.jfif"
                                alt="Lapify Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="md:hidden w-[45px] h-[45px] relative">
                            <Image
                                src="https://reseller1.hn.ss.bfcplatform.vn/logo-lapify.png"
                                alt="Lapify Logo Mobile"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    <div className="flex-1 max-w-2xl relative group">
                        <input
                            type="text"
                            placeholder="Bạn muốn tìm Laptop Gaming, Văn phòng...?"
                            className="w-full h-11 pl-4 pr-12 rounded-lg border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all text-sm"
                        />
                        <button
                            className="absolute right-0 top-0 h-11 w-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors cursor-pointer">
                            <Search size={20}/>
                        </button>
                    </div>

                    <div className="flex items-center gap-1 md:gap-3">
                        <Link
                            href="/login"
                            className="hidden lg:flex flex-col h-12 px-4 justify-center gap-0.5 items-center rounded-md hover:bg-slate-100 hover:text-blue-600 text-slate-700 transition-colors"
                        >
                            <User size={22}/>
                            <span className="text-[11px] font-bold uppercase">Tài khoản</span>
                        </Link>

                        <Button variant="ghost"
                                className="relative flex flex-col h-12 gap-0.5 items-center hover:text-blue-600 px-2 md:px-4">
                            <div className="relative">
                                <ShoppingCart size={22}/>
                                <span
                                    className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold border-2 border-white">
                                    0
                                  </span>
                            </div>
                            <span className="text-[11px] font-bold uppercase hidden md:block">Giỏ hàng</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}