console.log("JS");

function tri(){
    let val = $('input[name="flexRadioDefault"]:checked').val();
    console.log(val);
    if(val == "sql"){
        sqldata()
    }else if (val == "redshift") {
        test()
    }else {
        $("#redtab").html("Please select database type");
    }
}

function sqldata() {
    $("#redtab").html("");
    $("#time").html("");
    query = $("#query").val();
    console.log(query);
    $.ajax({
        url: "http://100.25.124.235/api.php?method=getdata",
        startTime: performance.now(),
        method: "POST",
        data: {
            res: 'GET',
            query : query,
        },
        datatype: "json",
        success: function (response) {
            console.log(response);
            let data = JSON.parse(response);

        var col = [];
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.classList.add("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("redtab");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

              //Calculate the difference in milliseconds.
        var time = performance.now() - this.startTime;

        //Convert milliseconds to seconds.
        var seconds = time / 1000;

        //Round to 3 decimal places.
        seconds = seconds.toFixed(3);

        //Write the result to the HTML document.

        $("#time").html("Time Elapsed : "+ seconds+ ' seconds');



        },
        error: function (response) {
            // console.log(response);
        },
    });
    /*  }*/
}

function test() {
    $("#redtab").html("");
    $("#time").html("");
	query = $("#query").val();
	console.log(query);
    $.ajax({
        url: "http://100.25.124.235/api.php?method=getrdsdata",
        startTime: performance.now(),
        method: "POST",
        data: {
        	res: 'GET',
        	query : query,
        },
        datatype: "json",
        success: function (response) {

             //Calculate the difference in milliseconds.
        var time = performance.now() - this.startTime;

        //Convert milliseconds to seconds.
        var seconds = time / 1000;

        //Round to 3 decimal places.
        seconds = seconds.toFixed(3);

        $("#time").html("Time Elapsed : "+ seconds+ ' Mili Seconds');

        console.log(result);

             $("#redtab").html(response);
        },
        error: function (response) {
             console.log(response);
        },
    });
    /*  }*/
}

function reset(){
     $("#redtab").html("");
     $("#time").html("");
     $("#query").val("");
}