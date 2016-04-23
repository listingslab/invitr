function setupGuide() {
	if (cms.mode == 'new'){
		setScreenTitle('New Guide');
		initGuideEditors();
	}else{
		setScreenTitle('Edit Guide');
		api ('/api/'+cms.slug, 'GET', apiCallbackGuideLoad);
	}

	$('.save').click(function() {
        // saveGuide();
        console.log("saveGuide");
        return false;
    });
}


function initGuideEditors(){
	cms.alloyEditor_en = AlloyEditor.editable('editor_en', cms.alloyConfig);
	cms.alloyEditor_zh = AlloyEditor.editable('editor_zh', cms.alloyConfig);
	$('#guide-screen').show();
}


function apiCallbackGuideLoad(res){
	initGuideEditors();
	cms.doc = res.doc[0];
	$('#input_guide_term_en').val(cms.doc.term_en);
	$('#input_guide_term_zh').val(cms.doc.term_zh);
	$('#input_guide_slug').val(cms.doc.slug);
	$('#input_guide_pinyin').val(cms.doc.pinyin);
	$('#input_guide_preview').val(cms.doc.preview);
	$('#input_guide_showlink').prop('checked', cms.doc.showlink)
	cms.alloyEditor_en.get('nativeEditor').setData(cms.doc.en.b64decode());
    cms.alloyEditor_zh.get('nativeEditor').setData(cms.doc.zh.b64decode());
}

function saveGuide() {
	if (validateGuide()) {
		showOverlay();
		var payload = {
			type: 'guide',
			term_en: $('#input_guide_term_en').val(),
			term_zh: $('#input_guide_term_zh').val(),
			slug: $('#input_guide_slug').val(),
			oldSlug: cms.slug,
			pinyin: 'the pinyin code',
			preview: $('#input_guide_preview').val(),
			showlink: $('#input_guide_showlink').prop("checked"),
			en: cms.alloyEditor_en.get('nativeEditor').getData().b64encode(),
			zh: cms.alloyEditor_zh.get('nativeEditor').getData().b64encode()
		}
		if (cms.mode == 'new'){
			api ('/api/', 'POST', apiCallbackGuideLoad, payload);
		}else if (cms.mode == 'edit'){
			api ('/api/' + cms.slug, 'PUT', apiCallbackGuideLoad, payload);
		}
	}
}

function validateGuide() {
	var feedbackMessage = '';
	return true;
}
