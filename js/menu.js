const menus = [
    {
        title: 'About',
        localHash: '#About', // 本页定位
        extraLink: '', // 外部连接
    },
     {
        title: 'Experience',
        localHash: '#Experience', // 本页定位
        extraLink: '', // 外部连接
    },
     {
        title: 'Projects',
        localHash: '#Projects', // 本页定位
        extraLink: '', // 外部连接
    },
     {
        title: 'Education',
        localHash: '#Education', // 本页定位
        extraLink: '', // 外部连接
    },
     {
        title: 'Skills',
        localHash: '#Skills', // 本页定位
        extraLink: '', // 外部连接
    },
    {
        title: 'Contact',
        localHash: '#Contact', // 本页定位
        extraLink: '', // 外部连接
    },

];


function createMenuItems() {
    const items = [];
    menus.map(item => {
        let localAnchor = 'local_anchor';
        if (item.extraLink) {
            localAnchor = '';
        }
        const tpl = `
            <div class="navbar-item">
              <a href="${item.localHash}" class="${localAnchor}   has-text-light">
                ${item.title}
              </a>
            </div>
        `;
        items.push(tpl);
    });
    return items;
}


function addClickEvent() {
    document.querySelectorAll('.navbar-item a.local_anchor').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // console.log(this, '====', this.hash, '----', e.target.hash, '****')
            console.log(e)
            const section = document.querySelector(e.target.hash);
            console.log(section)
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        });
    });
}


function displayMenuItems () {
    const navItemsWrap = document.getElementById('navItemsWrap');
    const itemDivs = createMenuItems();
    navItemsWrap.innerHTML = itemDivs.join('\n');
    addClickEvent();

}

displayMenuItems ();