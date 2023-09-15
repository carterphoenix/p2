function TemplateProcessor(template) {
    this.template = template;
  }
  
  TemplateProcessor.prototype.fillIn = function (dictionary) {
    // Use a regular expression to find all instances of {{property}}
    return this.template.replace(/{{(.*?)}}/g, (match, property) => {
      // Check if the property exists in the dictionary
      return dictionary[property] || '';
    });
  };
  
  // Example usage
  var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
  var dateTemplate = new TemplateProcessor(template);
  
  var dictionary = { month: 'July', day: '1', year: '2016' };
  var str = dateTemplate.fillIn(dictionary);
  console.log(str); // 'My favorite month is July but not the day 1 or the year 2016'
  
  // Case: property doesn't exist in dictionary
  var dictionary2 = { day: '1', year: '2016' };
  var str2 = dateTemplate.fillIn(dictionary2);
  console.log(str2); // 'My favorite month is  but not the day 1 or the year 2016'
