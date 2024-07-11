document.addEventListener('DOMContentLoaded', function() {
    const articles = [
        {
            title: "Article 1",
            image: "https://cdn.discordapp.com/attachments/1260853864362414091/1260853904015360000/zyc_news.png?ex=6690d534&is=668f83b4&hm=e1dfac89e0eba635735c4abdadb0417df959fd1de14ee5afa437ece3f7573a4f&"
        },
        {
            title: "Article 2",
            image: "https://via.placeholder.com/300x200?text=Article+2"
        },
        {
            title: "Article 3",
            image: "https://via.placeholder.com/300x200?text=Article+3"
        },
        {
            title: "Article 4",
            image: "https://via.placeholder.com/300x200?text=Article+4"
        },
        {
            title: "Article 5",
            image: "https://via.placeholder.com/300x200?text=Article+5"
        },
        {
            title: "Article 6",
            image: "https://via.placeholder.com/300x200?text=Article+6"
        }
    ];

    const articlesContainer = document.getElementById('articles');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close');

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        const articleImage = document.createElement('img');
        articleImage.src = article.image;
        articleImage.alt = article.title;

        articleDiv.appendChild(articleImage);

        articlesContainer.appendChild(articleDiv);

        articleImage.addEventListener('click', () => {
            modal.style.display = "block";
            modalImage.src = article.image;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
