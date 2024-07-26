function onOpen(e) {
    const ui = SpreadsheetApp.getUi();
    ui.createAddonMenu()
        .addItem('Insert WebP Image', 'openFilePicker')
        .addToUi();
}


function openFilePicker() {
    var html = HtmlService.createHtmlOutputFromFile('filepicker')
        .setWidth(400)
        .setHeight(300);
    const ui = SpreadsheetApp.getUi();
    ui.showModalDialog(html, 'Select a WebP Image');
}


function insertImage(dataUrl) {
    Logger.log(`call func`);
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    const blob = Utilities.newBlob(Utilities.base64Decode(dataUrl.split(',')[1]), 'image/png', 'image.png');
    Logger.log(`Blob size: ${blob.getBytes().length / 1024**2}MB`);
    const cell = sheet.getActiveCell();
    sheet.insertImage(blob, 1, 1);
}
