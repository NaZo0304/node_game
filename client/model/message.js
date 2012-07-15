var MessageModel = Backbone.Model.extend({
	initialize: function(){
		this.set({});
	}
});
var MessageCollection = Backbone.Collection.exntend({
	
	initialize: function(){
		var self = this;
		
		this.bind('add', function(model){
			self.add(model);
		});
		
		this.bind('modify', function(model){
			self.get(model.id).set(model);
		});

		this.bind('remove', function(){
			self.remove(model.id);
		});
	}
});
