import React from 'react';
import { getCategories } from '@/services/category';
import { Category } from '@/types/category';
import Link from 'next/link';


function CategoryItem({ category }: { category: Category }) {
  return (
    <li className="border-b border-gray-100 last:border-none">
      <Link
        href={`/products?category=${category.category_id}`}
        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-700 transition"
      >
        {category.name}
      </Link>
    </li>
  );
}

// Sidebar
export default async function CategorySidebar() {
  const categories = await getCategories();

  return (
    <aside className="w-80 rounded-lg border border-gray-200 bg-white">
      <div className="h-14 flex items-center justify-center border-b border-gray-200">
        <h2 className="text-green-950 text-xl font-semibold">
          DANH MỤC LAPTOP
        </h2>
      </div>

      <nav>
        <ul className="flex flex-col">
          {categories.length > 0 ? (
            categories.map((category) => (
              <CategoryItem key={category.category_id} category={category} />
            ))
          ) : (
            <li className="p-4 text-gray-500">Không có danh mục</li>
          )}
        </ul>
      </nav>
    </aside>
  );
}