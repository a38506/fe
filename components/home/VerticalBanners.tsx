import Image from 'next/image';
import Link from 'next/link';

export default function VerticalBanners({left, right}: { left: any, right: any }) {
    return (
        <>
            {left && (
                <aside className="hidden xl:block fixed left-4 top-[130px] w-[140px] h-[500px] z-10">
                    <Link href={left.link_url}
                          className="relative block w-full h-full rounded-lg overflow-hidden shadow-md hover:opacity-95">
                        <Image src={left.image_url} alt={left.name} fill className="object-cover"/>
                    </Link>
                </aside>
            )}
            {right && (
                <aside className="hidden xl:block fixed right-4 top-[130px] w-[140px] h-[500px] z-10">
                    <Link href={right.link_url}
                          className="relative block w-full h-full rounded-lg overflow-hidden shadow-md hover:opacity-95">
                        <Image src={right.image_url} alt={right.name} fill className="object-cover"/>
                    </Link>
                </aside>
            )}
        </>
    );
}