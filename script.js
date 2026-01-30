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
// 1. 新增发表文章的数据
const publications = [
   @article{RN7712,
   author = {Wang, F. T. and Zagalskaya, A. and Ogitsu, T. and Pham, T. A. and Calegari Andrade, M. F.},
   title = {Facet-dependent structure and dissociation of water at pristine IrO2/water interfaces},
   journal = {J Chem Phys},
   volume = {163},
   number = {21},
   ISSN = {1089-7690 (Electronic)
0021-9606 (Linking)},
   DOI = {10.1063/5.0299963},
   url = {https://www.ncbi.nlm.nih.gov/pubmed/41334842},
   year = {2025},
   type = {Journal Article}
}

@article{RN7209,
   author = {Wang, Fei-Teng and Cheng, Jun},
   title = {Investigating water structure and dynamics at metal/water interfaces from classical, ab initio to machine learning molecular dynamics},
   journal = {Current Opinion in Electrochemistry},
   volume = {49},
   ISSN = {24519103},
   DOI = {10.1016/j.coelec.2024.101605},
   year = {2025},
   type = {Journal Article}
}

@article{RN7307,
   author = {Wang, F. T. and Zhu, J. X. and Liu, C. and Xiong, K. and Liu, X. and Cheng, J.},
   title = {Spatial correlation of desorption events accelerates water exchange dynamics at Pt/water interfaces},
   journal = {Chem Sci},
   volume = {16},
   number = {5},
   pages = {2325-2334},
   ISSN = {2041-6520 (Print)
2041-6539 (Electronic)
2041-6520 (Linking)},
   DOI = {10.1039/d4sc06967f},
   url = {https://www.ncbi.nlm.nih.gov/pubmed/39776653},
   year = {2025},
   type = {Journal Article}
}

@article{paper2,
author = {Wang, Fei-Teng, and Cheng, Jun},
title = {Water structures and anisotropic dynamics at Pt(211)/water interface revealed by machine learning molecular dynamics},
journal ={Materials Futures},
%journal = {xxx},
volume = {3},
%number = {xxx},
pages = {041001},
year = {2024},
doi = {10.1088/2752-5724/ad7619},
}


@article{doi:10.1021/acs.jpcc.2c00632,
author = {Xie, Ke and Wang, Fei-Teng and Wei, Fenfei and Zhao, Jia and Lin, Sen},
title = {Revealing the Origin of Nitrogen Electroreduction Activity of Molybdenum Disulfide Supported Iron Atoms},
journal = {The Journal of Physical Chemistry C},
volume = {126},
number = {11},
pages = {5180-5188},
year = {2022},
doi = {10.1021/acs.jpcc.2c00632},
}

@Article{C9TA06470B,
author ="Gao, Liye and Wang, Fei-Teng and Yu, Ming-an and Wei, Fenfei and Qi, Jiamin and Lin, Sen and Xie, Daiqian",
title  ="A novel phosphotungstic acid-supported single metal atom catalyst with high activity and selectivity for the synthesis of NH3 from electrochemical N2 reduction: a DFT prediction",
journal  ="J. Mater. Chem. A",
year  ="2019",
volume  ="7",
issue  ="34",
pages  ="19838-19845",
publisher  ="The Royal Society of Chemistry",
doi  ="10.1039/C9TA06470B",
url  ="http://dx.doi.org/10.1039/C9TA06470B",
}

@article{RN7332,
   author = {Lin, Xin and Geng, Shize and Du, Xianglong and Wang, Feiteng and Zhang, Xu and Xiao, Fang and Xiao, Zhengyi and Wang, Yucheng and Cheng, Jun and Zheng, Zhifeng and Huang, Xiaoqing and Bu, Lingzheng},
   title = {Efficient direct formic acid electrocatalysis enabled by rare earth-doped platinum-tellurium heterostructures},
   journal = {Nature Communications},
   volume = {16},
   number = {1},
   pages = {147},
   ISSN = {2041-1723},
   DOI = {10.1038/s41467-024-55612-0},
   url = {https://doi.org/10.1038/s41467-024-55612-0},
   year = {2025},
   type = {Journal Article}
}

@article{WANG2021215,
title = {Revealing the importance of kinetics in N-coordinated dual-metal sites catalyzed oxygen reduction reaction},
journal = {Journal of Catalysis},
volume = {396},
pages = {215-223},
year = {2021},
issn = {0021-9517},
doi = {https://doi.org/10.1016/j.jcat.2021.02.016},
url = {https://www.sciencedirect.com/science/article/pii/S0021951721000774},
author = {Fei-Teng Wang and Wenbo Xie and Lijun Yang and Daiqian Xie and Sen Lin},
keywords = {Electrocatalysis, Transition-metal-nitrogen-carbon catalyst, Oxygen reduction reaction, Potential-dependent kinetics, Reaction mechanism},
}

@Article{C9TA12207A,
author ="Zang, Jian and Wang, Fei-Teng and Cheng, Qingqing and Wang, Guoliang and Ma, Lushan and Chen, Chi and Yang, Lijun and Zou, Zhiqing and Xie, Daiqian and Yang, Hui",
title  ="Cobalt/zinc dual-sites coordinated with nitrogen in nanofibers enabling efficient and durable oxygen reduction reaction in acidic fuel cells",
journal  ="J. Mater. Chem. A",
year  ="2020",
volume  ="8",
issue  ="7",
pages  ="3686-3691",
publisher  ="The Royal Society of Chemistry",
doi  ="10.1039/C9TA12207A",
url  ="http://dx.doi.org/10.1039/C9TA12207A",}


@article{WANG2020105128,
title = {Axial ligand effect on the stability of Fe–N–C electrocatalysts for acidic oxygen reduction reaction},
journal = {Nano Energy},
volume = {78},
pages = {105128},
year = {2020},
issn = {2211-2855},
doi = {https://doi.org/10.1016/j.nanoen.2020.105128},
url = {https://www.sciencedirect.com/science/article/pii/S2211285520307060},
author = {Fei-Teng Wang and Yipeng Zhou and Sen Lin and Lijun Yang and Zheng Hu and Daiqian Xie},
keywords = {Oxygen reduction reaction, Stability, Fe–N–C electrocatalysts, First-principle modeling, Potential dependent kinetic study},
}
];

// 2. 更新渲染函数
function renderPublications() {
    const pubList = document.getElementById('pub-list');
    pubList.innerHTML = '';
    
    publications.forEach(pub => {
        const html = `
            <div class="pub-item">
                <span class="pub-category">${pub.category}</span>
                <h3><a href="${pub.link}" target="_blank">${pub.title} ↗</a></h3>
                <p class="pub-platform">${pub.platform}</p>
            </div>
        `;
        pubList.insertAdjacentHTML('beforeend', html);
    });
}

// 3. 修改 showSection 兼容新区域
function showSection(sectionId) {
    // 将 'publications' 加入隐藏列表
    const sections = ['about', 'blog', 'post-detail', 'publications'];
    sections.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    
    document.getElementById(sectionId).classList.remove('hidden');
    
    // 逻辑判断
    if (sectionId === 'blog') renderPostList();
    if (sectionId === 'publications') renderPublications(); // 新增逻辑
    
    window.scrollTo(0, 0);
}
function copyBibtex(id) {
    // 这里可以预设好 BibTeX 格式字符串
    const bibtexExample = `@article{yourname2025deep,\n  title={A Deep Learning Approach...},\n  author={Your Name and Zhang, San},\n  journal={Journal of Web Engineering},\n  year={2025}\n}`;
    
    // 简单处理：弹窗显示，实际开发可以做成剪贴板复制
    alert("BibTeX Reference:\n\n" + bibtexExample);
}
// 在 script.js 中替换或增加学术数据
const publications = [
    {
        authors: "Your Name, San Zhang, and Li Si",
        year: "2025",
        title: "A Deep Learning Approach to Minimalist Web Design Patterns",
        journal: "Journal of Web Engineering",
        volume: "24(3), pp. 450-475",
        link: "https://doi.org/10.xxxx/xxxx",
        type: "Journal Article"
    },
    {
        authors: "Your Name and Wang Wu",
        year: "2024",
        title: "User Experience in Single-Page Applications: A Quantitative Study",
        journal: "International Conference on Human-Computer Interaction (HCII)",
        volume: "Springer LNCS, vol 1234",
        link: "#",
        type: "Conference Paper"
    }
];

function renderPublications() {
    const pubList = document.getElementById('pub-list');
    pubList.innerHTML = '';
    
    publications.forEach(pub => {
        const html = `
            <div class="pub-item-academic">
                <span class="pub-type-tag">${pub.type}</span>
                <p class="citation">
                    ${pub.authors}. (${pub.year}). 
                    <strong>"${pub.title}"</strong>. 
                    <em>${pub.journal}</em>, ${pub.volume}.
                </p>
                <div class="pub-links">
                    <a href="${pub.link}" target="_blank">DOI</a> | 
                    <a href="javascript:void(0)" onclick="copyBibtex(${pub.id})">BibTeX</a>
                </div>
            </div>
        `;
        pubList.insertAdjacentHTML('beforeend', html);
    });
}

