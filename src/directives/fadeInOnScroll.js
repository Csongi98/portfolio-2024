export default {
    mounted(el) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible'); // Add 'visible' class when the element is in view
            observer.unobserve(el); // Stop observing once the animation is done
          }
        },
        { threshold: 0.1 } // Adjust threshold as needed
      );
  
      observer.observe(el);
    },
  };
  