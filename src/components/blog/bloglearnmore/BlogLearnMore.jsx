// // BlogLearnMore.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import BlogData from '../blogdata/BlogData';

// const BlogLearnMore = () => {
//   const { id } = useParams();  // Get the blog ID from the URL
//   const blog = BlogData.find((b) => b.id === parseInt(id));  // Find the blog by its ID

//   if (!blog) {
//     return <p>Blog not found!</p>;  // If the blog doesn't exist, show an error message
//   }

//   return (
//     <div>
//       <h1>{blog.name}</h1>
//       <img src={blog.image} alt={blog.name} />
//       <h2>Course: {blog.course}</h2>
//       <p>{blog.description}</p> {/* Short description */}
//       <h3>Detailed Information</h3>
//       <p>{blog.description1}</p> {/* Detailed description (description1) */}
//     </div>
//   );
// };

// export default BlogLearnMore;
