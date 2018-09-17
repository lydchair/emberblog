import Controller from '@ember/controller';
export default Controller.extend({
actions: {
    editBlog: function(id){
        var self = this;
        var title = this.get('model.title');
        var description = this.get('model.description');

    // Update Blog
    this.store.findRecord('blog', id).then(function(blog){
        blog.set('title', title);
        blog.set('description', description)

        // Save to Database
        blog.save();

        self.transitionToRoute('blogs');


    });
    }
}
});
