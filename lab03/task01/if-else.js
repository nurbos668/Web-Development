let message;
let login = "Director";

message =
    (login == "Employee") ? "hello" :
        (login == "Director") ? "greetings" :
            (login == "") ? "no login" :
                "";
