import { useEffect, useState } from "react";
import { deleteBlog, getBlog } from "./Utils";
import BlogCard from "../Components/BlogCard";
import EmptyMessage from "../Components/EmptyMessage";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlog();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlog();
    setBlogs(storedBlogs);
  };
  if(blogs.length < 1) return <EmptyMessage message='No Bookmarks Available' address={'/blogs'} label={'Go To Blogs'} />
  return (
    <section className=' px-6 sm:px-8 lg:px-12 py-8'>
    <div className='container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12'>
      <div className='grid justify-center grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
        {blogs.map(blog => (
          <BlogCard
            deletable={true}
            handleDelete={handleDelete}
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </div>
  </section>
  );
};

export default Bookmarks;
