// Ottieni l'elemento img
const imgElement = document.getElementById('podioImage');

function changeImageByPodio(podioPosition) {
    let imageURL;
    switch (podioPosition) {
        case 1:
            imageURL = 'https://cdn.rtfkt.com/assets/images/creatorChallenge/creator1.png'; 
            break;
        case 2:
            imageURL = 'https://cdn.rtfkt.com/assets/images/creatorChallenge/creator2.png'; 
            break;
        case 3:
            imageURL = 'https://cdn.rtfkt.com/assets/images/creatorChallenge/creator3.png'; 
            break;
        default:
            imageURL = ''; 
            break;
    }
    imgElement.src = imageURL;
}

function restoreImage() {
    imgElement.src = 'https://cdn.rtfkt.com/assets/images/creatorChallenge/creator1.png';
}
