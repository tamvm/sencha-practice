new Ext.Application({
  name: "TouchStart",
  launch: function() {
    var hello = new Ext.Container({
      fullscreen: true,
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      items: [
        {
        xtype: 'list',
        title: 'List',
        fullscreen: false,
        iconCls: 'bookmarks',
        itemTpl: '{id} - {fullname}',
        store: new Ext.data.Store({
          model: 'ListItem',
          data: [
            {id: 1, fullname: 'Aaron Karp'},
            {id: 2, fullname: 'Baron Chandler'},
            {id: 3, fullname: 'Bryan Johnson'},
            {id: 4, fullname: 'David Evans'},
            {id: 5, fullname: 'John Clark'},
            {id: 6, fullname: 'Norbert Taylor'}
          ]
        })
      },
        {
          xtype: "container",
          html: "asd"
        }
      ]

    });
    this.viewport = hello;
  }
});
