import React, { useState } from 'react';
import BlogData from './blogdata/BlogData'; // Adjust the path to your data file
import styles from './Blog.module.css'; // Import the modular CSS

const Blog = () => {
  // Number of blogs to display per page
  const blogsPerPage = 8;

  // State to manage expanded descriptions for each card
  const [expanded, setExpanded] = useState({});

  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Total number of pages
  const totalPages = Math.ceil(BlogData.length / blogsPerPage);

  // Toggle the description expansion
  const toggleDescription = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the expansion state for the clicked card
    }));
  };

  // Calculate which blogs to display on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = BlogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className={styles.BlogHeading}>BLOG</div>
      <div className={styles.blogscard}>
        {currentBlogs.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <img src={blog.image} alt={blog.name} className={styles.cardImage} />
            <h2 className={styles.cardName}>{blog.name}</h2>
            <p className={styles.cardCourse}>{blog.course}</p>
            <div className={styles.cardDescriptionWrapper}>
              <div
                className={`${styles.cardDescription} ${expanded[blog.id] ? styles.expanded : ''}`}
                onClick={() => toggleDescription(blog.id)}
              >
                {blog.description}
              </div>
              {/* <button className={styles.cardButton}>{blog.button}</button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.pageButton}
        >
          Previous
        </button>
        
        <span className={styles.pageInfo}>
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.pageButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;
