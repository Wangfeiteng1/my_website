// ================= 1. 数据部分 =================

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

// 学术发表数据库 (已将你的 BibTeX 转换为 JS 对象)
const publications = [
    {
        id: "RN7712",
        authors: "Wang, F. T., Zagalskaya, A., Ogitsu, T., Pham, T. A., and Calegari Andrade, M. F.",
        title: "Facet-dependent structure and dissociation of water at pristine IrO2/water interfaces",
        journal: "J Chem Phys",
        year: "2025",
        volume: "163",
        number: "21",
        doi: "10.1063/5.0299963",
        link: "https://doi.org/10.1063/5.0299963",
        type: "Journal Article",
        bibtex: `@article{RN7712,\n  author = {Wang, F. T. and Zagalskaya, A. and Ogitsu, T. and Pham, T. A. and Calegari Andrade, M. F.},\n  title = {Facet-dependent structure and dissociation of water at pristine IrO2/water interfaces},\n  journal = {J Chem Phys},\n  year = {2025},\n  doi = {10.1063/5.0299963}\n}`
    },
    {
        id: "RN7209",
        authors: "Wang, Fei-Teng and Cheng, Jun",
        title: "Investigating water structure and dynamics at metal/water interfaces from classical, ab initio to machine learning molecular dynamics",
        journal: "Current Opinion in Electrochemistry",
        year: "2025",
        volume: "49",
        doi: "10.1016/j.coelec.2024.101605",
        link: "https://doi.org/10.1016/j.coelec.2024.101605",
        type: "Journal Article",
        bibtex: `@article{RN7209,\n  author = {Wang, Fei-Teng and Cheng, Jun},\n  title = {Investigating water structure and dynamics at metal/water interfaces...},\n  journal = {Current Opinion in Electrochemistry},\n  year = {2025}\n}`
    },
    {
        id: "RN7307",
        authors: "Wang, F. T., Zhu, J. X., Liu, C., et al.",
        title: "Spatial correlation of desorption events accelerates water exchange dynamics at Pt/water interfaces",
        journal: "Chem Sci",
        year: "2025",
        volume: "16",
        number: "5",
        doi: "10.1039/d4sc06967f",
        link: "https://doi.org/10.1039/d4sc06967f",
        type: "Journal Article",
        bibtex: `@article{RN7307,\n  author = {Wang, F. T. and Zhu, J. X. and Liu, C. and Xiong, K. and Liu, X. and Cheng, J.},\n  journal = {Chem Sci},\n  year = {2025}\n}`
    },
    {
        id: "paper2",
        authors: "Wang, Fei-Teng, and Cheng, Jun",
        title: "Water structures and anisotropic dynamics at Pt(211)/water interface revealed by machine learning molecular dynamics",
        journal: "Materials Futures",
        year: "2024",
        volume: "3",
        pages: "041001",
        doi: "10.1088/2752-5724/ad7619",
        link: "https://doi.org/10.1088/2752-5724/ad7619",
        type: "Journal Article",
        bibtex: `@article{paper2,\n  author = {Wang, Fei-Teng and Cheng, Jun},\n  title = {Water structures and anisotropic dynamics...},\n  year = {2024}\n}`
    }
];

// ================= 2. 逻辑部分 =================

/**
 * 核心导航函数
 */
function showSection(sectionId) {
    const sections = ['about', 'blog', 'post-detail', 'publications'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    
    const target = document.getElementById(sectionId);
    if (target) target.classList.remove('hidden');
    
    if (sectionId === 'blog') renderPostList();
    if (sectionId === 'publications') renderPublications();
    
    window.scrollTo(0, 0);
}

/**
 * 渲染博文列表
 */
function renderPostList() {
    const listContainer = document.getElementById('post-list');
    if (!listContainer) return;
    listContainer.innerHTML = ''; 
    
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
 * 查看文章详情
 */
function viewPostDetail(index) {
    const post = posts[index];
    const detailContainer = document.getElementById('detail-content');
    if (!detailContainer) return;

    detailContainer.innerHTML = `
        <p class="post-date">${post.date}</p>
        <h1>${post.title}</h1>
        <div class="full-content">${post.content}</div>
    `;
    showSection('post-detail');
}

/**
 * 渲染学术发表列表 (Academic Style)
 */
function renderPublications() {
    const pubList = document.getElementById('pub-list');
    if (!pubList) return;
    pubList.innerHTML = '';
    
    publications.forEach((pub, index) => {
        const html = `
            <div class="pub-item-academic">
                <span class="pub-type-tag">${pub.type || 'Article'}</span>
                <p class="citation">
                    ${pub.authors}. (${pub.year}). 
                    <strong>"${pub.title}"</strong>. 
                    <em>${pub.journal}</em>${pub.volume ? ', ' + pub.volume : ''}${pub.number ? '(' + pub.number + ')' : ''}.
                </p>
                <div class="pub-links">
                    <a href="${pub.link}" target="_blank">DOI ↗</a> | 
                    <a href="javascript:void(0)" onclick="copyBibtex(${index})">BibTeX</a>
                </div>
            </div>
        `;
        pubList.insertAdjacentHTML('beforeend', html);
    });
}

/**
 * 复制 BibTeX 内容
 */
function copyBibtex(index) {
    const pub = publications[index];
    const text = pub.bibtex || "BibTeX data not available.";
    
    // 使用简单的弹窗显示，也可以使用 navigator.clipboard.writeText 自动复制
    alert("BibTeX Reference for:\n" + pub.id + "\n\n" + text);
}

// 初始加载
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});
