const accordionContent = document.querySelectorAll(".accordion-content");
const accordionContentFaq = document.querySelectorAll(".accordion-content-faq");

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".faq");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("bxs-chevron-down", "bx-minus");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("bx-minus", "bxs-chevron-down");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })

    function removeOpen(index1) {
        accordionContent.forEach((item2, index2) => {
            if (index1 != index2) {
                item2.classList.remove("open");

                let des = item2.querySelector(".description");
                des.style.height = "0px";
                item2.querySelector("i").classList.replace("bx-minus", "bxs-chevron-down");
            }
        })
    }
})

accordionContentFaq.forEach((item, index) => {
    let header = item.querySelector(".faq");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("bx-plus", "bx-minus");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("bx-minus", "bx-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })

    function removeOpen(index1) {
        accordionContentFaq.forEach((item2, index2) => {
            if (index1 != index2) {
                item2.classList.remove("open");

                let des = item2.querySelector(".description");
                des.style.height = "0px";
                item2.querySelector("i").classList.replace("bx-minus", "bx-plus");
            }
        })
    }
})
