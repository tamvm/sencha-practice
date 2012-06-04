// Card Layout
new Ext.Application({
  name: 'TouchStart',
  launch: function() {
    var hboxTest = new Ext.Container({
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      items: [{
        xtype: 'container',
        flex: 1,
        html: 'My flex is 1',
        margin: 5,
        style: 'background-color: #7FADCF'
      }, {
        xtype: 'container',
        flex: 2,
        html: 'My flex is 2',
        margin: 5,
        style: 'background-color: #7FADCF'
      }, {
        xtype: 'container',
        width: 80,
        html: 'My width is 80',
        margin: 5,
        style: 'background-color: #7FADCF'
      }]
    });
    var vboxTest = new Ext.Container({
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      items: [{
        xtype: 'container',
        flex: 1,
        html: 'My flex is 1',
        margin: 5,
        style: 'background-color: #7FADCF'
      }, {
        xtype: 'container',
        flex: 2,
        html: 'My flex is 2',
        margin: 5,
        style: 'background-color: #7FADCF'
      }, {
        xtype: 'container',
        width: 80,
        html: 'My width is 80',
        margin: 5,
        style: 'background-color: #7FADCF'
      }]
    });

    var fitTest = new Ext.Container({
      layout: 'fit',
      items: [{
        xtype: 'button',
        ui: 'decline',
        text: 'Do Not Press'
      }]
    });

    var layoutPanel = new Ext.Panel({
      fullscreen: true,
      layout: 'card',
      id: 'layoutPanel',
      cardSwitchAnimation: 'slide',
      activeItem: 1,
      items: [hboxTest, vboxTest],
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
          text: 'hbox',
          handler: function() {
            var cards = Ext.getCmp('layoutPanel');
            cards.setActiveItem(0);
          }},{
            text: 'vbox',
            handler: function() {
              var cards = Ext.getCmp('layoutPanel');
              cards.setActiveItem(1);
            }
          },{
            text: 'fit',
            handler: function() {
              var cards = Ext.getCmp('layoutPanel');
              cards.setActiveItem(2);
            }
          },{
            text: 'complex',
            handler: function() {
              var cards = Ext.getCmp('layoutPanel');
              cards.setActiveItem(3);
            }
          }],
      }],
    });
    this.viewport = layoutPanel;
  }
});
