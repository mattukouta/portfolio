function drawerClose(pageName) {
    // Navigation Drawerを閉じる
    document.getElementById('navInput').checked = false;

    // document.getElementById(pageName + 'BackgroundColor').style.backgroundColor = '#5ab4bd';


    // 表示するContentの切り替え
    var introductionPage = document.getElementById("introductionContent");
    var activityPage = document.getElementById("activityContent");
    var productionPage = document.getElementById("productionContent");
    var linkPage = document.getElementById("linkContent");

    var introductionBackgroundColor = document.getElementById('introductionBackgroundColor');
    var activityBackgroundColor = document.getElementById('activityBackgroundColor');
    var productionBackgroundColor = document.getElementById('productionBackgroundColor');
    var linkBackgroundColor = document.getElementById('linkBackgroundColor');

    switch (pageName) {
        case "introduction":
            introductionPage.style.display = 'block';
            introductionBackgroundColor.style.backgroundColor = '#5ab4bd';
            activityPage.style.display = 'none';
            activityBackgroundColor.style.backgroundColor = '#363434';
            productionPage.style.display = 'none';
            productionBackgroundColor.style.backgroundColor = '#363434';
            linkPage.style.display = 'none';
            linkBackgroundColor.style.backgroundColor = '#363434';
            break;

        case "activity":
            introductionPage.style.display = 'none';
            introductionBackgroundColor.style.backgroundColor = '#363434';
            activityPage.style.display = 'block';
            activityBackgroundColor.style.backgroundColor = '#5ab4bd';
            productionPage.style.display = 'none';
            productionBackgroundColor.style.backgroundColor = '#363434';
            linkPage.style.display = 'none';
            linkBackgroundColor.style.backgroundColor = '#363434';
            break;

        case "production":
            introductionPage.style.display = 'none';
            introductionBackgroundColor.style.backgroundColor = '#363434';
            activityPage.style.display = 'none';
            activityBackgroundColor.style.backgroundColor = '#363434';
            productionPage.style.display = 'block';
            productionBackgroundColor.style.backgroundColor = '#5ab4bd';
            linkPage.style.display = 'none';
            linkBackgroundColor.style.backgroundColor = '#363434';
            break;

        case "link":
            introductionPage.style.display = 'none';
            introductionBackgroundColor.style.backgroundColor = '#363434';
            activityPage.style.display = 'none';
            activityBackgroundColor.style.backgroundColor = '#363434';
            productionPage.style.display = 'none';
            productionBackgroundColor.style.backgroundColor = '#363434';
            linkPage.style.display = 'block';
            linkBackgroundColor.style.backgroundColor = '#5ab4bd';
            break;
    }
}