$(document).ready(function(){
  //masks
  $('#cnpj').mask('00.000.000/0000-00', {reverse: true});

  // Outros Checkbox
  $('#outros').on('change', () => {
    $('.text-area').toggleClass('d-none');
  });

  // Form accordion
  $('.divider').on('click', (e) => {
    e.stopPropagation();
    $(e.target).parent().toggleClass('active');
  });

  // Adiocionar profissionais
  const markupProfissional = `
  <div class="row profissional--row">
    <div class="col-8 col-md-4 pl-0 pr-1">
      <select class="form-control profissional--select" id="exampleFormControlSelect1">
        <option disabled selected>Profissional</option>
        <option>Engenheiros</option>
        <option>Arquitetos</option>
        <option>Técnicos</option>
        <option>Encarregados</option>
        <option id=profissinal--outro>Quero acrescentar outros</option>
      </select>
    </div>
    <div class="col-4 col-md-2 pr-0 pl-1">
      <input placeholder="Qtd..." class="profissional--quantity" type="text">
    </div>
  </div>
  `;
  
  const markupOutrosProfissionais = `
  <div class="row profissional--row">
    <div class="col-8 col-md-4 pl-0 pr-1">
      <input class="profissional--outros" type="text" placeholder="Tipo de profissional...">
    </div>
    <div class="col-4 col-md-2 pr-0 pl-1">
      <input placeholder="Qtd..." class="profissional--quantity" type="text">
    </div>
  </div>
  `

  $('.profissional--button.btn-primary').on('click', (e) => {
    e.stopPropagation();
    $('.profissional').append(markupProfissional);
  });

  $('.profissional--button-outros').on('click', (e) => {
    e.stopPropagation();
    $('.profissional').append(markupOutrosProfissionais);
  });

  // Certificacoes e atestados
  $('.button-certificacao').on('click', () => {
    $('.row-atestados').append($('.certificacao').html());
  });

  $('.button-atestado').on('click', () => {
    $('.row-atestados').append($('.atestado').html());
  });
  
  //Date picker
  $( function() {
    $( ".datepicker" ).datepicker();
  } );
  
  jQuery(function($){
    $.datepicker.regional['pt-BR'] = {
            closeText: 'Fechar',
            prevText: '&#x3c;Anterior',
            nextText: 'Pr&oacute;ximo&#x3e;',
            currentText: 'Hoje',
            monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
            'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
            monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
            'Jul','Ago','Set','Out','Nov','Dez'],
            dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
            dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
            dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['pt-BR']);
});


  // Form tabs
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  
  $(".next").click(function(){
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 600
  });
  });
  
  $(".previous").click(function(){
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //Remove class active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show();
  
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  previous_fs.css({'opacity': opacity});
  },
  duration: 600
  });
  });
  
  $('.radio-group .radio').click(function(){
  $(this).parent().find('.radio').removeClass('selected');
  $(this).addClass('selected');
  });
  
  $(".submit").click(function(){
  return false;
  })
  
  });