const trimDictionary = [
    { normal: 'MAIN LABEL', regex: /MAIN\s*[-_]?\s*LABEL/i },
    { normal: 'CARE LABEL', regex: /CARE\s*[-_]?\s*LABEL/i },
    { normal: 'RFID', regex: /RFID/i },
    { normal: 'HEAT TRANSFER', regex: /HEAT\s*[-_]?\s*TRANSFER|HTF/i },
    { normal: 'T-LABEL', regex: /T\s*[-_]?\s*LABEL/i },
    { normal: 'JOKER LABEL', regex: /JOKER\s*[-_]?\s*LABEL/i },
    { normal: 'PO LABEL', regex: /PO\s*[-_]?\s*LABEL/i },
    { normal: 'MOBILON', regex: /MOBILON/i },
    { normal: 'WOVEN LABEL', regex: /WOVEN\s*[-_]?\s*(LABEL|END\s*[-_]?\s*FOLD)/i }
];

let stitchedText = "RD1034915 HTF LABEL MAIN NONE"; // or similar
let targetSection = 'TRIM';

let descText = ""; // suppose it wasn't found in descItems

let cleanFile = stitchedText
    .replace(/((?:GUAT|GUBT|KORT|JKTT|VNMT)[\d\-]+|\(\d{4}\)\s*\d{3}\s*[-]?\s*\d{4}|TRM-[A-Z0-9_]+|\b\d{10,12}\b)/ig, '')
    .replace(/\b(?:rd\s*#?|article\s*#?)?\s*\d{5,}\b/ig, '')
    .replace(/\(version\s*\d+\)/ig, '') 
    .replace(/\.pdf|\.doc|\.docx|\.xls|\.xlsx/ig, '')
    .replace(/\b[pP]\s*[dD]\s*[fF]\b|\b[dD]\s*[oO]\s*[cC]\s*[xX]?\b|\b[xX]\s*[lL]\s*[sS]\s*[xX]?\b/ig, '')
    .replace(/\b(?=[A-Z0-9]*\d)(?=[A-Z0-9]*[A-Z])[A-Z0-9]{6,}\b/ig, '')
    .replace(/\b\d+\b/g, '')
    .replace(/\b(type|file|name|document|form|no|r-pac|pac|sml|international|trim|trims|report|reports|rpt|certifier|certifiers|coc|cocs|test|testing|vendor|sourced|nom|nominated|mill|fabric|fabrics|rev|r\d+|v\d+|final|signed|approved|copy|certificado|cert|stamp|stamped|corresponding|address|must|be|indicated|review|without|section|upload|received|from|important|supplier|suppliers|accepted|party|submitted|certificate|certificates|compliance|pdf|doc|docx|xls|xlsx|none|n\/?a)\b/ig, '')
    .replace(/_/g, ' ')
    .replace(/^[\.\,\;\:\(\)\*\#\-\/]+|[\.\,\;\:\(\)\*\#\-\/\s]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();

console.log("CleanFile:", cleanFile);

descText = cleanFile.toUpperCase();

if (targetSection === 'TRIM') {
    if (descText.includes('HTF')) {
        descText = 'HEAT TRANSFER';
    } else {
        for (const entry of trimDictionary) {
            if (entry.regex.test(descText)) {
                descText = entry.normal;
                break;
            }
        }
    }
}

console.log("Final descText:", descText);

