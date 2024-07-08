function onOpen(e) {
    DocumentApp.getUi()
        .createAddonMenu()
        .addItem('Insert WebP Image', 'showSidebar')
        .addToUi();
}

function showSidebar() {
    var html = HtmlService.createHtmlOutputFromFile('Sidebar')
        .setTitle('Insert WebP Image')
        .setWidth(300);
    DocumentApp.getUi().showSidebar(html);
}

function insertImage(dataUrl) {
    var doc = DocumentApp.getActiveDocument();
    var body = doc.getBody();
    
    var blob = Utilities.newBlob(Utilities.base64Decode(dataUrl.split(',')[1]), 'image/png', 'image.png');
    body.appendImage(blob);
}
