import React from 'react';
import BlogCard from './BlogCard';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  image: string;
  category: string;
  tags: string[];
  slug: string;
}

interface BlogSectionProps {
  title: string;
  posts: BlogPost[];
  showViewAll?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({ 
  title, 
  posts, 
  showViewAll = true 
}) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          {showViewAll && (
            <a
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Vezi toate articolele
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
