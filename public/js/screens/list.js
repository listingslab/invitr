function setupList() {
	$('#top-save').hide();
	if (cms.type === undefined || cms.type === 'all'){
		setScreenTitle( 'All Items' );
	}else{
		var theType = capitaliseFirstLetter(cms.type)
		setScreenTitle( theType + ' Items');
	}
	apiCallList(cms.type);
}

function apiCallList(filterType, filterProcess) {
	$('#list-table').html('');
	api ('/api/', 'GET', apiCallbackList);
}

function apiDelete(slug) {
	api ('/api/'+slug, 'DELETE', apiCallbackDelete);
}

function apiCallbackDelete(res){
	var assignUrl = '/?&alert=delete-success';
	window.location.assign(assignUrl);
}

function apiCallbackList(res){
	var docs = res.docs;
	docs.sort(SortByTime);
	var filterType = false;
	var filterProcess = false;
	if (cms.type !== undefined){
		filterType = cms.type; 
	}
	if (cms.process !== undefined){
		filterProcess = cms.process; 
	}
	if (docs.length > 0){
		var tableHTML = '<table class="table table-striped">';
		tableHTML += `
		<thead>
	      <tr>
	        <th>Title</th>
	        <th>Process</th>
	        <th>Type</th>
	        <th>Slug</th>
	        <th>Updated</th>
	        <th width="100"></th>
	      </tr>
	    </thead>
	    <tbody>`;
		for (var i=0; i < docs.length; i++){
			var showThisDoc = true;
			if (filterType !== false){
				if (docs[i].type !== filterType){
					showThisDoc = false;
				}
			}
			if (filterProcess !== false){
				if (docs[i].process !== filterProcess){
					showThisDoc = false;
				}
			}
			if (showThisDoc){
				var title = docs[i].title;
				var type = docs[i].type;
				var slug = docs[i].slug;
				var preview = docs[i].preview;
				var updated;
				var process = '';
				if (docs[i].process != undefined){
					process = docs[i].process;
				}
				if (docs[i].meta.updated == undefined){
					updated = moment(docs[i].meta.created).fromNow();
				}else{
					updated = moment(docs[i].meta.updated).fromNow();
				}
				
				tableHTML += `
						      <tr>
						      	<td><a href="?type=`+ type +`&mode=edit&slug=`+ slug +`">` + title + `</a></td>
						        <td><a href="?process=`+ process +`">` + process + `</a></td>
						        <td><a href="?type=`+ type +`">` + type + `</a></td>
						        <td>` + slug + `</td>
						        <td>` + updated + `</td>
						      	<td>

				<a href="` + preview + `" target="_blank" class="btn btn-default" title="Preview '` + title + `'">
				    <span class="glyphicon glyphicon-share"></span>
				</a>

				<a href="#" id="` + slug + `" class="delete btn btn-default" title="Delete '` + title + `'">
				    <span class="glyphicon glyphicon-trash"></span>
				</a>
						      	</td>
						        
						      </tr>
						    `;
			}
		}
		tableHTML += '</tbody></table>';
		$('#list-table').html(tableHTML);
		$('.delete').click(function(but) {
	        alertMessge('warning', `<p>Are you sure you want to delete this? This cannot be undone.</p>
	            <p>
	            <a href="#" id="cancel_delete" class="btn btn-warning">Cancel</a>
	            <a href="#" id="do_delete" id="` + slug + `" class="btn btn-danger">Delete</a>
	            </p>
	            `);
	        $('#cancel_delete').click(function() {
	            fadeAlertMessge();
	            return false;
	        });
	        $('#do_delete').click(function() {
	        	apiDelete(but.currentTarget.id)
	            return false;
	        });
	        return false;
	    });
    }
}
