module.exports._getEmployeeDetails =  function (req) {
    console.log('Custom Handler Triggered');
    return[
        {
            "ID" : "EMP01",
            "NAME" : "Sumit",
            "EMAIL_ID" : "sumit.aoh@gmail.com"
        }
    ];
}

module.exports._generateEmpId = function(req) {
    console.log(
        'Executed before create'
    )
}