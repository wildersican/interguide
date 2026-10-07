const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function extractText() {
    const data = new Uint8Array(fs.readFileSync('bom.pdf'));
    const pdf = await pdfjsLib.getDocument({data: data}).promise;
    let found = false;
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        let items = textContent.items;
        
        for (let i = 0; i < items.length; i++) {
            if (items[i].str.trim() === '291381') {
                let descItems = [];
                for (let j = i + 1; j < items.length && j < i + 60; j++) {
                    if (/^\d{6,9}$/.test(items[j].str.trim())) break;
                    descItems.push(items[j].str);
                }
                console.log('WINDOW TEXT FOR 291381:', descItems.join(' '));
                found = true;
            }
        }
    }
}
extractText().catch(console.error);
