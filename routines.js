function resetChecklist() {
    // Replace 'Sheet1' with the name of your sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Routines'); 
    var range = sheet.getRange('b2:b100'); // Adjust the range to match your checklist range
    range.setValue(''); // Clears all checkmarks or values in the range
  }
  
  function createTrigger() {
    // Deletes any existing triggers to avoid duplicates
    ScriptApp.getProjectTriggers().forEach(function(trigger) {
      if (trigger.getHandlerFunction() === 'resetChecklist') {
        ScriptApp.deleteTrigger(trigger);
      }
    });
    // Create a new trigger to run the function daily
    ScriptApp.newTrigger('resetChecklist')
      .timeBased()
      .everyDays(1)
      .atHour(0) // This sets the time at midnight; adjust as needed
      .create();
  }