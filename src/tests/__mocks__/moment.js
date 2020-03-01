// import moment from "moment"
// import the actual moment. Line above will import the mock 'moment'
// for this class and give a stack trace error;
const moment = require.requireActual('moment')

export default (timestamp = 0) => {
    return moment(timestamp)
}