new Ext.Application({
  name: 'TouchStart',
  launch: function() {
    this.viewport = new Ext.TabPanel({
      fullscreen: true,
      cardSwitchAnimation: 'slide',
      tabBar:{
        dock: 'top',
        layout: {
          pack: 'center'
        }
      },
      items: [{
        xtype: 'container',
        title: 'Item 1',
        fullscreen: false,
        html: 'TouchStart container 1',
        iconCls: 'info'
      }, {
        xtype: 'container',
        html: 'TouchStart container 2',
        iconCls: 'home',
        title: 'Item 2'
      }, {
        xtype: 'container',
        html: 'TouchStart container 3',
        iconCls: '',
        title: 'Item 3'
      }]
    });
  }
});
