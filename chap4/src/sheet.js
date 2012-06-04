new Ext.Application({
  name: 'TouchStart',
  launch: function() {
    var layoutPanel = new Ext.Panel({
      fullscreen: true,
      layout: 'card',
      id: 'layoutPanel',
      cardSwitchAnimation: 'slide',
      activeItem: 1,
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
          text: 'Sheet',
          handler: function() {
            var mySheet = new Ext.Sheet({
              height: 250,
              layout: 'vbox',
              stretchX: true,
              enter: 'top',
              exit: 'top',
              items: [{
                xtype: 'container',
                layout: 'fit',
                flex: 1,
                padding: 10,
                style: 'color: #FFFFFF',
                html: 'A sheet is also a panel. It can do anything the panel does.'
              }, {
                xtype: 'button',
                height: 20,
                text: 'Close Me',
                handler: function() {
                  this.up('sheet').hide();
                }
              }],
              listeners: {
                hide: {
                  fn: function(){ this.destroy(); }
                }
              }
            });
            mySheet.show();
          }
        }, {
          text: "ActionSheet",
          handler: function() {
            var actionSheet = new Ext.ActionSheet({
              items: [
                {
                text: 'Delete',
                ui: 'decline'
              },
              {
                text: 'Save',
                ui: 'confirm'
              },
              {
                text: 'Cancel',
                handler: function() {
                  this.up('actionsheet').hide();
                }
              }],
              listeners: {
                hide: {
                  fn: function(){ this.destroy(); }
                }
              }
            });
            actionSheet.show();
          }

        }
      ],
    }],
  });
}
})
