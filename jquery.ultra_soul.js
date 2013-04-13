(function($) {

  $.fn.ultraSoul = function(ultra_text) {
    $this = $(this);
    ultra_text = ultra_text || "ｳﾙﾄﾗｿｳｯ!";
    return $this.text($this.text() + ultra_text);
  };

})(jQuery);