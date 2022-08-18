// get custom fields
def customFields = get("/rest/api/2/status")
        .asObject(List)
        .body
        .findAll { (it as Map).custom } as List<Map>

def input1CfId = customFields.find { it.name == 'Custom Field 1' }?.id
def input2CfId = customFields.find { it.name == 'Custom Field 2' }?.id
def outputCfId = customFields.find { it.name == 'Output Custom Field' }?.id
def projectKey = "TP"

if (issue == null || ((Map)issue.fields.project).key != projectKey) {
    logger.info("Wrong Project ${issue.fields.project.key}")
    return
}

def input1 = issue.fields[input1CfId] as Integer
def input2 = issue.fields[input2CfId] as Integer

if (input1 == null || input2 == null) {
    logger.info("Calculation using ${input1} and ${input2} was not possible")
    return
}

def output = input1 + input2

put("/rest/api/2/issue/${issue.key}")
        .header("Content-Type", "application/json")
        .body([
        fields:[
                (outputCfId): output
        ]
])
        .asString()
