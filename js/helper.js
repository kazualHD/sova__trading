const popup = document.querySelector('#modal');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector("body");
const btn = document.querySelector(".btn");

function showPopup() {
    if (body != null) {
        body.classList.add("blocked");
    }

    if (popup != null) {
        popup.classList.add("_active");
    }
}

document.addEventListener('click', function(e) {
    if (popup != null) {
        if (!wrapper.contains(e.target)) {
            if (popup != null) {
                popup.classList.remove("_active");
            }

            if (body != null) {
                body.classList.remove("blocked");
            }

        }
    }
});

document.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("call submit event");
});
