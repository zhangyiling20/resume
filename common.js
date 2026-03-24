// 导航栏HTML
const navbarHTML = `
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <a href="index.html" class="text-2xl font-bold text-primary">PICK ME</a>
      <div class="hidden md:flex space-x-8">
        <a href="index.html#about" class="hover:text-primary transition-all-300">主页</a>
        <a href="index.html#education" class="hover:text-primary transition-all-300">教育经历</a>
        <a href="index.html#experience" class="hover:text-primary transition-all-300">工作经历</a>
        <a href="index.html#portfolio" class="hover:text-primary transition-all-300">作品集</a>
        <a href="index.html#skills" class="hover:text-primary transition-all-300">技能与爱好</a>
        <a href="index.html#contact" class="hover:text-primary transition-all-300">联系方式</a>
      </div>
      <button class="md:hidden text-dark">
        <i class="fa fa-bars text-xl"></i>
      </button>
    </div>
  </nav>
`;

// 页脚HTML
const footerHTML = `
  <footer class="bg-dark text-white py-8">
    <div class="container mx-auto px-4 text-center">
      <p class="mb-4">© 2026 张议令. 保留所有权利.</p>
      <p class="text-gray-400">个性签名：没关系，又活了一天，已经很棒了！</p>
    </div>
  </footer>
`;

// 回到顶部按钮HTML
const backToTopHTML = `
  <button id="back-to-top" class="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 invisible transition-all-300">
    <i class="fa fa-arrow-up"></i>
  </button>
`;

// 页面加载完成后插入导航栏、页脚和回到顶部按钮
document.addEventListener('DOMContentLoaded', function() {
  // 插入导航栏
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }
  
  // 插入页脚
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
  
  // 插入回到顶部按钮
  const backToTopContainer = document.getElementById('back-to-top-container');
  if (backToTopContainer) {
    backToTopContainer.innerHTML = backToTopHTML;
  }
  
  // 回到顶部按钮功能
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
      }
    });
    
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });
});
