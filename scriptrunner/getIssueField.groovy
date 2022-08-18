def issueKey = 'TP-1'

def result = get('/rest/api/2/issue/' + issueKey)
        .header('Content-Type', 'application/json')
        .asObject(Map)
if (result.status == 200){
    return result.body.fields
} else {
    return "Failed to find issue: Status: ${result.status} ${result.body}"
}