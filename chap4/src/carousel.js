new Ext.Application({
  name: 'TouchStart',
  launch: function() {
    this.viewport = new Ext.Carousel({
      fullscreen: true,
      direction: 'horizontal',
      items: [{
        html: 'TouchStart container 1'
      }, {
        html: 'TouchStart container 2'
      }, {
        html: 'TouchStart container 3'
      }
      ]
    });
  }
});
