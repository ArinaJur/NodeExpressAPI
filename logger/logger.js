class Log {





    info = text => {
        console.info(`[${getData()}]`, "[INFO]", text);
    }
    warning = text => {
        console.info(`[${getData()}]`, "[WARN]", text);
    }
    error = text => {
        console.info(`[${getData()}]`, "[ERROR]", text);
    }
    // fatal
    server = text => {
        console.info(`[${getData()}]`, "[SERV]", text);
    }

    //api
    //runner
    //test
}

function getData() {
    const date = new Date();
    return date.toLocaleString('en-US', { timeZoneName: 'short' });
}

const log = new Log();
export default log;

