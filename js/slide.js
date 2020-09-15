---
---

window.onload = (e) => {
    const back = document.getElementById("back");
    const forward = document.getElementById("forward");
    window.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowRight') {
            console.log('a');
            forward.click();
        } else if (e.key == 'ArrowLeft') {
            console.log('b');
            back.click();
        }
    })
}
