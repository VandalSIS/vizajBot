import React, { useEffect } from 'react';
import { Calendar, User, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { trackViewContent } from '../components/MetaPixel';

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
  readTime: number;
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Track page view
  useEffect(() => {
    if (slug) {
      trackViewContent('blog_post', `Blog Post: ${slug}`);
    }
  }, [slug]);

  // În producție, aceste date vor veni de la API
  const blogPost: BlogPost = {
    id: '1',
    title: 'Cum să alegi fondul de ten perfect pentru tipul tău de piele',
    excerpt: 'Descoperă secretele pentru a găsi fondul de ten ideal care să se potrivească perfect cu tipul tău de piele și să îți ofere un aspect natural și strălucitor.',
    content: `
      <p>Fondul de ten este unul dintre cele mai importante produse de machiaj, fiind baza întregului look. Alegerea celui potrivit poate fi o provocare, dar cu câteva sfaturi simple, vei putea găsi fondul perfect pentru tipul tău de piele.</p>
      
      <h2>Identifică tipul tău de piele</h2>
      <p>Primul pas în alegerea fondului de ten este să identifici tipul tău de piele:</p>
      <ul>
        <li><strong>Piele uscată:</strong> Are nevoie de fonduri cu textură cremoasă și hidratantă</li>
        <li><strong>Piele grasă:</strong> Beneficiază de fonduri matifiante și cu control al sebumului</li>
        <li><strong>Piele mixtă:</strong> Poate folosi fonduri cu acoperire medie și finisaj natural</li>
        <li><strong>Piele sensibilă:</strong> Are nevoie de fonduri hipoalergenice și fără parfum</li>
      </ul>
      
      <h2>Testează nuanța potrivită</h2>
      <p>Pentru a găsi nuanța perfectă, testează fondul pe linia maxilarului, nu pe mână. Nuanța potrivită ar trebui să se "piardă" în piele, fără să fie prea deschisă sau prea închisă.</p>
      
      <h2>Luați în considerare textura</h2>
      <p>Textura fondului de ten depinde de preferințele tale și de ocazie:</p>
      <ul>
        <li><strong>Fonduri lichide:</strong> Perfecte pentru acoperire medie până la completă</li>
        <li><strong>Fonduri în pudră:</strong> Ideale pentru pielea grasă și pentru machiaj rapid</li>
        <li><strong>Fonduri în cremă:</strong> Excelente pentru pielea uscată și pentru acoperire maximă</li>
        <li><strong>Fonduri în stick:</strong> Convenabile pentru aplicare și pentru acoperire medie</li>
      </ul>
      
      <h2>Concluzie</h2>
      <p>Alegerea fondului de ten potrivit este o artă care necesită puțină practică și cunoașterea tipului tău de piele. Nu uita să testezi produsul înainte de cumpărare și să investești în produse de calitate pentru un rezultat profesional.</p>
    `,
    author: 'Elena Popescu',
    publishDate: '2024-01-15',
    image: 'https://via.placeholder.com/800x400?text=Foundation+Guide',
    category: 'Machiaj',
    tags: ['fond de ten', 'machiaj', 'piele', 'beauty'],
    slug: 'cum-sa-alegi-fondul-de-ten-perfect',
    readTime: 5
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedPosts = [
    {
      id: '2',
      title: 'Rutina de îngrijire a pielii pentru sezonul rece',
      image: 'https://via.placeholder.com/300x200?text=Winter+Skincare',
      slug: 'rutina-ingrijire-piele-sezon-rece'
    },
    {
      id: '3',
      title: 'Top 5 parfumuri pentru femei recomandate de experți',
      image: 'https://via.placeholder.com/300x200?text=Top+Perfumes',
      slug: 'top-5-parfumuri-femei-recomandate'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <a
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Înapoi la blog
          </a>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Category and Meta */}
          <div className="flex items-center justify-between mb-6">
            <span className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full">
              {blogPost.category}
            </span>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(blogPost.publishDate)}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {blogPost.author}
              </div>
              <span>{blogPost.readTime} min citire</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {blogPost.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {blogPost.excerpt}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mb-8">
            <button className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              <Heart className="h-4 w-4" />
              <span>Îmi place</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Bookmark className="h-4 w-4" />
              <span>Salvează</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 className="h-4 w-4" />
              <span>Distribuie</span>
            </button>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tag-uri:</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Articole similare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Îți place conținutul nostru?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Abonează-te la newsletter și primește cele mai noi articole despre frumusețe direct în inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Adresa ta de email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Abonează-te
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
