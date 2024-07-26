function onOpen(e) {
    const ui = SlidesApp.getUi();
    ui.createAddonMenu()
        .addItem('Insert WebP Image', 'openFilePicker')
        .addToUi();
}


function openFilePicker() {
    var html = HtmlService.createHtmlOutputFromFile('filepicker')
        .setWidth(400)
        .setHeight(300);
    const ui = SlidesApp.getUi();
    ui.showModalDialog(html, 'Select a WebP Image');
}


function insertImage(dataUrl) {
    const presentation = SlidesApp.getActivePresentation();
    const slide = presentation.getSlides()[0];
    const blob = Utilities.newBlob(Utilities.base64Decode(dataUrl.split(',')[1]), 'image/png', 'image.png');
    slide.insertImage(blob);
}
