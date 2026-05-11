'use client';

import Image from 'next/image';

import {
    Trash2,
    Plus,
    Minus
} from 'lucide-react';

import {
    CartItem
} from '@/types/cart';

interface Props {

    item: CartItem;

    onIncrease: () => void;

    onDecrease: () => void;

    onRemove: () => void;
}

export default function CartItemCard({

    item,
    onIncrease,
    onDecrease,
    onRemove,

}: Props) {

    return (

        <div className="flex gap-4 border rounded-2xl p-4 bg-white">

            <div className="relative w-28 h-28 rounded-xl overflow-hidden border">

                {item.image ? (

                    <Image
                        src={item.image}
                        alt={item.product_title || ''}
                        fill
                        className="object-cover"
                    />

                ) : (

                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                    </div>

                )}

            </div>

            <div className="flex-1">

                <h2 className="font-bold text-lg">
                    {item.product_title}
                </h2>

                <p className="text-red-500 font-bold mt-2">
                    {item.price?.toLocaleString()}₫
                </p>

                <div className="flex items-center gap-3 mt-4">

                    <button
                        onClick={onDecrease}
                        className="border rounded-lg p-2"
                    >
                        <Minus size={16} />
                    </button>

                    <span className="font-semibold">
                        {item.quantity}
                    </span>

                    <button
                        onClick={onIncrease}
                        className="border rounded-lg p-2"
                    >
                        <Plus size={16} />
                    </button>

                </div>

            </div>

            <button
                onClick={onRemove}
                className="text-red-500"
            >
                <Trash2 />
            </button>

        </div>
    );
}