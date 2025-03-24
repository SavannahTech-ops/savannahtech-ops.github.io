
import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
      <div className="h-48 overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium px-2.5 py-0.5 bg-primary/10 text-primary rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground ml-auto flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-primary">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="mr-4">{post.date}</span>
          <User className="h-4 w-4 mr-1" />
          <span>{post.author}</span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <Link 
            to={`/blog/${post.id}`} 
            className="text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
