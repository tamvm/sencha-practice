new Ext.Application({
  name: 'TouchStart',
  launch: function() {
    var form = new Ext.form.FormPanel({
      items: [
        {
        xtype: 'textfield',
        name : 'first',
        label: 'First name'
      },
      {
        xtype: 'textfield',
        name : 'last',
        label: 'Last name'
      },
      {
        xtype: 'emailfield',
        name : 'email',
        label: 'Email'
      }
      ]
    });

    this.viewport = new Ext.Carousel({
      fullscreen: true,
      direction: 'horizontal',
      items: [form, {
        layout: 'fit',
        html: 'TouchStart container 2'
      }, {
        layout: 'fit',
        html: 'TouchStart container 3'
      }]
    });

    Ext.Msg.confirm('It\'s Your Choice...', 'Would you like to proceed?', function(btn) {
                      var response = new Ext.MessageBox().show({
                        title: 'So be it!',
                        msg: 'You chose '+btn
                      });
                    });

    // Ext.Msg.alert("title", "content", function(btn) {
      // Ext.MessageBox().show({
        // title: "asd"
      // });
      // // Ext.Msg.alert("asd");
    // });
  }
});
