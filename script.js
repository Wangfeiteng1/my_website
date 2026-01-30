// 模拟博文数据库
const posts = [
    { 
        id: 0,
        title: "简约设计的力量", 
        date: "2026-01-28", 
        excerpt: "为什么少即是多？探索现代网页设计的减法艺术。",
        content: "简约设计并不是简单地去除元素，而是专注于核心功能。\n\n在构建这个个人主页时，我们使用了大量的留白和系统字体，这是为了让阅读体验回归本质。优秀的排版不需要多余的装饰，信息本身就是最好的装饰。"
    },
    { 
        id: 1,
        title: "我的第一篇技术博客", 
        date: "2026-01-25", 
        excerpt: "记录我学习 HTML 和 CSS 的过程与心得。",
        content: "今天我成功发布了自己的个人网页！\n\n通过这个项目，我学到了：\n1. 如何使用 HTML 构建语义化结构。\n2. 如何利用 CSS Flexbox 进行布局。\n3. JavaScript 如何驱动页面内容的动态更新。\n\n这只是一个开始，未来我会分享更多关于前端开发的干货。"
    }
];

/**
 * 切换页面显示的函数
 * @param {string} sectionId - 要显示的区块 ID ('about', 'blog', 'post-detail')
 */
function showSection(sectionId) {
    // 隐藏所有区块
    const sections = ['about', 'blog', 'post-detail'];
    sections.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    
    // 显示选中的区块
    const target = document.getElementById(sectionId);
    target.classList.remove('hidden');
    
    // 如果进入博客列表，则执行渲染
    if (sectionId === 'blog') {
        renderPostList();
    }
    
    // 切换页面时自动滚动到顶部
    window.scrollTo(0, 0);
}

/**
 * 将博文列表渲染到页面上
 */
function renderPostList() {
    const listContainer = document.getElementById('post-list');
    listContainer.innerHTML = ''; // 清空当前内容
    
    posts.forEach((post, index) => {
        const itemHtml = `
            <div class="post-item">
                <p class="post-date">${post.date}</p>
                <h3 onclick="viewPostDetail(${index})">${post.title}</h3>
                <p>${post.excerpt}</p>
            </div>
        `;
        listContainer.insertAdjacentHTML('beforeend', itemHtml);
    });
}

/**
 * 显示单篇文章详情内容
 * @param {number} index - 文章在数组中的索引
 */
function viewPostDetail(index) {
    const post = posts[index];
    const detailContainer = document.getElementById('detail-content');
    
    detailContainer.innerHTML = `
        <p class="post-date">${post.date}</p>
        <h1>${post.title}</h1>
        <div class="full-content">${post.content}</div>
    `;
    
    showSection('post-detail');
}

// 初始加载时确保显示“关于”部分
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});