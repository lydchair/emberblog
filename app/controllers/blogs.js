import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        deleteBlog: function(id){
            this.store.findRecord('blog',id).then(function(blog){
            blog.deleteRecord();

            blog.save();


        });
    },
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
         description:''


     });
    },    
}

});
