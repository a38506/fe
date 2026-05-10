import Image from 'next/image';
import {ShieldCheck, RefreshCcw, Truck, Headset} from 'lucide-react';
import {FaFacebook, FaYoutube, FaInstagram} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 text-slate-600">
            <div className="border-b bg-slate-50/50">
                <div
                    className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                            <ShieldCheck size={28}/>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">Sản phẩm chính hãng</h4>
                            <p className="text-xs text-slate-500">Cam kết chất lượng 100%</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                            <RefreshCcw size={28}/>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">Đổi trả 30 ngày</h4>
                            <p className="text-xs text-slate-500">Lỗi là đổi mới tận nơi</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                            <Truck size={28}/>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">Giao hàng hỏa tốc</h4>
                            <p className="text-xs text-slate-500">Nhận hàng trong 2 giờ</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                            <Headset size={28}/>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">Hỗ trợ 24/7</h4>
                            <p className="text-xs text-slate-500">Tư vấn giải đáp mọi lúc</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Cột 1: Thông tin thương hiệu */}
                <div className="space-y-6">
                    <div className="relative w-[140px] h-[35px]">
                        <Image
                            src="https://reseller1.hn.ss.bfcplatform.vn/logo-lapify-4x1.jfif"
                            alt="Lapify Footer Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-sm leading-relaxed">
                        Lapify - Hệ thống bán lẻ laptop hàng đầu Việt Nam, mang đến trải nghiệm công nghệ vượt trội cho
                        mọi người.
                    </p>
                    <div className="flex items-center gap-4">
                        <div
                            className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                            <FaFacebook size={18}/>
                        </div>
                        <div
                            className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                            <FaYoutube size={18}/>
                        </div>
                        <div
                            className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors cursor-pointer">
                            <FaInstagram size={18}/>
                        </div>
                    </div>
                </div>

                {/* Cột 2: Chính sách */}
                <div>
                    <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Thông tin chính
                        sách</h4>
                    <ul className="text-[13px] space-y-3 font-medium">
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">Chính sách bảo hành</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">Chính sách thanh toán</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">Giao hàng & Lắp đặt</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">Bảo mật thông tin</li>
                    </ul>
                </div>

                {/* Cột 3: Liên hệ */}
                <div>
                    <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Tổng đài hỗ trợ</h4>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-slate-400 uppercase">Mua hàng online</span>
                            <span className="text-lg font-black text-blue-600">1800.xxxx</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-slate-400 uppercase">Khiếu nại & Bảo hành</span>
                            <span className="text-lg font-black text-blue-600">1800.xxxx</span>
                        </div>
                    </div>
                </div>

                {/* Cột 4: Chứng nhận & Thanh toán */}
                <div>
                    <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Thanh toán & Chứng
                        nhận</h4>

                    {/* List icon thanh toán */}
                    <div className="flex flex-wrap gap-2">
                        <div className="relative w-[50px] h-[30px] border border-slate-200 rounded overflow-hidden">
                            <Image src="https://theme.hstatic.net/200000722513/1001090675/14/pay_7.png?v=11102"
                                   alt="Visa" fill className="object-contain p-1"/>
                        </div>
                        <div className="relative w-[50px] h-[30px] border border-slate-200 rounded overflow-hidden">
                            <Image src="https://theme.hstatic.net/200000722513/1001090675/14/pay_1.png?v=11102"
                                   alt="Banking" fill className="object-contain p-1"/>
                        </div>
                        <div className="relative w-[50px] h-[30px] border border-slate-200 rounded overflow-hidden">
                            <Image src="https://theme.hstatic.net/200000722513/1001090675/14/pay_5.png?v=11102"
                                   alt="Tiền mặt" fill className="object-contain p-1"/>
                        </div>
                    </div>

                    {/* Icon Bộ Công Thương */}
                    <div className="mt-6 relative w-[130px] h-[45px]">
                        <Image
                            src="https://theme.hstatic.net/200000722513/1001090675/14/logo-bct.png?v=11102"
                            alt="Đã thông báo Bộ Công Thương"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 border-t border-slate-200 py-6">
                <div
                    className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-slate-500 font-medium">
                    <p>© 2026 Lapify. Bản quyền thuộc về Công ty Lapify.</p>
                    <div className="flex items-center gap-6">
                        <span className="hover:text-blue-600 cursor-pointer">Điều khoản dịch vụ</span>
                        <span className="hover:text-blue-600 cursor-pointer">Sơ đồ trang web</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}