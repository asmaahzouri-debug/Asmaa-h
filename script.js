// =========================
// WEBSITE NAME
// =========================

const websiteName = document.getElementById("websiteName");
const previewName = document.getElementById("previewName");

websiteName.addEventListener("input", function () {
    previewName.textContent = websiteName.value || "My Portfolio";
});


// =========================
// COLORS
// =========================

const colors = document.querySelectorAll(".color");

colors.forEach(function (color) {

    color.addEventListener("click", function () {

        const selectedColor =
            getComputedStyle(color).backgroundColor;

        document.documentElement.style.setProperty(
            "--main-color",
            selectedColor
        );

    });

});


// =========================
// FONT
// =========================

const fontSelect = document.getElementById("font");
const websitePreview = document.querySelector(".website-preview");

fontSelect.addEventListener("change", function () {
    websitePreview.style.fontFamily = fontSelect.value;
});
// =========================
// WEBSITE TYPE
// =========================

const types = document.querySelectorAll(".type");

const heroTitle = document.querySelector(".hero h1");
const heroSubtitle = document.querySelector(".hero h3");
const heroDescription = document.querySelector(".hero-text p:nth-of-type(2)");

types.forEach(function (type) {

    type.addEventListener("click", function () {

        // تغيير الزر المحدد
        types.forEach(function (item) {
            item.classList.remove("active");
        });

        type.classList.add("active");


        // معرفة النوع المختار
        const selectedType = type.textContent.trim();


        // تغيير محتوى الـ Preview
        if (selectedType === "Portfolio") {

            heroTitle.textContent = "Asmaa";
            heroSubtitle.textContent = "Web Developer & Creative Thinker";
            heroDescription.textContent =
                "I create beautiful and functional websites using HTML, CSS and JavaScript.";

        } else if (selectedType === "Store") {

            heroTitle.textContent = "My Store";
            heroSubtitle.textContent = "Discover Our Products";
            heroDescription.textContent =
                "Explore our collection and find something you love.";

        } else if (selectedType === "Restaurant") {

            heroTitle.textContent = "My Restaurant";
            heroSubtitle.textContent = "Delicious Food & Great Moments";
            heroDescription.textContent =
                "Enjoy delicious meals made with fresh ingredients.";

        } else if (selectedType === "Business") {

            heroTitle.textContent = "My Business";
            heroSubtitle.textContent = "Professional Solutions";
            heroDescription.textContent =
                "We provide creative and professional solutions for your business.";

        }

    });

});



// =========================
// SECTIONS
// =========================

const checkboxes = document.querySelectorAll(".sections input");

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        const sectionId =
            checkbox.parentElement.textContent
            .trim()
            .toLowerCase();

        const section = document.getElementById(sectionId);

        if (section) {
            section.style.display =
                checkbox.checked ? "" : "none";
        }

    });

});


// =========================
// GENERATE BUTTON
// =========================

const generateButton = document.querySelector(".generate");

generateButton.addEventListener("click", function () {

    generateButton.textContent =
        "✓ Website Generated!";

    setTimeout(function () {

        generateButton.textContent =
            "✨ Generate Website";

    }, 2000);

});