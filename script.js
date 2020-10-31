$(document).ready(function(){
   //Date picker
   
   $( function() {
    $( ".datepicker" ).datepicker();
  } );

  //masks
  $('#cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.phone').mask('(00)00000-0000');
  $('#cep').mask('00000-000');
  $('#estado').mask('AA');
  $('.date').mask('00/00/0000')

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
    <div class="col-8 col-md-4 column-left--profissional">
      <select class="form-control profissional--select" id="exampleFormControlSelect1">
        <option disabled selected>Profissional</option>
        <option>Engenheiros</option>
        <option>Arquitetos</option>
        <option>Técnicos</option>
        <option>Encarregados</option>
      </select>
    </div>
    <div class="col-4 col-md-2 column-right--profissional">
      <input placeholder="Qtd..." class="profissional--quantity" type="text">
    </div>
  </div>
  `;
  
  const markupOutrosProfissionais = `
  <div class="row profissional--row">
    <div class="col-8 col-md-4 pl-0">
      <input class="profissional--outros" type="text" placeholder="Tipo de profissional...">
    </div>
    <div class="col-4 col-md-2">
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

  // Adicionar cursos / atestados / clientes
  $('.button-certificacao').on('click', () => {
    $('.row-atestados').append($('.certificacao').html());
  });

  $('.button-atestado').on('click', () => {
    $('.row-atestados').append($('.atestado').html());
  });
  
  $('.button-cursos').on('click', () => {
    $('.row-cursos').append($('.cursos').html());
  });

  $('.button-clientes').on('click', () => {
    $('.row-clientes').append($('.clientes').html());
  });
  $('.button-obras').on('click', () => {
    $('.row-obras').append($('.obras').html());
  });

  // Progress bar navigation
  $('#account').on('click', () => {
    $('fieldset').hide();
    $('#1').css({
      'display': 'block',
      'opacity': 1
    });
  });
  $('#personal').on('click', () => {
    $('fieldset').hide();
    $('#2').css({
      'display': 'block',
      'opacity': 1
    });
  });
  $('#payment').on('click', () => {
    $('fieldset').hide();
    $('#3').css({
      'display': 'block',
      'opacity': 1
    });
  });

  // Cidades e Estados
  $(document).ready(function () {
		
    $.getJSON('estados.json', function (data) {

      var items = [];
      var options = '<option value="">Escolha um estado</option>';	

      $.each(data, function (key, val) {
        options += '<option value="' + val.nome + '">' + val.nome + '</option>';
      });					
      $("#estados").html(options);				
      
      $("#estados").change(function () {				
      
        var options_cidades = '';
        var str = "";					
        
        $("#estados option:selected").each(function () {
          str += $(this).text();
        });
        
        $.each(data, function (key, val) {
          if(val.nome == str) {							
            $.each(val.cidades, function (key_city, val_city) {
              options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
            });							
          }
        });

        $("#cidades").html(options_cidades);
        
      }).change();		
    
    });
  
  });
  
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