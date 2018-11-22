import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        removeTask(task) {
            task.destroyRecord();
        },

        taskStateUpdated(task) {
            task.set('done', !task.get('done'));
            task.save();
        },

        editTask(task) {
            task.set('editMode', true);
        },

        doneEditing(task) {
            task.set('editMode', false);
            task.save();
        },

        addTask() {
            const task = this.get('store').createRecord('task', {
                body: 'Temporary Text',
                done: false
            });
            task.save().then()
        }
    }
});
