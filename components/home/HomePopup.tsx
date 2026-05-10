'use client';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {X} from "lucide-react";

export default function HomePopup({banner}: { banner: any }) {
    const [show, setShow] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        if (banner && !isClosed) {
            const timer = setTimeout(() => setShow(true), 1000);
            return () => clearTimeout(timer);
        }
    }, [banner, isClosed]);

    if (!show || !banner) return null;

    const handleClose = () => {
        setShow(false);
        setIsClosed(true);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative max-w-[500px] w-full animate-in zoom-in-95 duration-300">
                <button onClick={handleClose} className="absolute -top-12 right-0 text-white cursor-pointer"><X
                    size={32}/></button>
                <Link href={banner.link_url} onClick={handleClose} className="block overflow-hidden rounded-2xl">
                    <Image src={banner.image_url} alt={banner.name} width={500} height={700} className="w-full h-auto"/>
                </Link>
            </div>
        </div>
    );
}