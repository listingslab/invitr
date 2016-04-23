function setupGlossary() {
	if (cms.mode == 'new'){
		setScreenTitle('New Glossary');
		initGlossaryEditors();
	}else{
		setScreenTitle('Edit Glossary');
		api ('/api/'+cms.slug, 'GET', apiCallbackGlossaryLoad);
	}

	$('.save').click(function() {
        // saveGlossary();
        console.log("saveGlossary");
        return false;
    });
}


function initGlossaryEditors(){
	cms.alloyEditor_en = AlloyEditor.editable('editor_en', cms.alloyConfig);
	cms.alloyEditor_zh = AlloyEditor.editable('editor_zh', cms.alloyConfig);
	$('#glossary-screen').show();
}


function apiCallbackGlossaryLoad(res){
	initGlossaryEditors();
	cms.doc = res.doc[0];
	$('#input_glossary_term_en').val(cms.doc.term_en);
	$('#input_glossary_term_zh').val(cms.doc.term_zh);
	$('#input_glossary_slug').val(cms.doc.slug);
	$('#input_glossary_pinyin').val(cms.doc.pinyin);
	$('#input_glossary_preview').val(cms.doc.preview);
	$('#input_glossary_showlink').prop('checked', cms.doc.showlink)
	cms.alloyEditor_en.get('nativeEditor').setData(cms.doc.en.b64decode());
    cms.alloyEditor_zh.get('nativeEditor').setData(cms.doc.zh.b64decode());
}

function saveGlossary() {
	if (validateGlossary()) {
		showOverlay();
		var payload = {
			type: 'introduction',
			term_en: $('#input_glossary_term_en').val(),
			term_zh: $('#input_glossary_term_zh').val(),
			slug: $('#input_glossary_slug').val(),
			oldSlug: cms.slug,
			pinyin: 'the pinyin code',
			preview: $('#input_glossary_preview').val(),
			showlink: $('#input_glossary_showlink').prop("checked"),
			en: cms.alloyEditor_en.get('nativeEditor').getData().b64encode(),
			zh: cms.alloyEditor_zh.get('nativeEditor').getData().b64encode()
		}
		if (cms.mode == 'new'){
			api ('/api/', 'POST', apiCallbackGlossaryLoad, payload);
		}else if (cms.mode == 'edit'){
			api ('/api/' + cms.slug, 'PUT', apiCallbackGlossaryLoad, payload);
		}
	}
}

function validateGlossary() {
	var feedbackMessage = '';
	return true;
}
