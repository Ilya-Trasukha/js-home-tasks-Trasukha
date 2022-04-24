function TAJAXStorage() {
  var AjaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";
  var self = this,
    hash = {};
  $.ajax(AjaxHandlerScript,
    {
      type: "POST",
      cache: false,
      dataType: "json",
      data: {
        f: "READ",
        n: "Trias_drinks"
      },
      success: ReadData,
      error: ErrorHandler
    }
  );
  function ReadData(data) {
    if (data !== " ") {
      hash = JSON.parse(data.result);

      console.log("ReadData - " + data.result);
    } else if (data === " ") {
      $.ajax(AjaxHandlerScript,
        {
          type: "POST",
          cache: false,
          dataType: "json",
          data: {
            f: "INSERT",
            n: "Trias_drinks",
            v: JSON.stringify(hash)
          },
          success: DataLoadedInsert,
          error: ErrorHandler
        }
      );

      function DataLoadedInsert(data) {
        console.log("DataLoadedInsert - " + data.result);
      }
    }
  }

  function addValueOnTheServer(hash) {
    var password = Math.random();

    $.ajax(AjaxHandlerScript,
      {
        type: "POST",
        cache: false,
        dataType: "json",
        data: {
          f: "LOCKGET",
          n: "Trias_drinks",
          p: password
        },
        success: LockgetData,
        error: ErrorHandler
      }
    );

    function LockgetData(data) {
      console.log("LockgetData - " + data.result);

      $.ajax(AjaxHandlerScript,
        {
          type: "POST",
          cache: false,
          dataType: "json",
          data: {
            f: "UPDATE",
            n: "Trias_drinks",
            p: password,
            v: JSON.stringify(hash)
          },
          success: DataLoadedUpdate,
          error: ErrorHandler
        }
      );

      function DataLoadedUpdate(data) {
        console.log("DataLoadedUpdate - " + data.result);
      }
    }
  }

  function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + " " + ErrorStr);
  }

  self.addValue = function (key, value) {
    hash[key] = value;
    addValueOnTheServer(hash);
  };

  self.getValue = function (key) {
    return hash[key];
  };

  self.deleteValue = function (key) {
    if (key in hash) {
      delete hash[key];
      addValueOnTheServer(hash);
      return true;
    } else {
      return false;
    }
  };

  self.getKeys = function () {
    return (Object.keys(hash));
  };
}
