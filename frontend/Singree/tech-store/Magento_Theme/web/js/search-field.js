define([], function(){
    return function () {
        let loup = document.querySelector('#search-icon'),
            searchField = document.querySelector('.block-search'),
            search = 'loup',
            replaceWith = 'close',
            imageSrc = document.getElementById("loup-icon").getAttribute('src').split(replaceWith).join(search),
            imageSrc2 = document.getElementById("loup-icon").getAttribute('src').split(search).join(replaceWith)

        loup.addEventListener('click', () => {
            searchField.classList.toggle('visible');

            if (searchField.classList.contains('visible')) {
                document.getElementById("loup-icon").src = imageSrc2;
            } else {
                document.getElementById("loup-icon").src = imageSrc;
            }
        })
    }
});
