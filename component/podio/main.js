const $podio__first = document.querySelector('podio__first')
// const $podio__first2 = document.querySelector('podio__first2')
// const $podio__first3 = document.querySelector('podio__first3')

$podio__first.addEventListener('mouseenter', (item) => {
    let a  = item.a;
    if(a.classList.contains('podio__first')){
        const id = a.dataset.id;
        $podio__image1.src='https://cdn.rtfkt.com/assets/images/creatorChallenge/creator1.png';
    }
})

$podio__first.addEventListener('mouseleave', (item) => {
    let a  = item.a;
    if(a.classList.contains('podio__first')){
        const id = a.dataset.id;
        $podio__image1.src='https://cdn.rtfkt.com/assets/images/creatorChallenge/creator1.png';
    }
})