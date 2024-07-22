// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  if(faqContainer) {
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
      
      if (!groupHeader) return;
      
      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');
      
      // Toggle icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
      
      // Toggle visibility of body
      groupBody.classList.toggle('open');
      
      // Close other open FAQ bodies
      const otherGroups = faqContainer.querySelectorAll('.faq-group');
      
      otherGroups.forEach((otherGroup) => {
        if (otherGroup !== group) {
          const otherGroupBody = otherGroup.querySelector('.faq-group-body');
          const otherIcon = otherGroup.querySelector('.faq-group-header i');
          
          otherGroupBody.classList.remove('open');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        }
      });
    });
  }
  });

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});

// blog
document.addEventListener('DOMContentLoaded', function() {
  const blogArticlesContainer = document.getElementById('blog-articles');
  const subscriptionForm = document.getElementById('subscription-form');
  const emailInput = document.getElementById('email');

  // Function to create a blog article
  function createBlogArticle(title, text) {
      const blogArticle = document.createElement('div');
      blogArticle.className = 'blog-article';

      const blogTitle = document.createElement('h4');
      blogTitle.className = 'blog-title';
      blogTitle.textContent = title;
      blogArticle.appendChild(blogTitle);

      const blogText = document.createElement('p');
      blogText.className = 'blog-text';
      blogText.textContent = text;
      blogArticle.appendChild(blogText);

      const hr = document.createElement('hr');
      blogArticle.appendChild(hr);
      if(blogArticlesContainer){
        blogArticlesContainer.appendChild(blogArticle);
      }
  }

  // Example data
  const articlesData = [
      {
          title: 'What is the new update now in growth',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum amet esse porro provident laudantium nulla quo neque consectetur nobis repellat...'
      },
      {
          title: 'How to grow your startup in 2024',
          text: 'Discover the latest strategies and tools to accelerate your startup growth in the new year...'
      },
      {
          title: 'The impact of AI on modern businesses',
          text: 'Artificial Intelligence is transforming industries. Learn how to leverage AI for your business growth...'
      }
  ];

  // Create blog articles from data
  articlesData.forEach(article => createBlogArticle(article.title, article.text));

  // Load existing subscriptions from localStorage
  const loadSubscriptions = () => {
      const subscriptions = localStorage.getItem('subscriptions');
      return subscriptions ? JSON.parse(subscriptions) : [];
  };

  // Save subscriptions to localStorage
  const saveSubscriptions = (subscriptions) => {
      localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  };

  // Handle form submission
  subscriptionForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = emailInput.value.trim();
      if (email) {
          let subscriptions = loadSubscriptions();
          if (!subscriptions.includes(email)) {
              subscriptions.push(email);
              saveSubscriptions(subscriptions);
              alert(`Thank you for subscribing with ${email}`);
          } else {
              alert('You are already subscribed.');
          }
          emailInput.value = '';
      } else {
          alert('Please enter a valid email address.');
      }
  });
});
