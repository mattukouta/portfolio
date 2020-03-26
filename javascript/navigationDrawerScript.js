function drawerClose(pageName) {
    document.getElementById('navInput').checked = false;

    var introductionPage = document.getElementById("introductionContent")
    var activityPage = document.getElementById("activityContent")
    var productionPage = document.getElementById("productionContent")
    var linkPage = document.getElementById("linkContent")

    switch (pageName) {
        case "introduction":
            introductionPage.style.display = 'block';
            activityPage.style.display = 'none';
            productionPage.style.display = 'none';
            linkPage.style.display = 'none';
            break;

        case "activity":
            introductionPage.style.display = 'none';
            activityPage.style.display = 'block';
            productionPage.style.display = 'none';
            linkPage.style.display = 'none';
            break;

        case "production":
            introductionPage.style.display = 'none';
            activityPage.style.display = 'none';
            productionPage.style.display = 'block';
            linkPage.style.display = 'none';
            break;

        case "link":
            introductionPage.style.display = 'none';
            activityPage.style.display = 'none';
            productionPage.style.display = 'none';
            linkPage.style.display = 'block';
            break;
    }
}