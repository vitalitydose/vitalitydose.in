// Vitality Dose Dynamic Blog Indexer & Internal Link Engine
document.addEventListener('DOMContentLoaded', async () => {
  const relatedContainer = document.getElementById('related-posts');
  const feedContainer = document.getElementById('blog-archive-feed');
  const homeBlogContainer = document.getElementById('home-recent-posts');

  if (!relatedContainer && !feedContainer && !homeBlogContainer) return;

  try {
    const response = await fetch('/data/posts.json');
    if (!response.ok) return;
    const posts = await response.json();

    const renderCard = (post) => `
      <article class="related-card">
        <div>
          <span class="badge-category">${post.category}</span>
          <a href="${post.url}">
            <h4>${post.title}</h4>
          </a>
          <p class="summary">${post.summary}</p>
        </div>
        <div class="post-meta" style="display:flex; justify-content:space-between; align-items:center; margin-top:0.75rem;">
          <span>${post.readTime}</span>
          <span class="read-more"><a href="${post.url}">Read Article &rarr;</a></span>
        </div>
      </article>
    `;

    // 1. Populate Related Posts on Single Article Pages
    if (relatedContainer) {
      const currentCategory = relatedContainer.dataset.category || '';
      const currentSlug = relatedContainer.dataset.currentSlug || '';

      const related = posts
        .filter(p => p.slug !== currentSlug && (p.category === currentCategory || p.tags?.some(t => currentCategory.includes(t))))
        .slice(0, 3);

      if (related.length === 0) {
        related.push(...posts.filter(p => p.slug !== currentSlug).slice(0, 3));
      }
      relatedContainer.innerHTML = related.map(renderCard).join('');
    }

    // 2. Populate Full Blog Archive Feed (/blog.html)
    if (feedContainer) {
      feedContainer.innerHTML = posts.map(renderCard).join('');
    }

    // 3. Populate Recent Posts on Homepage (/index.html)
    if (homeBlogContainer) {
      homeBlogContainer.innerHTML = posts.slice(0, 3).map(renderCard).join('');
    }
  } catch (err) {
    console.error('Error loading Vitality Dose blog index:', err);
  }
});
