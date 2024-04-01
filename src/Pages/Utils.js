import toast from "react-hot-toast";

export const getBlog = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}

// save
export const saveBlog = (blog) => {
    let blogs = getBlog();
    const isExist = blogs.find(b => b.id === blog.id);
    if (isExist) {
       return toast.error('Already Bookmarked');
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs)); // Store updated blogs array
    toast.success('Bookmark Successfully');
}

// delete
export const deleteBlog = (id) => {
    let blogs = getBlog();
    const remaining = blogs.filter(b => b.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Remove Successfully');
}
