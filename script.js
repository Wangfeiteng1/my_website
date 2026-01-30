// ================= 数据部分 =================
const posts = [
    { id: 0, title: "简约设计的力量", date: "2026-01-28", excerpt: "为什么少即是多？探索现代网页设计的减法艺术。", content: "简约设计专注于核心功能，减少视觉噪音。" }
];

const publications = [
    {
        id: "RN7712", authors: "Wang, F. T., et al.", year: "2025",
        title: "Facet-dependent structure and dissociation of water at pristine IrO2/water interfaces",
        journal: "J Chem Phys", volume: "163", number: "21",
        link: "https://doi.org/10.1063/5.0299963", type: "Journal Article",
        bibtex: "@article{RN7712, author = {Wang, F. T. and others}, title = {Facet-dependent structure...}, journal = {J Chem Phys}, year = {2025}}"
    },
    {
        id: "RN7209", authors: "Wang, Fei-Teng and Cheng, Jun", year: "2025",
        title: "Investigating water structure and dynamics at metal/water interfaces...",
        journal: "Current Opinion in Electrochemistry", volume: "49",
        link: "https://doi.org/10.1016/j.coelec.2024.101605", type: "Journal Article",
        bibtex: "@article{RN7209, author = {Wang, Fei-Teng and Cheng, Jun}, year = {2025}}"
    },
    {
        id: "RN7307", authors: "Wang, F. T., Zhu, J. X., et al.", year: "2025",
        title: "Spatial correlation of desorption events accelerates water exchange dynamics at Pt/water interfaces",
        journal: "Chem Sci", volume: "16", number: "5", pages: "2325-2334",
        link: "https://doi.org/10.1039/d4sc06967f", type: "Journal Article"
    },
    {
        id: "RN7332", authors: "Lin, Xin, Wang, Feiteng, et al.", year: "2025",
        title: "Efficient direct formic acid electrocatalysis enabled by rare earth-doped platinum-tellurium heterostructures",
        journal: "Nature Communications", volume: "16", number: "1", pages: "147",
        link: "https://doi.org/10.1038/s41467-024-55612-0", type: "Journal Article"
    },
    {
        id: "paper2", authors: "Wang, Fei-Teng and Cheng, Jun", year: "2024",
        title: "Water structures and anisotropic dynamics at Pt(211)/water interface revealed by machine learning molecular dynamics",
        journal: "Materials Futures", volume: "3", pages: "041001",
        link: "https://doi.org/10.1088/2752-5724/ad7619", type: "Journal Article"
    },
    {
        id: "jpcc2022", authors: "Xie, Ke, Wang, Fei-Teng, et al.", year: "2022",
        title: "Revealing the Origin of Nitrogen Electroreduction Activity of Molybdenum Disulfide Supported Iron Atoms",
        journal: "The Journal of Physical Chemistry C", volume: "126", number: "11", pages: "5180-5188",
        link: "https://doi.org/10.1021/acs.jpcc.2c00632", type: "Journal Article"
    },
    {
        id: "WANG2021215", authors: "Wang, Fei-Teng, et al.", year: "2021",
        title: "Revealing the importance of kinetics in N-coordinated dual-metal sites catalyzed oxygen reduction reaction",
        journal: "Journal of Catalysis", volume: "396", pages: "215-223",
        link: "https://doi.org/10.1016/j.jcat.2021.02.016", type: "Journal Article"
    },
    {
        id: "WANG2020105128", authors: "Wang, Fei-Teng, et al.", year: "2020",
        title: "Axial ligand effect on the stability of Fe–N–C electrocatalysts for acidic oxygen reduction reaction",
        journal: "Nano Energy", volume: "78", pages: "105128",
        link: "https://doi.org/10.1016/j.nanoen.2020.105128", type: "Journal Article"
    },
    {
        id: "C9TA12207A", authors: "Zang, Jian, Wang, Fei-Teng, et al.", year: "2020",
        title: "Cobalt/zinc dual-sites coordinated with nitrogen in nanofibers enabling efficient and durable oxygen reduction reaction in acidic fuel cells",
        journal: "J. Mater. Chem. A", volume: "8", pages: "3686-3691",
        link: "http://dx.doi.org/10.1039/C9TA12207A", type: "Journal Article"
    },
    {
        id: "C9TA06470B", authors: "Gao, Liye, Wang, Fei-Teng, et al.", year: "2019",
        title: "A novel phosphotungstic acid-supported single metal atom catalyst with high activity and selectivity for the synthesis of NH3 from electrochemical N2 reduction",
        journal: "J. Mater. Chem. A", volume: "7", pages: "19838-19845",
        link: "http://dx.doi.org/10.1039/C9TA06470B", type: "Journal Article"
    }
];

// ================= 逻辑部分 =================
function showSection(sectionId) {
    const sections = ['about', 'blog', 'post-detail', 'publications'];
    sections.forEach(id => document.getElementById(id)?.classList.add('hidden'));
    document.getElementById(sectionId)?.classList.remove('hidden');

    document.querySelectorAll('.links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(sectionId)) link.classList.add('active');
    });

    if (sectionId === 'blog') renderPostList();
    if (sectionId === 'publications') renderPublications();
    window.scrollTo(0, 0);
}

function renderPostList() {
    const container = document.getElementById('post-list');
    if (!container) return;
    container.innerHTML = posts.map((post, i) => `
        <div class="post-item">
            <p class="post-date">${post.date}</p>
            <h3 onclick="viewPostDetail(${i})">${post.title}</h3>
            <p>${post.excerpt}</p>
        </div>`).join('');
}

function renderPublications() {
    const container = document.getElementById('pub-list');
    if (!container) return;
    container.innerHTML = publications.map((pub, i) => `
        <div class="pub-item-academic">
            <span class="pub-type-tag">${pub.type}</span>
            <p class="citation">
                <span class="authors">${pub.authors}</span> (${pub.year}). 
                <strong>${pub.title}</strong> 
                <em>${pub.journal}</em>${pub.volume ? ', ' + pub.volume : ''}${pub.number ? '(' + pub.number + ')' : ''}${pub.pages ? ', ' + pub.pages : ''}.
            </p>
            <div class="pub-links">
                <a href="${pub.link}" target="_blank">DOI ↗</a>
                <a href="javascript:void(0)" onclick="copyBibtex(${i})">BibTeX</a>
            </div>
        </div>`).join('');
}

function copyBibtex(i) {
    alert("BibTeX Reference:\n\n" + (publications[i].bibtex || "BibTeX data coming soon."));
}

document.addEventListener('DOMContentLoaded', () => showSection('about'));
