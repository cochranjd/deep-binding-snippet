import Ember from 'ember';

export default Ember.Controller.extend({
   
   changes: 0,

   positionChanged: function() {
        var val = this.get( 'changes' );
        val = parseInt( val, 10 );
        this.set( 'changes', val + 1 );
    }.observes( 'model.apples', 'model.apples.@each.position_x' ),

    actions: {
        output: function() {
            console.log( 'TOTAL: ' + this.get( 'model.apples.0.position_x' ));
        }
    }

});