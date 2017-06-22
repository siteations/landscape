$('#start').ready(function() {
      $e = $('#start');
      console.log($e);
      if ($e[0].contentDocument.documentElement) $e.replaceWith($($e[0].contentDocument.documentElement).clone());
      // if ($e[0].contentDocument) $e.remove();

      var series = ['#info', '#info_1', '#info_2'];
      series.forEach((item,i)=>{
        var modal=`<div id="m${i}" class="modal">
          <div class="modal-content">
            <h4>Landscape Content Here</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a class="modal-action modal-close waves-effect waves-green btn-flat" onClick={$('#m${i}').modal('hide')}>Close</a>
          </div>
        </div>`

      $('body').append(modal);

        $more = $(item);
        $more.addClass("red");
        var r = $more.attr('width');
        $more.attr('rx', r), $more.attr('ry', r);
        $more.click(e=>{
          var id = '#m'+i;
          $(id).modal('show');
        });
      })

 });
