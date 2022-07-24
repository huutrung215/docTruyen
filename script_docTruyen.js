// Progress bar
document.addEventListener("DOMContentLoaded", function () {
    const progressBarInner = document.querySelector('.bar-long');
    window.addEventListener('scroll', function () {
        let h = document.documentElement;
        let st = h.scrollTop || document.body.scrollTop;
        let sh = h.scrollHeight || document.body.scrollHeight;
        let percent = st / (sh - h.clientHeight) * 100;
        let roundedPercent = Math.round(percent);
        progressBarInner.style.width = percent + "%";
        progressBarInner.innerText = roundedPercent + "%";
    });
});

const unfllow = document.querySelector('.follow-btn');
const unliked = document.querySelector('.liked-btn');

let clicked = false;
unfllow.addEventListener('click', () => {
    if (!clicked) {
        clicked = true;
        document.querySelector('.follow-btn').innerHTML = '<i class="ti-heart"></i>BỎ THEO DÕI';
    } else {
        clicked = false;
        document.querySelector('.follow-btn').innerHTML = '<i class="ti-heart"></i>THEO DÕI';
    }
});

unliked.addEventListener('click', () => {
    if (!clicked) {
        clicked = true;
        document.querySelector('.liked-btn').innerHTML = '<i class="ti-heart"></i>BỎ THÍCH';
    } else {
        clicked = false;
        document.querySelector('.liked-btn').innerHTML = '<i class="ti-heart"></i>THÍCH';
    }
});


//Comments


const showContainers = document.querySelectorAll(".show-replies");

showContainers.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        let parentContainer = e.target.closest(".comment-container");
        let _id = parentContainer.id;
        if (_id) {
            let childrenContainer = parentContainer.querySelectorAll(
                `[dataset=${_id}]`
            );
            childrenContainer.forEach((child) => child.classList.toggle("opened"));
        }
    })
);

const replies = document.querySelectorAll(".js-comment");
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');


// hàm hiển thị ô để comment
function commentContainer() {
    modal.classList.add('open');
}


// hàm ẩn ô để comment
function hideCommentContainer() {
    modal.classList.remove('open');
}

for (const reply of replies) {
    reply.addEventListener('click', commentContainer);
}

modalClose.addEventListener('click', hideCommentContainer);

modal.addEventListener('click', hideCommentContainer);

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Đọc thêm

const parentContainer =  document.querySelector('.description');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Đọc Thêm') ? "Rút Gọn..." : "Đọc Thêm...";

});




