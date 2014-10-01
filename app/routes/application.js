import Ember from 'ember';

export default Ember.Route.extend({
    
    setupController: function( controller, model ) {
        this._super( controller, model );

        setInterval( function() {
            var val = model.get( 'apples.0.position.x' );
            val = parseInt( val, 10 );
            val += 5;
            model.set( 'apples.0.position.x', val );
        }.bind( this ), 1000 );
    },

    model: function() {
        return Ember.Object.create({ 
            apples: [
                Ember.Object.extend({
                    // This is the computed property
                    position_x: Ember.computed.alias( 'position.x' ),

                    data: Ember.Object.create({
                        id: "a1" ,
                        name:"My Apple"
                    }), 
                    position: Ember.Object.create({
                        x: 25,
                        y: 25
                    })
                }).create(),
                Ember.Object.create({
                    data: Ember.Object.create({
                        id: "a2",
                        name:"Your Apple"
                    }), 
                    position: Ember.Object.create({
                        x: 25,
                        y: 12 
                    })
                })
            ],
            oranges: [
                {
                    data: Ember.Object.create({
                        id: "o1",
                        field1: "field1",
                        field2: "field2"
                    })
                },
                {
                    data: Ember.Object.create({
                        id: "o2",
                        field1: "field1",
                        field2: "field2"
                    })
                }
        ]});
    }

});