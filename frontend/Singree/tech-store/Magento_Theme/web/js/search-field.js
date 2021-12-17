define([], function(){
    return function () {
        let searchField = document.querySelector('.block-search'),
            loup = document.getElementById('search-icon'),
            fieldSearch = document.getElementById('search'),
            search = 'loup',
            replaceWith = 'close',
            imageSrc = document.getElementById('loup-icon').getAttribute('src').split(replaceWith).join(search),
            imageSrc2 = document.getElementById('loup-icon').getAttribute('src').split(search).join(replaceWith)

        loup.addEventListener('click', () => {
            searchField.classList.toggle('visible');
            fieldSearch.focus();

            if (searchField.classList.contains('visible')) {
                document.getElementById('loup-icon').src = imageSrc2;
            } else {
                document.getElementById('loup-icon').src = imageSrc;
            }
        })
    }
});
