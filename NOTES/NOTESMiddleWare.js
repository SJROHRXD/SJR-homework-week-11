// A Function, Program, Something That Runs between the time that Server gets request, and time that Server sends request out to client

// app.get processes request

// Middleware is anything that happens in time between request and response

// Every single thing you write in relation to actions w/ Express will be Middleware

            // app.get("/", (req, res) => {
            //     res.send("Intro Page")
            // })

            // app.get("/", (req, res) => {
            //     res.send("Note Page")
            // })

            // app.listen(3000);

// GLOBAL MIDDLEWARE //

app.use(logger);
// run before other requests
// middleware runs in order you define it
// when creating global actions, place at top so they happen before different controller actions

// EXAMPLES //

app.get("/", (req, res) => {
    res.send("Intro Page")
    console.log("Intro Page")
})
// accepts path
// accepts list of different middlware

app.get("/users", auth, (req, res) => {
    res.send("Note Page")
    console.log("Note Page")
    console.log("user is admin = ${req.admin}.")
})
// added auth function

function logger (request, response, next) {
    console.log("log")
    console.log(req.originalUrl)
    next() // next piece of middleware will run
}

// MIDDLEWARE SPECIFIC TO SINGLE ACTION //

function auth (request, response, next) {
    if (req.query.admin === "true") {
        req.admin = true
    next()
    } else { 
    res.send("NO AUTH")
    }
}
// check to see if user is authenticated
// should fail this auth check cuz we didn't pass ADMIN IS TRUE
// but if localhost:3000/users?admin=true; then true

// inside middleware, access request and response so we can exit out OR
// so we can auth people by checking query parameters

app.listen(3000);

// next does NOT WORK THE SAME AS RETURNING FROM A FUNCTION
// cannot set headers after they're sent to client
// exit out of function, NEED TO CALL RETURN, cuz next will execute again

// https://www.youtube.com/watch?v=lY6icfhap2o