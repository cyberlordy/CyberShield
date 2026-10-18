
function checkResult() {
    var name = document.getElementById("studentName").value;
    var id = document.getElementById("studentId").value;
    var result = document.getElementById("result");

    if (name == "" || id == "") {
        result.innerHTML = "<h2>Please enter your name and student ID.</h2>";
        return;
    }

    if (id == "CT001" && name.toLowerCase() == "john smith") {
        result.innerHTML = `
            <h2>Student Result</h2>
            <p><b>Name:</b> John Smith</p>
            <p><b>Student ID:</b> CT001</p>
            <p><b>Class:</b> SS2</p>

            <table border="1" cellpadding="10" cellspacing="0">
                <tr>
                    <th>Subject</th>
                    <th>Score</th>
                </tr>
                <tr><td>Mathematics</td><td>85</td></tr>
                <tr><td>English</td><td>78</td></tr>
                <tr><td>Computer Studies</td><td>92</td></tr>
                <tr><td>Physics</td><td>74</td></tr>
                <tr><td>Chemistry</td><td>81</td></tr>
            </table>

            <p><b>Total:</b> 410 / 500</p>
            <p><b>Average:</b> 82%</p>
            <p><b>Grade:</b> A</p>
            <button onclick="window.print()">Print Result</button>
        `;
    } else {
        result.innerHTML = "<h2>Result not found. Check your details.</h2>";
    }
}
