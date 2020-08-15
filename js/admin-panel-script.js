[...document.getElementsByClassName('open-oder-details')].forEach((element) => {
    element.addEventListener('click', () => {
        document.getElementById('order-detail').className = 'order-detail-animation-show';
        document.getElementById('order-detail').style.display = 'block';
    });
});

document.getElementById('hide-order-detail').addEventListener('click', () => {
    document.getElementById('order-detail').className = 'order-detail-animation-hide';
    setTimeout(() => {
        document.getElementById('order-detail').style.display = 'none';
    }, 1000);
});