function refresh_api_cache()
{
	// Cache Regions first
	var details = {
        method: 'GET',
        url: 'https://api.digitalocean.com/v2/regions/',
        async: true,
        contentType: 'json',
        headers: {
                'Authorization': 'Bearer ' + kango.storage.getItem('do_manager_auth_token')
        }
	};

	kango.xhr.send(details, function(request) {
		if(request.status == 200 && request.response != null) 
		{
			kango.console.log('Cache Regions: API returned OK!');
			$.each(request.response.regions, function(row, object) 
			{
				kango.storage.setItem("regions_id_"+object.id+"_name", object.name);
				kango.storage.setItem("regions_id_"+object.id+"_slug", object.slug);
			});		
		}
		else
		{
			kango.console.log('API Key Invalid.');
		}	
	});

	// Cache Images
	var details = {
        method: 'GET',
        url: 'https://api.digitalocean.com/v2/images/',
        async: true,
        contentType: 'json',
        headers: {
                'Authorization': 'Bearer ' + kango.storage.getItem('do_manager_auth_token')
        }
	};

	kango.xhr.send(details, function(request) {
		if(request.status == 200 && request.response != null) 
		{
			kango.console.log('Cache Images: API returned OK!');
			$.each(request.response.images, function(row, object) 
			{
				kango.storage.setItem("images_id_"+object.id+"_name", object.name);
				kango.storage.setItem("images_id_"+object.id+"_distribution", object.name);
				kango.storage.setItem("images_id_"+object.id+"_slug", object.slug);
			});		
		}	
		else
		{
			kango.console.log('API Key Invalid.');
		}
	});

	// Cache Sizes
	var details = {
        method: 'GET',
        url: 'https://api.digitalocean.com/v2/sizes/',
        async: true,
        contentType: 'json',
        headers: {
                'Authorization': 'Bearer ' + kango.storage.getItem('do_manager_auth_token')
        }
	};

	kango.xhr.send(details, function(request) {
		if(request.status == 200 && request.response != null) 
		{
			kango.console.log('Cache Sizes: API returned OK!');
			
			$.each(request.response.sizes, function(row, object) 
			{
				//kango.console.log(object);
				kango.storage.setItem("sizes_id_"+object.size_slug+"_name", object.name);
				kango.storage.setItem("sizes_id_"+object.size_slug+"_slug", object.slug);
				kango.storage.setItem("sizes_id_"+object.size_slug+"_memory", object.memory);
				kango.storage.setItem("sizes_id_"+object.size_slug+"_cpu", object.cpu);
				kango.storage.setItem("sizes_id_"+object.size_slug+"_disk", object.disk);
				kango.storage.setItem("sizes_id_"+object.size_slug+"_cost_per_hour", object.price_hourly);
				kango.storage.setItem("sizes_id_"+object.size_slug+"_cost_per_month", object.price_monthly);				
			});	
		}
		else
		{
			kango.console.log('API Key Invalid.');
		}
	});
}

kango.addMessageListener('refresh_api_cache', function(event) {
	refresh_api_cache();
});
