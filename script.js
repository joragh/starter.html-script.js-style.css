function contactMessage() {
    alert("Na kontaktoni në 045 131 082 📞");
}
window.onload = function() {
    alert("Mirësevini në Laundry Service 🧺✨");
};
document.title = "Pastrim kimik 🧼";

/* Before/After slider interaction */
function initBeforeAfter(){
    const slider = document.querySelector('.ba-slider');
    if(!slider) return;
    const overlay = slider.querySelector('.ba-overlay');
    const handle = slider.querySelector('.ba-handle');
    const range = slider.querySelector('.ba-range');

    function setPercent(p){
        p = Math.max(0, Math.min(100, p));
        overlay.style.width = p + '%';
        handle.style.left = p + '%';
        if(range) range.value = Math.round(p);
        handle.setAttribute('aria-valuenow', Math.round(p));
    }

    let dragging = false;

    function pointerMove(clientX){
        const rect = slider.getBoundingClientRect();
        const pos = clientX - rect.left;
        const pct = (pos / rect.width) * 100;
        setPercent(pct);
    }

    handle.addEventListener('pointerdown', e => {
        dragging = true;
        handle.setPointerCapture(e.pointerId);
    });

    window.addEventListener('pointermove', e => {
        if(!dragging) return;
        pointerMove(e.clientX);
    });

    window.addEventListener('pointerup', e => { dragging = false; });

    slider.addEventListener('pointerdown', e => { pointerMove(e.clientX); });

    if(range){
        range.addEventListener('input', e => { setPercent(e.target.value); });
    }

    handle.addEventListener('keydown', e => {
        const step = e.shiftKey ? 10 : 2;
        let cur = parseInt(handle.getAttribute('aria-valuenow') || 50, 10);
        if(e.key === 'ArrowLeft' || e.key === 'ArrowDown') { cur -= step; setPercent(cur); e.preventDefault(); }
        if(e.key === 'ArrowRight' || e.key === 'ArrowUp') { cur += step; setPercent(cur); e.preventDefault(); }
    });

    // initial
    setPercent(50);
}

document.addEventListener('DOMContentLoaded', initBeforeAfter);
