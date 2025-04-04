document.addEventListener('DOMContentLoaded', function() {
    // FAQ 折叠/展开功能
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // 关闭其他所有打开的FAQ项
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.toggle-icon').textContent = '+';
                }
            });
            
            // 切换当前项的状态
            item.classList.toggle('active');
            
            // 更新加号/减号图标
            const toggleIcon = item.querySelector('.toggle-icon');
            if (item.classList.contains('active')) {
                toggleIcon.textContent = '−';
            } else {
                toggleIcon.textContent = '+';
            }
        });
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 减去头部高度
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 移动端菜单切换
    const createMobileMenu = () => {
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
            const nav = document.querySelector('nav');
            const header = document.querySelector('header .container');
            
            // 创建移动端菜单按钮
            const menuToggle = document.createElement('div');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '<span></span><span></span><span></span>';
            
            // 在logo后面插入菜单按钮
            const logo = document.querySelector('.logo');
            header.insertBefore(menuToggle, logo.nextSibling);
            
            // 添加菜单切换事件
            menuToggle.addEventListener('click', () => {
                nav.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
            
            // 添加移动端菜单样式
            const style = document.createElement('style');
            style.textContent = `
                @media (max-width: 768px) {
                    nav {
                        display: none;
                        width: 100%;
                        padding-top: 15px;
                    }
                    
                    nav.active {
                        display: block;
                    }
                    
                    .mobile-menu-toggle {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        width: 30px;
                        height: 22px;
                        cursor: pointer;
                    }
                    
                    .mobile-menu-toggle span {
                        display: block;
                        height: 3px;
                        width: 100%;
                        background-color: var(--primary-color);
                        border-radius: 3px;
                        transition: all 0.3s ease;
                    }
                    
                    .mobile-menu-toggle.active span:nth-child(1) {
                        transform: translateY(9px) rotate(45deg);
                    }
                    
                    .mobile-menu-toggle.active span:nth-child(2) {
                        opacity: 0;
                    }
                    
                    .mobile-menu-toggle.active span:nth-child(3) {
                        transform: translateY(-9px) rotate(-45deg);
                    }
                    
                    header .container {
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }
                    
                    .logo {
                        margin-bottom: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    };
    
    // 初始化移动端菜单
    createMobileMenu();
    
    // 窗口大小改变时重新检查
    window.addEventListener('resize', createMobileMenu);
});