new Ext.Application({
  name: 'TouchStart',
  launch: function() {
    Ext.regModel('ListItem', {
      fields: [
        {name: 'first', type: 'string'},
        {name: 'last', type: 'string'}
      ]
    });
    this.viewport = new Ext.Panel({
      fullscreen: true,
      layout: 'fit',
      items: [{
        xtype: 'list',
        grouped: true,
        indexBar: true,
        itemTpl: '{last}, {first}',
        store: new Ext.data.Store({
          model: 'ListItem',
          data: [
            {first: 'Aaron', last: 'Karp'},
            {first: 'Baron', last: 'Chandler'},
            {first: 'Bryan', last: 'Johnson'},
            {first: 'David', last: 'Evans'},
            {first: 'John', last: 'Clark'},
            {first: 'Norbert', last: 'Taylor'}
          ],
          getGroupString : function(record) {
            return record.get('last')[0];
          },
        }),
      }]
    });
  }
});
