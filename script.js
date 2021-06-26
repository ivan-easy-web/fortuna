

const header = $(".header")

let isVisible
if (header.css("max-height") == "317px") {
    isVisible = true
}

$('#menu-button').click(() => {
    if (isVisible) {
        header.animate({"max-height": "124px"},"fast")
    } else {
        header.animate({"max-height": "317px"},"fast")
    }
    isVisible  = !isVisible 
})