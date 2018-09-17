import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addBlog: function(){

            var title = this.get('title');
            var description = this.get('description');

       //Create New Blog
			var newBlog = this.store.createRecord('blog', {
				title: title,
				description: description,

			});

			// Save to Database
            newBlog.save();
            

         //clear form
         this.setProperties({
             title: '',
             description:'',
             


         });
        }
    }
});
