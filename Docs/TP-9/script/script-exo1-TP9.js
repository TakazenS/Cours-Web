const link = document.getElementById('link1');

link.addEventListener('mouseenter', () => {
    setTimeout(() => {
        document.getElementById('test1').style.display = "flex";
    }, 400);
});


link.addEventListener('mouseout', () => {
    document.getElementById('test1').style.display = "none";
});
