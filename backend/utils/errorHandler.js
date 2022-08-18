
class ErrorHandler extends Error{
    constructor(statusCode,Message){
        super(Message)

        this.statusCode=statusCode

        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports=ErrorHandler
