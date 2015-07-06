/*
Theme by: WebThemez.com
Note: Please use our back link in your site
*/
$( function() {
        var endDate = "july 6, 2015 12:00:00";

        $('.countdown.simple').countdown({ date: endDate });

        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html(
              "<div class='col-xs-6 col-md-3'><div class='clock'>" + this.leadingZeros(data.days, 2) + " <span>giorni</span></div></div><div class='col-xs-6 col-md-3'><div class='clock'>" + this.leadingZeros(data.hours, 2) + " <span>ore</span></div></div><div class='col-xs-6 col-md-3'><div class='clock'>" + this.leadingZeros(data.min, 2) + " <span>minuti</span></div></div><div class='col-xs-6 col-md-3'><div class='clock'>" + this.leadingZeros(data.sec, 2) + " <span>secondi</span></div></div>");
          }
        });

        $('.countdown.callback').countdown({
          date: +(new Date) + 10000,
          render: function(data) {
            $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
          },
          onEnd: function() {
            $(this.el).addClass('ended');
          }
        }).on("click", function() {
          $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
        });
      });