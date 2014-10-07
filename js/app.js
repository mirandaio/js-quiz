$(function() {
  var current = 0;
  var questions = [{
    'question': 'What is printed in the console?',
    'code': 'code1.html',
    'choices': ['true', 'false', 'ReferenceError'],
    'answer': 'true'
  }, {
    'question': 'What does the following snippet of code alert?',
    'code': 'code2.html',
    'choices': ['function', 'number', 'object', 'undefined'],
    'answer': 'undefined'
  }, {
    'question': 'What is the result?',
    'code': 'code3.html',
    'choices': ['true', 'false', 'TypeError'],
    'answer': 'true';
  }, {
    'question': 'What is the result?',
    'code': 'code4.html',
    'choices': ['true', 'false', 'TypeError', 'NaN'],
    'answer': 'false'
  }, {
    'question': 'What is alerted?',
    'code': 'code5.html',
    'choices': ['number', 'function', 'undefined', 'string', 'Error'],
    'answer': 'function'
  }, {
    'question': 'What is the result?',
    'code': 'code6.html',
    'choices': ['0', '2', '11', '"11"'],
    'answer': '2'
  }, {
    'question': 'What is the order of values alerted?',
    'code': 'code7.html',
    'choices': ['1, 2', '1, 3', '2, 1', '2, 3', '3, 1', '3, 2'],
    'answer': '3, 1'
  }];

  var setQuestion = function() {
    var question = questions[current];
    var numChoices = question.choices.length;
    var ul = $('ul');

    $('.question').text(question.question);
    $.get('views/' + question.code, function(data) {
      console.log('views/' + question.code);
      $('.code').text(data);
    });

    for(var i = 0; i < numChoices; i++) {
      ul.append('<li>' + question.choices[i] + '</li>');
    }
  };

  $('.start').click(function() {
    setQuestion();
    $('.welcome').fadeOut('fast', function() {
      $('.quiz').fadeIn('fast');
    });
  });
});
