const motivosManuales = [
    // --- Empty Fields ---
    "Producto Stage Campo Vacío (Stage Product - Empty Field)",
    "Type Of testing Campo Vacío (Type of Testing - Empty Field)",
    "Style Campo Vacío (Style - Empty Field)",
    "Color Campo vacío (Color - Empty Field)",
    "Season Campo vacío (Season - Empty Field)",
    "Item Type Campo vacío (Item Type - Empty Field)",
    "RD Number Campo Vacío (RD Number - Empty Field)",
    "Campos Vacíos de Products To Be Tested (Products to Be Tested - Empty Fields)",
    "No Indica Test Status - Develoment o Production (Test Status Not Indicated - Development or Production)",
    "Campo Vacío Retail Market (Retail Market - Empty Field)",
    "Campo Vacío Destination Country (Destination Country - Empty Field)",
    "Campo Vacío Ship to Country (Ship-to Country - Empty Field)",
    "Channel Campo Vacío (Channel - Empty Field)",
    "YarnSize Campo vacío (Yarn Size - Empty Field)",
    "Peso Campo Vacío (Weight - Empty Field)",
    "Enlongation Campo vacío (Elongation - Empty Field)",
    "Finishing Campo vacío (Finishing - Empty Field)",

    // --- Discrepancies / Mismatches ---
    "Itended Age No es el mismo al de la muestra enviada (Intended Age Does Not Match the Age of the Sample Submitted)",
    "La Edad Escrita en la ETRF, no coincide con la muestra enviada (The Age Indicated on the ETRF Does Not Match the Sample Submitted)",
    "Sourcing Office incorrecta (Incorrect Sourcing Office)",
    "Season Viene más de una temporada (Season - More Than One Season Is Listed)",
    "Construction es diferente al de la muestra enviada (Construction Does Not Match the Sample Submitted)",
    "Peso debe coincidir con Fabric Details (Weight Must Match the Fabric Details)",
    "Construction debe coincidir con el Fabric Details (Construction Must Match the Fabric Details)",
    "Estilo de ETRF Additional no coincide con el Previo Full (ETRF Additional Style Does Not Match the Full Previo)",
    "Heat Transfer no coincide el color (Heat Transfer Color Does Not Match)",
    "ETRF indica más de un color y en muestra física solo contamos con un color (ETRF Indicates More Than One Color, but Only One Color Is Available in the Physical Sample)",
    "No Coincide el Fabric RD del Previo con la ETRF física (Fabric RD on the Previo Does Not Match the Physical ETRF)",
    "Style Description No corresponde a la muestra enviada (Style Description Does Not Match the Sample Submitted)",
    "La muestra es FABRIC y en la ETRF declaran GARMENT (The sample is FABRIC, but the ETRF indicates GARMENT)",
    "La Muestra es GARMENT y en la ETRF declaran FABRIC (The sample is GARMENT, but the ETRF indicates FABRIC)",
    "Los Estilos del PFAS no corresponden a los de la ETRF (The PFAS Styles Do Not Match Those on the ETRF)",
    "La Descripción del PFAS no corresponde al de la ETRF (The PFAS Description Does Not Match the ETRF)",
    "RD Number del PFAS no coincide con el RD Number de la ETRF (PFAS RD Number Does Not Match the RD Number on the ETRF)",

    // --- Missing Information ---
    "Aditional/no indica el Previo Full (Additional - Full Previo Not Indicated)",
    "Indidual Test/ No indica que pruebas (Individual Test - Tests Not Specified)",
    "Indicar que paquete Necesitan (Specify Which Package Is Needed)",
    "No indica fibra y/0 % (Fiber Content and/or Percentage Not Indicated)",
    "No indica instrucciones de lavado (Washing Instructions Not Indicated)",
    "Confirmar Vendor de Cobro/No indica (Billing Vendor Confirmation - Not Indicated)",
    "Validar a quién corresponde realizar el cobro (Verify Who Is Responsible for the Billing)",

    // --- Not Uploaded to the platform / Missing Items ---
    "Falta Reporte Previo de Care Label (Care Label Previous Report - Not Uploaded to the platform)",
    "Falta Reporte Previo de Heat Transfer (Heat Transfer Previous Report - Not Uploaded to the platform)",
    "Falta Reporte Previo de PO Label (PO Label Previous Report - Not Uploaded to the platform)",
    "Falta Reporte Previo de Woven Label (Woven Label Previous Report - Not Uploaded to the platform)",
    "Falta Reporte Previo de Size Label (Size Label Previous Report - Not Uploaded to the platform)",
    "Falta Reporte Previo de Print Development (Print Development Previous Report - Not Uploaded to the platform)",
    "Falta Reporte Previo de TRIM (TRIM Previous Report - Not Uploaded to the platform)",
    "Falta Reporte Previo de RFID (RFID Previous Report - Not Uploaded to the platform)",
    "Falta Reporte Previo de Fabric (Fabric Previous Report - Not Uploaded to the platform)",
    "Falta Reporte Previo de Trademark Label (Trademark Label Previous Report - Not Uploaded to the platform)",
    "Falta Reporte Previo de Etiqueta Extra o Promocional (Extra or Promotional Label Previous Report - Not Uploaded to the platform)",
    "Falta Documento de PFAS (PFAS Document - Not Uploaded to the platform)",
    "Falta Certificado de Fibra (Fiber Certificate - Not Uploaded to the platform)",
    "Falta Reporte Previo de Parches (Patches Previous Report - Not Uploaded to the platform)",
    "No cuenta con Labels / Etiquetas en la muestra física (Labels Not Included in the Physical Sample)",
    "No viene el Heat Transfer en la Muestra (Heat Transfer Not Included in the Sample)",
    
    // --- System / Others ---
    "Muestra insuficiente para TEST (Insufficient sample for TEST)",
    "Error de Sincronización/Remplazo de ETRF (Synchronization Error / ETRF Replacement)",
    "ETRF Duplicada (ETRF Duplicated)",
    "Archivos Previos Dañados – Requieren Nueva Carga (Corrupted Previous Files - New Upload Required)",
    "No se puede combinar paquetes. Solo es FULL o ADITIONAL (Packages Cannot Be Combined - Only FULL or ADDITIONAL)",
    "Selección de varios paquetes/Error (Multiple Package Selection / Error)",
    "Actualizar Versión de PFAS (Update PFAS Version)",
    "Actualizar Certificado de Fibra - Vencido (Update Fiber Certificate - Expired)"
];

let currentRejectionReasons = [];

function renderRejectionReasons() {
    const container = document.getElementById('rej-reasons-container');
    if (!container) return;
    
    if (currentRejectionReasons.length === 0) {
        container.innerHTML = '<div style="color:#ef4444; font-style:italic;">No reasons detected or added.</div>';
        return;
    }

    container.innerHTML = '';
    currentRejectionReasons.forEach((reason, index) => {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.alignItems = 'center';
        row.style.padding = '4px 0';
        row.style.borderBottom = '1px dashed #fca5a5';

        const textSpan = document.createElement('span');
        textSpan.textContent = reason;
        textSpan.style.flex = '1';
        
        const delBtn = document.createElement('button');
        delBtn.innerHTML = '&times;';
        delBtn.style.background = 'none';
        delBtn.style.border = 'none';
        delBtn.style.color = '#ef4444';
        delBtn.style.fontSize = '18px';
        delBtn.style.cursor = 'pointer';
        delBtn.style.fontWeight = 'bold';
        delBtn.style.padding = '0 5px';
        delBtn.style.marginLeft = '10px';
        delBtn.onclick = function() {
            currentRejectionReasons.splice(index, 1);
            renderRejectionReasons();
        };

        row.appendChild(textSpan);
        row.appendChild(delBtn);
        container.appendChild(row);
    });
}

const listaVendors = [
    "C SITE CO LTD_GAP ILS",
    "Shinwon Corp.",
    "Yakjin Trading Corporation",
    "HANSAE CO., LTD.",
    "Sae-A Trading, Co. Ltd - GAP",
    "Hybrid Promotions LLC",
    "The Willbes Dominicana Inc.",
    "Shinsung Tongsang Co., Ltd.",
    "Bay Island Sportwear S. De R.L. De C.V.",
    "Steve Selvin Associates, INC.",
    "MAD ENGINE GLOBAL LLC (Interlink)",
    "S&G S.A.",
    "THE WILLBES DOMINICANA INC. (Interlink)",
    "Makalot Industrial CO., LTD.",
    "Antex Knitting Mills, INC",
    "C.R Textil S.A.",
    "Pride Performance Fabrics (PPF)",
    "NORTHERN TEXTILES S.A. DE C.V",
    "CH Textiles.",
    "Cofaco Industries SAC",
    "YS CLARO, S.A."
];

function inicializarModalRechazos() {
    const dataList = document.getElementById('rej-manual-datalist');
    if (dataList && dataList.options.length === 0) {
        motivosManuales.forEach(motivo => {
            const option = document.createElement('option');
            option.value = motivo;
            dataList.appendChild(option);
        });
    }

    const vendorDataList = document.getElementById('rej-vendor-datalist');
    if (vendorDataList && vendorDataList.options.length === 0) {
        listaVendors.forEach(vendor => {
            const option = document.createElement('option');
            option.value = vendor;
            vendorDataList.appendChild(option);
        });
    }
}

function openRejectionModal() {
    // Clear Global Reasons
    currentRejectionReasons = [];
    const fieldsToCheck = [
        { id: 'd-test-status', name: 'Test Status' },
        { id: 'd-product-stage', name: 'Product Stage' },
        { id: 'd-type-testing', name: 'Type of Testing' },
        { id: 'd-intended-age', name: 'Intended Age' },
        { id: 'd-style-no', name: 'Style Number' },
        { id: 'd-rd-num', name: 'RD Number' },
        { id: 'd-season', name: 'Season' },
        { id: 'd-brand', name: 'Brand' },
        { id: 'd-vendor', name: 'Vendor' },
        { id: 'd-sourcing', name: 'Sourcing Office' }
    ];

    if (typeof textoExtraido !== 'undefined' && textoExtraido) {
        fieldsToCheck.forEach(f => {
            const el = document.getElementById(f.id);
            if (el && (el.classList.contains('missing') || el.textContent === '--' || el.textContent === 'Missing' || el.textContent === '')) {
                currentRejectionReasons.push('- ' + f.name + ' Campo Vacío / ' + f.name + ' - Empty Field');
            }
        });

        // Check PFAS Discrepancy
        const pfasResult = document.getElementById('resultados-pfas-container');
        if (pfasResult && pfasResult.innerHTML.includes('STYLE DISCREPANCY (FAIL)')) {
            currentRejectionReasons.push('- Estilos PFAS No Coinciden con ETRF / PFAS Styles - Do Not Match ETRF');
        }

        // Check Rejection Alerts panel
        const alertBox = document.getElementById('rejection-alerts');
        if (alertBox && alertBox.style.display !== 'none') {
            const lis = alertBox.querySelectorAll('li');
            lis.forEach(li => {
                const txt = li.textContent.trim();
                if (txt.includes('INVALID Sourcing Office')) {
                    const match = motivosManuales.find(m => m.includes('Sourcing Office Incorrecta'));
                    if (match && !currentRejectionReasons.includes('- ' + match)) currentRejectionReasons.push('- ' + match);
                } else if (txt.includes('MISSING')) {
                    let fieldName = txt.replace('MISSING', '').trim();
                    if (fieldName === 'Style No.') fieldName = 'Style Number';
                    else if (fieldName === 'Ship to Country') fieldName = 'Ship-to Country';
                    else if (fieldName === 'CARE INSTRUCTIONS' || fieldName === 'Care Instructions') {
                        if (!currentRejectionReasons.includes('- Care Instructions Campo Vacío / Care Instructions - Empty Field')) {
                            currentRejectionReasons.push('- Care Instructions Campo Vacío / Care Instructions - Empty Field');
                        }
                        return;
                    }
                    else if (fieldName === 'FIBER CONTENT' || fieldName === 'Fiber Content') {
                        if (!currentRejectionReasons.includes('- Fiber Content Campo Vacío / Fiber Content - Empty Field')) {
                            currentRejectionReasons.push('- Fiber Content Campo Vacío / Fiber Content - Empty Field');
                        }
                        return;
                    }
                    
                    const match = motivosManuales.find(m => m.toLowerCase().includes(fieldName.toLowerCase()) && m.includes('Campo Vacío'));
                    if (match && !currentRejectionReasons.includes('- ' + match)) {
                        currentRejectionReasons.push('- ' + match);
                    }
                }
            });
        }
    }

    // Render list
    renderRejectionReasons();
    
    // Set Vendor and Style
    const vendorEl = document.getElementById('d-vendor');
    let rawVendor = vendorEl ? vendorEl.textContent.trim() : '';
    
    // Partial Match Logic
    if (rawVendor && rawVendor !== '--' && rawVendor !== 'Missing') {
        const cleanStr = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
        const cleanRaw = cleanStr(rawVendor);
        if (cleanRaw) {
            const matched = listaVendors.find(v => cleanStr(v).includes(cleanRaw) || cleanRaw.includes(cleanStr(v)));
            if (matched) rawVendor = matched;
        }
    }

    document.getElementById('rej-vendor').value = rawVendor;

    const styleEl = document.getElementById('d-style-no');
    const rdEl = document.getElementById('d-rd-num');
    document.getElementById('rej-style').value = styleEl ? styleEl.textContent : '';
    const formIdEl = document.getElementById('d-form-id');
    document.getElementById('rej-form-id').value = formIdEl && formIdEl.textContent !== '--' ? formIdEl.textContent : (rdEl ? rdEl.textContent : '');

    const colorEl = document.getElementById('d-style-colors');
    document.getElementById('rej-color').value = colorEl ? colorEl.textContent : '';
    
    const descEl = document.getElementById('d-style-desc');
    document.getElementById('rej-desc').value = descEl ? descEl.textContent : '';

    // Extract Emails
    let extractedEmails = [];
    if (typeof textoExtraido !== 'undefined' && textoExtraido) {
        let extracted = typeof extractApplicantEmails === 'function' ? extractApplicantEmails(textoExtraido) : [];
        if (extracted.length === 0) {
            // Fallback just in case
            let sanitizedText = textoExtraido.replace(/[\u2013\u2014\u2015\u2212\u2010\u2011]/g, '-').replace(/[\u200B\u200C\u200D\uFEFF]/g, '');
            let fixedText = sanitizedText.replace(/\s*@\s*/g, '@').replace(/\s*\.\s*/g, '.').replace(/\s*-\s*/g, '-').replace(/\s*_\s*/g, '_');
            const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
            const matches = fixedText.match(emailRegex);
            if (matches) extracted = matches.map(e => e.toLowerCase());
        }
        
        if (extracted.length > 0) {
            // Autocorrect based on whitelist
            const emailWhitelist = ["8thbird@saea.com", "8thbird@sae-a.com", "accountingassistant_apayable.nt@sierratextiles.com", "alejandra.cardona@sierratextiles.com", "alejandra99@sae.com", "alejandra99@saea.com", "alejandra99@sae-a.com", "alejandrina@hansae.com", "alliekim@shinwon.com", "anamatias27@outlook.com", "angela.ghiorzo@intertek.com", "annakim@chtextile.com.gt", "annakim@chtextiles.com", "apayable.nt@sierratextiles.com", "aroldan@westtexapparel.com", "asegtextil01@cofaco.com", "asegtextil02@cofaco.com", "asistmod5@ni.hansae.com", "bayron_ramirez23@sae-a.com", "betty@antexknitting.com", "bona4012@sae-a.com", "boystest@c-site.co.kr", "bu1_d1_gap_womens_knits@yakjin.com", "byron@colorntouch.com", "cbkim@youngst.com", "cdiaz@ppf.com.hn", "ceciliagiron1@shinwon.com", "cesar.colindres27@saea.com", "cesar.colindres27@sae-a.com", "cesar.pardo@intertek.com", "cesar@hansae.com", "chelsea93@sae-a.com", "chloe.nguyen@yakjin.com", "chriskwon@chtextile.com.gt", "chriskwon@chtextiles.com.gt", "christian@ingprimavera.com", "cjlee@shinwon.com", "csiteteam@gmail.com", "ctj225@csite.co.kr", "ctj225@c-site.co.kr", "ctj225@-site.co.kr", "dahee.kang@yakjin.com", "daminguyen97@sae-a.com", "dami-nguyen97@sae-a.com", "daniel@csite.co.kr", "daphne-tran04@sae-a.com", "david.salguero@intertek.com", "dhkim@youngst.com", "doris95@sae-a.com", "dperalta@ppf.com.hn", "eden@yakjin.com", "estherdavila@shinwon.com", "eunhae.lee@yakjin.com", "evelyn@yakjin.com", "felipe@colorntouch.com", "fiona@hansae.com", "franciscorodriguez@makalot.com.tw", "fsnmerchandise1@shinwon.com", "fvelez@cofaco.com", "gap_mens_knit@yakjin.com", "gap_value_vn@hansae.com", "gpbsmplteam@shinwon.com", "gs_tgk@hansae.com", "gua5b_capm2@hansae.com", "guate_sales@yakjin.com", "guateboys@c-site.co.kr", "hailey_choi@c-site.co.kr", "ham103@sae-a.com", "hansae_ca@hansae.com", "hansae_gpx_womens@hansae.com", "henrypark@ssts.co.kr", "heosy0916-2@sae-a.com", "hisely.castillo@shinwon.com", "inah@hansae.com", "ineakim@hansae.com", "internalqc@madengine.com", "issac@hansae.com", "jadetran97@sae-a.com", "jade-tran97@sae-a.com", "jaesung.choi@yakjin.com", "javier1224@sae-a.com", "jazminchoi@kantex-gt.com", "jbkevin@c-site.co.kr", "jeehye0929@sae-a.com", "jennifergodinez@hansae.com", "jezebel.nguyen@yakjin.com", "jhyoo@youngst.com", "jichoi@c-site.co.kr", "jinkim@shinwon.com", "jk104@hansae.com", "jknoh@sae-a.com", "johnhan@shinwon.com", "jonathan.ajuchan@hansae.com", "jorge.avila@ssts-usa.com", "joseandresarriola@makalot.com.tw", "junijin@shinwon.com", "junni93@sae-a.com", "junnj03@sae-a.com", "jwkim7@shinwon.com", "jwoh@c-site.co.kr", "kangil1121@sae-a.com", "karen@colorntouch.com", "karen@hansae.com", "karen_lima@hansae.com", "kelly_hwang@c-site.co.kr", "kevin88@sae-a.com", "labqc.dataentry@sierratextiles.com", "leah_lee@c-site.co.kr", "leehb9129@sae-a.com", "leinalee@yakjin.com", "len1m7@sae-a.com", "leninm7@sae-a.com", "leo.choi@yakjin.com", "loudes92@sae.com", "lourdes92@saea.com", "lourdes92@sae-a.com", "lpaz@ppf.com.hn", "lsj88100@sae-a.com", "lucykiim@hansae.com", "luisrolando24@sae-a.com", "luke@c-site.co.kr", "mablelam92@sae.com", "mable-lam92@saea.com", "mable-lam92@sae-a.com", "manuel.lopez@intertek.com", "manuel@yakjin.com", "mariaperez@saea.com", "mariaperez@sae-a.com", "marlenileon1@shinwon.com", "mensdevelop2@c-site.co.kr", "michelle.park@yakjin.com", "min.kim@yakjin.com", "nel22@hansae.com", "nla.dataentry@sierratextiles.com", "nmiranda@westtexapparel.com", "norma.lozano@intertek.com", "on@dr.willbes.com", "onboy@c-site.co.kr", "onboys-vn@shinwon.com", "ongirl@c-site.co.kr", "onhaiti@willbes.com", "onmen@c-site.co.kr", "onmens@shinwon.com", "onmens_csite@c-site.co.kr", "ontbk@hansae.com", "onvtgk@shinwon.com", "onv-tgk@shinwon.com", "onwomens-basic@shinwon.com", "onwomens-gh@shinwon.com", "onwomens-gt@shinwon.com", "oscar.r@hansae.com", "oulloa@ppf.com.hn", "paul.flores@sierratextiles.com", "pespinoza@cofaco.com", "qasite2@intertek.com", "randalcordon9@sae-a.com", "rebecacastillo@hansae.com", "richardcho@chtextile.com.gt", "richardcho@chtextiles.com.gt", "rosselynmarian@shinwon.com", "roxana@colorntouch.com", "samplegpg@shinwon.com", "sandycumes0404@sae-a.com", "sangpyu.kim@yakjin.com", "seanpark@shinwon.com", "shirley.t@hansae.com", "silviaperez@chtextile.com.gt", "silviaperez@chtextiles.com.gt", "smart1223@sae-a.com", "sorilee@c-site.co.kr", "srd@dr.willbes.com", "srdcpsia@willbes.com", "srdtest@willbes.com", "ssts_sales03@sstca.com", "ssts_sales03@sstsca.com", "ssts_sales26@sstca.com", "ssts_sales26@sstsca.com", "sunmin328_2@sae-a.com", "test@c-site.co.kr", "textiles.cs1@sierratextiles.com", "thomas@yakjin.com", "tinayang@makalot.com.tw", "tira96@sae-a.com", "tom.cho@yakjin.com", "tonykim@kantex-gt.com", "vhernandez@sstsca.com", "victoria.pham@yakjin.com", "viviramirez@c-site.co.kr", "wendy.s@hansae.com", "wendy20@sae-a.com", "wespark@sae-a.com", "wj.kang@kantexgt.com", "wj.kang@kantex-gt.com", "ximenaperez31@chtextile.com.gt", "ximenaperez31@chtextiles.com.gt", "yeimi@chtextiles.com.gt", "yeimisuruy@chtextile.com.gt", "yejin.um@yakjin.com", "yenifer.vasquez@shinwon.com", "ysclaro-ventas@youngst.com", "yuly@willbes.com", "yunajeon@shinwon.com", "zuri@c-site.co.kr", "zury.uluan@colorntouch.com"];
            
            extracted = extracted.map(ext => {
                const match = emailWhitelist.find(wl => wl.startsWith(ext));
                return match ? match : ext;
            });

            extractedEmails = [...new Set(extracted)];
        }
    }
    // OVERRIDE PARA COFACO
    if (rawVendor.toUpperCase().includes('COFACO')) {
        document.getElementById('rej-emails').value = 'angela.ghiorzo@intertek.com; norma.lozano@intertek.com';
    } else {
        if (extractedEmails.length > 0) {
            document.getElementById('rej-emails').value = extractedEmails.join('; ');
        } else {
            document.getElementById('rej-emails').value = '';
        }
    }

    // Init dropdown and open modal
    inicializarModalRechazos();
    // Reset selection
    const manualSelect = document.getElementById('rej-manual-select');
    manualSelect.value = '';
    
    // Bind listener for when an item is selected from datalist
    if (!manualSelect.hasAttribute('data-listener-attached')) {
        manualSelect.addEventListener('change', function() {
            if (this.value) {
                const val = '- ' + this.value;
                if (!currentRejectionReasons.includes(val)) {
                    currentRejectionReasons.push(val);
                    renderRejectionReasons();
                }
                this.value = '';
            }
        });
        manualSelect.setAttribute('data-listener-attached', 'true');
    }
    
    document.getElementById('rej-status').innerHTML = '';
    document.getElementById('rejectionModal').style.display = 'block';
}

function closeRejectionModal() {
    document.getElementById('rejectionModal').style.display = 'none';
}

async function submitRejectionToPA(skipAuth = false) {
    const btn = document.getElementById('btnSubmitRejection');
    const statusDiv = document.getElementById('rej-status');
    
    // Siempre pedir contraseña al registrar un rechazo (como firma digital)
    if (!skipAuth) {
        window.pendingAction = () => submitRejectionToPA(true);
        const modal = document.getElementById('passwordModal');
        modal.style.display = 'flex';
        document.getElementById('trackerPasswordInput').value = '';
        document.getElementById('passwordError').style.display = 'none';
        setTimeout(() => document.getElementById('trackerPasswordInput').focus(), 100);
        return;
    }

    if (currentRejectionReasons.length === 0) {
        statusDiv.innerHTML = '<span style="color:#ef4444;">You must have at least one rejection reason in the list.</span>';
        return;
    }
    // Reemplazamos el "- " inicial por nada para que Excel guarde solo el texto limpio
    const allReasons = currentRejectionReasons.map(r => '• ' + r.replace(/^- /, '')).join('\n');

    const payload = {
        fechaRechazo: new Date().toLocaleDateString('en-GB'),
        sitio: 'ITKSITE2',
        tecnico: currentUser,
        formId: document.getElementById('rej-form-id').value,
        color: document.getElementById('rej-color').value,
        style: document.getElementById('rej-style').value,
        description: document.getElementById('rej-desc').value,
        vendor: document.getElementById('rej-vendor').value,
        reason: allReasons.trim(),
        correos: document.getElementById('rej-emails').value
    };

    btn.disabled = true;
    btn.textContent = 'Sending...';
    statusDiv.innerHTML = '<span style="color:#f59e0b;">Connecting to Power Automate...</span>';

    const paUrl = 'https://defaultcec3b02aea8c40eda66fa89023ac32.86.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/2f329147593e403d9ad5d9d2eeaa9e6c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=g0XcUTYteMT0sOupvlIf6wLCo7I2QOPUmIZhzJHxrXs'; 

    try {
        const response = await fetch(paUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (response.ok) {
            statusDiv.innerHTML = '<span style="color:#10b981; font-weight:bold;">Rejection successfully logged and email sent!</span>';
            setTimeout(closeRejectionModal, 2000);
        } else {
            statusDiv.innerHTML = '<span style="color:#ef4444;">Power Automate Error: ' + response.statusText + '</span>';
        }
    } catch (error) {
        statusDiv.innerHTML = '<span style="color:#ef4444;">Network Error: ' + error.message + '</span>';
    }
    
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = 'Submit Rejection <i class="fas fa-paper-plane" style="margin-left:5px;"></i>';
    }, 2000);
}

