document.addEventListener("DOMContentLoaded", function () {
    // Get the search query from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchQueryElement = document.getElementById('search-query');
    const articleResultsContainer = document.getElementById('article-results');
    
    // Set the search query in the page title and search results header
    searchQueryElement.textContent = query;

    // Sample articles data (normally, this data would come from a database or an API)
    const articlesData = [
        {
            title: "The Best Tools for Graphic Designers in 2025",
            author: "Chris Brown",
            time: "6 min read",
            date: "15 January",
            content: "Some content about graphic design tools."
        },
        {
            title: "Understanding Django for Beginners",
            author: "Alice Johnson",
            time: "5 min read",
            date: "14 January",
            content: "Some content about Django for beginners."
        },
        {
            title: "How to Learn JavaScript Efficiently",
            author: "Paul Harris",
            time: "7 min read",
            date: "13 January",
            content: "Some content about learning JavaScript."
        },
        {
            title: "Exploring the Future of AI in Healthcare",
            author: "Linda Green",
            time: "6 min read",
            date: "11 January",
            content: "Some content about AI in healthcare."
        },
        {
            title: "Top 10 Programming Languages to Learn in 2025",
            author: "Mark Taylor",
            time: "5 min read",
            date: "09 January",
            content: "Some content about programming languages."
        },
        {
            title: "How to Build a Successful Freelance Business",
            author: "Mary Ann",
            time: "9 min read",
            date: "12 January",
            content: "Some content about building a freelance business."
        },
        {
            title: "Understanding the Basics of Blockchain Technology",
            author: "John Smith",
            time: "7 min read",
            date: "08 January",
            content: "Some content about blockchain technology."
        },
        {
            title: "Social Media Marketing Trends You Need to Follow",
            author: "Jane Doe",
            time: "8 min read",
            date: "10 January",
            content: "Some content about social media marketing."
        }
    ];

    // Function to highlight the query text
    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    // Filter the articles based on the query
    const filteredArticles = articlesData.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase())
    );

    // If no results, show a message
    if (filteredArticles.length === 0) {
        articleResultsContainer.innerHTML = "<p>No articles found matching your query.</p>";
    } else {
        // Otherwise, display the filtered articles
        filteredArticles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('home-article');

            // Highlight the searched query in the title
            const highlightedTitle = highlightText(article.title, query);

            articleElement.innerHTML = `
                <div class="home-article-img">
                    <img src="img/3.png" alt="article">
                </div>
                <div class="home-article-content font1">
                    <a href="blogpost.html">
                        <h3>${highlightedTitle}</h3>
                    </a>
                    <div>${article.author}</div>
                    <span>${article.date} | ${article.time}</span>
                </div>
            `;

            articleResultsContainer.appendChild(articleElement);
        });
    }
});
